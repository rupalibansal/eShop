import Carousel from "react-material-ui-carousel";
import img1 from "../../assets/men1.jpg";
import img2 from "../../assets/men2.jpg";
import img3 from "../../assets/hmgoepprod3.jpeg";
import img4 from "../../assets/hmgoepprod4.jpeg";

const BasicCarousel = ({ products }: { products: any }) => {
  console.log("Products in the Carousel", products);

  const images = [img1, img2, img3, img4];
  return (
    <Carousel>
      {images?.map((image: any, i: any) => (
        <>
          <img style={{ maxWidth: 3000, height: 300 }} src={image} />
        </>
      ))}
    </Carousel>
  );
};

export default BasicCarousel;
