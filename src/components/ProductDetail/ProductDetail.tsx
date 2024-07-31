import { Grid, Stack } from "@mui/material";
import { Item } from "../../common/Item";
import Button from "@mui/material/Button";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Typography from "@mui/material/Typography";

import Skeleton from "@mui/material/Skeleton";

const ProductDetail = ({ product }: { product: any }) => {
  console.log("++++++++++++++++++++++++", product);

  const handleChange = (e: any) => {
    console.log("selected value is ", e.target.value);
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
                endIcon={<ShoppingBagIcon />}
                onClick={() => {}}
              >
                Add to bag
              </Button>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Select a size
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  {product.variantSizes.map((size: any) => {
                    return (
                      <FormControlLabel
                        value={size.filterCode}
                        control={<Radio />}
                        label={size.filterCode}
                        onChange={handleChange}
                      />
                    );
                  })}
                </RadioGroup>
              </FormControl>
              {/* <Typography gutterBottom variant="body1" component="div">
                <Typography variant="h6">Product Details: </Typography>
                {product.title}
              </Typography> */}
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
