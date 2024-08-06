import { Grid } from "@mui/material";
import { Item } from "../../common/Item.js";
// import { useEffect, useState } from "react";
import { DisplayProducts } from "../DisplayProduct/DisplayProduct.js";
import { getAllProducts } from "../../services/productService.js";
import LoadingSkeleton from "../LoadingSkelton/LoadingSkelton.js";
import BasicCarousel from "../BasicCarousel/BasicCarousel.js";
import { useContext, useEffect, useState } from "react";
import ProductsContext from "../../context/ProductsContext.js";

const Products = () => {
  const [allProducts, setAllProducts] = useState(null);

  // const handleRemoveFav = () => {
  //   console.log("in all products");
  // };
  useEffect(() => {
    getAllProducts()
      .then((data: any) => {
        console.log("+++++++++++++", data);
        setAllProducts(data);
      })
      .catch((e: any) => console.log(e));
  }, []);
  console.log("All Products", allProducts);

  const featuredProducts = allProducts?.filter(
    (product: any) => product.featured === true
  );
  console.log("Featured Products", featuredProducts);
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Item>
          <BasicCarousel products={featuredProducts} />
        </Item>
      </Grid>
      {allProducts ? (
        <Grid item xs={12}>
          <Item>
            <DisplayProducts
              products={allProducts}
              // onRemoveFav={handleRemoveFav}
            />
          </Item>
        </Grid>
      ) : (
        <LoadingSkeleton />
      )}
    </Grid>
  );
};

export default Products;
