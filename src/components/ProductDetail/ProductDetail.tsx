import { Grid, Stack } from "@mui/material";
import { Item } from "../../common/Item";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { addProductToCart } from "../../services/cartService.js";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown.js";
import { useSnackbar } from "notistack";

const ProductDetail = ({ product }: { product: any }) => {
  const [size, setSize] = useState(null);

  const { enqueueSnackbar } = useSnackbar();
  const showSnackbar = () => {
    enqueueSnackbar("Item added to cart", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };
  const handleChange = (e: any) => {
    console.log("selected value is ", e.target.value);
  };

  const handleDropdownSelection = (selectedSize: any) => {
    console.log("selected value is ", selectedSize);
    setSize(selectedSize);
  };

  const handleAddToCart = (e) => {
    if (!size) {
      enqueueSnackbar("Please select a size", {
        variant: "error",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
      });

      return;
    }

    const { imageUrl, price, title } = product;

    const productToAdd = {
      imageUrl,
      price,
      title,
      quantity: 1,
      size,
    };

    addProductToCart(productToAdd);
    showSnackbar();
  };
  return (
    <Grid container spacing={0}>
      {product ? (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid
            item
            xs={4}
            md={10}
            lg={10}
            justifyContent="center"
            alignItems="center"
            style={{ padding: 0, margin: 40 }}
          >
            <img style={{ maxWidth: 345 }} src={product.imageUrl} />
          </Grid>

          <Grid item xs={4} md={10} lg={10}>
            <Stack
              justifyContent="space-around"
              alignItems="center"
              spacing={4}
            >
              <Typography gutterBottom variant="h4" component="div">
                {product.title}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {product.price}
              </Typography>
              <Button
                variant="contained"
                endIcon={<ShoppingCartIcon />}
                onClick={handleAddToCart}
              >
                Add to cart
              </Button>
              <Dropdown
                variantSizes={product.variantSizes}
                onChange={handleDropdownSelection}
              />
            </Stack>
          </Grid>
        </Grid>
      ) : (
        <Grid item xs={12}>
          <Item>
            <Stack spacing={20} direction={"row"}>
              <Skeleton variant="rectangular" width={350} height={220} />
              <Stack>
                <Skeleton variant="text" width={350} height={20} />
                <Skeleton variant="text" width={350} height={20} />
                <Skeleton variant="text" width={350} height={20} />
              </Stack>
            </Stack>
          </Item>
        </Grid>
      )}
    </Grid>
  );
};

export default ProductDetail;
