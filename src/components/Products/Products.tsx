import { Grid } from "@mui/material";
import { Item } from "../../common/Item.js";
import { useEffect, useState } from "react";
import { DisplayProducts } from "../DisplayProduct/DisplayProduct.js";
import { getAllProducts } from "../../services/productService.js";
import LoadingSkeleton from "../LoadingSkelton/LoadingSkelton.js";

const Products = () => {
  const [allProducts, setAllProducts] = useState(null);

  useEffect(() => {
    getAllProducts()
      .then((data: any) => {
        console.log("+++++++++++++", data);
        setAllProducts(data);
      })
      .catch((e: any) => console.log(e));
  }, []);

  return (
    <Grid container spacing={0}>
      {allProducts ? (
        <Grid item xs={12}>
          <Item>
            <DisplayProducts products={allProducts} />
          </Item>
        </Grid>
      ) : (
        <LoadingSkeleton />
      )}
    </Grid>
  );
};

export default Products;
