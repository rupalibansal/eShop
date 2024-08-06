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

import { data } from "./data";

export const getAllProducts = async () => {
  const collectionRef = collection(db, "products");
  const snapshot = await getDocs(collectionRef);
  console.log(snapshot);
  const cleanData = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  console.log(cleanData);
  return cleanData;
};

export const getProductById = async (id) => {
  // get the reference
  const docRef = doc(db, "products", id);
  console.log("getting id ++++ ");
  // look up the document based on the reference
  const snapshot = await getDoc(docRef);
  // if a document with id doesn't exist throw an error
  if (!snapshot.exists()) {
    throw new Error("Could not find a product with id " + id);
  }
  // otherwise we get the document to grab the data
  return { id: snapshot.id, ...snapshot.data() };
};

export const seedProducts = async () => {
  const collectionRef = collection(db, "products");

  console.log("Seeding products");
  const seedData = createDataForDB();

  const addPromises = seedData.map(async (item) => {
    return await addDoc(collectionRef, item);
  });

  await Promise.all(addPromises);
};

export const createDataForDB = () => {
  const products = [];

  data.forEach((product) => {
    products.push({
      title: product.name,
      price: product.price.value,
      variantSizes: product.variantSizes,
      favorite: false,
      featured: false,
      imageUrl: product.images[0].baseUrl,
    });
  });

  return products;
};

export const updateProductById = async (id, isFavorite) => {
  // get the reference
  const docRef = doc(db, "products", id);
  // look up the document based on the reference
  const snapshot = await getDoc(docRef);
  // if a document with id doesn't exist throw an error
  if (!snapshot.exists()) {
    throw new Error(
      "Could not find product in productsCollection with id " + id
    );
  }

  const updatedProduct = {
    ...snapshot.data(),
    favorite: isFavorite,
  };

  await updateDoc(docRef, updatedProduct);
};
