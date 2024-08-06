import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
// Import images directly
import img1 from "../../assets/men1.jpg";
import img2 from "../../assets/hmgoepprod2.jpeg";
import img3 from "../../assets/hmgoepprod3.jpeg";
import img4 from "../../assets/hmgoepprod4.jpeg";

const BasicCarousel = ({ products }: { products: any }) => {
  console.log("Products in the Carousel", products);

  const images = [img1, img2, img3, img4];
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            style={{ maxWidth: "500px", height: "auto" }}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
            style={{ maxWidth: "500px", height: "auto" }}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
            style={{ maxWidth: "500px", height: "auto" }}
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default BasicCarousel;
