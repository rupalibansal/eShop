import { Grid } from "@mui/material";
import { Item } from "../../common/Item";
import { Product } from "../Product/Product";

import { Key } from "react";

const DisplayProducts = ({
  products,
  onRemoveFav,
}: {
  products: any;
  onRemoveFav?: any;
}) => {
  console.log("Within Display Products", products);
  return (
    <Grid container spacing={0}>
      {products.map((product: any, k: Key | null | undefined) => {
        const dataToDisplay = {
          id: product.id,
          name: product.title,
          price: product.price,
          image: product.imageUrl,
          favorite: product.favorite,
        };
        return (
          <Grid key={k} item xs={6} md={4} lg={4}>
            <Item>
              <Product productData={dataToDisplay} onRemoveFav={onRemoveFav} />
            </Item>
          </Grid>
        );
      })}
    </Grid>
  );
};

export { DisplayProducts };
