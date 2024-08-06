import { Grid } from "@mui/material";
import { Item } from "../../common/Item.js";
import { useEffect, useState } from "react";
import { DisplayProducts } from "../DisplayProduct/DisplayProduct.js";
import { getAllProducts } from "../../services/productService.js";
import LoadingSkeleton from "../LoadingSkelton/LoadingSkelton.js";

const Favourites = () => {
  const [favProducts, setFavProducts] = useState([]);

  const removeFavourite = (id: any) => {
    console.log("removing fav product for id ", id);
    setFavProducts(favProducts.filter((item: any) => item.id !== id));
  };

  useEffect(() => {
    if (favProducts.length === 0) {
      getAllProducts()
        .then((data: any) => {
          const result = data.filter((item: any) => item.favorite === true);
          setFavProducts(result);
        })
        .catch((e: any) => console.log(e));
    }
  }, []);

  return (
    <Grid container spacing={0}>
      {favProducts ? (
        <Grid item xs={12}>
          <Item>
            <DisplayProducts
              products={favProducts}
              onRemoveFav={removeFavourite}
            />
          </Item>
        </Grid>
      ) : (
        <LoadingSkeleton />
      )}
    </Grid>
  );
};

export default Favourites;
