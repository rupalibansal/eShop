import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/productService.js";
import ProductDetail from "../../components/ProductDetail/ProductDetail.js";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("");

  useEffect(() => {
    setFetchStatus("LOADING");
    getProductById(id)
      .then((data) => {
        setFetchStatus("SUCCESS");
        console.log(data.id);
        setProduct(data);
      })
      .catch((error: any) => {
        setFetchStatus("FAILED");
        setError(error);
      });
  }, [id]);

  return (
    <>
      {fetchStatus === "LOADING" && <p>...loading</p>}
      {fetchStatus === "FAILED" && <p>{error.message}</p>}
      {fetchStatus === "SUCCESS" && <ProductDetail product={product} />}
    </>
  );
};

export default ProductDetailsPage;
