import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { updateProductById } from "../../services/productService.js";

const Product = ({
  productData,
  onRemoveFav,
}: {
  productData: any;
  onRemoveFav?: any;
}) => {
  const { id, image, name, price } = productData;
  const [fav, setFav] = useState(productData.favorite);

  const handleFavourite = () => {
    setFav(!fav);
  };

  useEffect(() => {
    console.log("seting fav");
    updateProductById(id, fav);
    if (!fav && onRemoveFav) {
      onRemoveFav(id);
    }
  }, [fav]);

  return (
    <Card sx={{ position: "relative", maxWidth: 345 }}>
      <CardMedia component="img" alt={name} height="450" image={image} />

      <IconButton
        sx={{ color: "#d6131d", position: "absolute", bottom: 120, right: 16 }}
        aria-label="add to favorites"
        onClick={handleFavourite}
      >
        {fav ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
      </IconButton>

      <CardContent>
        <Link to={`/product/${productData.id}`}>
          <Typography gutterBottom variant="subtitle1" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            ${price}
          </Typography>
        </Link>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export { Product };
