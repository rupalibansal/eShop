import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/productService.js";

export const ProductsContext = createContext(null);

const ProductsProvider = ({ children }: { children: any }) => {
  // Set the search state context
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data: any) => {
        console.log("+++++++++++++", data);
        setAllProducts(data);
      })
      .catch((e: any) => console.log(e));
  }, []);

  return (
    <ProductsContext.Provider value={{ allProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
