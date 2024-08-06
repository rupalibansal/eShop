import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Item } from "../../common/Item";
import { Grid, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  getCartProducts,
  updateProductQuantityInCartCollection,
  removeProductFromCart,
} from "../../services/cartService.js";

const gridStyles = {
  paddingBottom: 2,
  paddingRight: 2,
  marginTop: 2,
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: 2000,
  height: 500,
};

const quantityStyles = {
  paddingLeft: 1,
  paddingRight: 1,
};

const Cart = () => {
  const [orderTotal, setOrderTotal] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    if (cartProducts.length === 0) {
      getCartProducts()
        .then((data: any) => {
          console.log("Cart Products", data);
          setCartProducts(data);
        })
        .catch((e: any) => console.log(e));
    }

    const orderTotal = cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
    setOrderTotal(Number.parseFloat(orderTotal).toFixed(2));
  }, [cartProducts]);

  const handleUpdateQuantity = (id: any, quantity: any, operation: any) => {
    console.log(id, quantity, operation);
    let newQuantity: any;

    if (operation === "add") {
      newQuantity = quantity + 1;
    }

    if (operation === "remove") {
      newQuantity = quantity - 1;
    }
    updateProductQuantityInCartCollection(id, newQuantity);

    const updatedCartProducts: any = cartProducts.map((cartProduct: any) => {
      return cartProduct.id === id
        ? { ...cartProduct, quantity: newQuantity }
        : cartProduct;
    });
    setCartProducts(updatedCartProducts);
  };

  const handleDelete = (id: any) => {
    console.log("deleting id ", id);
    removeProductFromCart(id);

    const updatedCartProducts: any = cartProducts.filter((cartProduct) => {
      return cartProduct.id !== id;
    });
    setCartProducts(updatedCartProducts);
  };

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
      </Grid>
      {cartProducts.length == 0 ? (
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Item>
              <Typography variant="h5">No items in cart</Typography>
            </Item>
          </Grid>
        </Grid>
      ) : (
        <Stack direction="row">
          <Grid container xs={4} md={6} spacing={0} sx={gridStyles}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      <b>Product</b>
                    </TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center">
                      <b>Quantity</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>Price</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>Order Total</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartProducts.map((cartProduct: any) => (
                    <TableRow
                      key={cartProduct.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {cartProduct.title}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <img
                          style={{ maxWidth: 100 }}
                          src={cartProduct.imageUrl}
                        />
                      </TableCell>
                      <TableCell align="right">
                        <ButtonGroup>
                          <Button
                            variant="contained"
                            aria-label="reduce"
                            disabled={cartProduct.quantity === 1}
                            onClick={() => {
                              const { id, quantity } = cartProduct;
                              handleUpdateQuantity(id, quantity, "remove");
                            }}
                          >
                            <RemoveIcon fontSize="small" />
                          </Button>
                          <Typography sx={quantityStyles}>
                            {cartProduct.quantity}
                          </Typography>
                          <Button
                            variant="contained"
                            aria-label="increase"
                            onClick={() => {
                              const { id, quantity } = cartProduct;
                              handleUpdateQuantity(id, quantity, "add");
                            }}
                          >
                            <AddIcon fontSize="small" />
                          </Button>
                          <IconButton
                            aria-label="delete"
                            onClick={() => {
                              handleDelete(cartProduct.id);
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </ButtonGroup>
                      </TableCell>
                      <TableCell align="center">${cartProduct.price}</TableCell>
                      <TableCell align="right">
                        ${(cartProduct.quantity * cartProduct.price).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid container xs={2} md={4} spacing={0} sx={gridStyles}>
            <Stack spacing={3}>
              <Typography variant="h4" component="div">
                {`Total Due today: $${orderTotal}`}
              </Typography>
              <Button disabled variant="contained" color="success">
                Checkout
              </Button>
            </Stack>
          </Grid>
        </Stack>
      )}
    </>
  );
};

export { Cart };
