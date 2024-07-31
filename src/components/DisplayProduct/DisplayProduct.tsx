import { Grid } from "@mui/material";
import { Item } from "../../common/Item";
import { Product } from "../Product/Product";

import { Key } from "react";
import { Link } from "react-router-dom";

function DisplayProducts({ products }: { products: any }) {
  console.log("Within Display Products", products);
  return (
    <Grid container spacing={0}>
      {products.map((product: any, k: Key | null | undefined) => {
        const dataToDisplay = {
          name: product.title,
          price: product.price,
          image: product.imageUrl,
        };
        return (
          <Grid key={k} item xs={6} md={4} lg={4}>
            <Link to={`/product/${product.id}`}>
              <Item>
                <Product productData={dataToDisplay} />
              </Item>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}

export { DisplayProducts };
