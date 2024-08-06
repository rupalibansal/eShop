import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../config/firestore";

export const getCartProducts = async () => {
  const collectionRef = collection(db, "cart");
  const snapshot = await getDocs(collectionRef);
  console.log(snapshot);
  const cleanData = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  console.log(cleanData);
  return cleanData;
};

export const addProductToCart = async (product) => {
  try {
    // grab reference to the collection
    const collectionRef = collection(db, "cart");
    // adding data to collection
    const docRef = await addDoc(collectionRef, product);
    return docRef.id;
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

export const removeProductFromCart = async (productId) => {
  const docRef = doc(db, "cart", productId);
  await deleteDoc(docRef);
};

export const updateProductQuantityInCartCollection = async (
  id,
  newQuantity
) => {
  // get the reference
  const docRef = doc(db, "cart", id);
  // look up the document based on the reference
  const snapshot = await getDoc(docRef);
  //   console.log(
  //     `data for id ${id}} is snapshot ${JSON.stringify(snapshot.data())}`
  //   );
  console.log("new quantity ", newQuantity);

  // if a document with id doesn't exist throw an error
  if (!snapshot.exists()) {
    throw new Error("Could not find product in cart with id " + id);
  }

  const productWithUpdatedQuantity = {
    ...snapshot.data(),
    quantity: newQuantity,
  };

  await updateDoc(docRef, productWithUpdatedQuantity);
};
