import Products from "../../components/Products/Products.js";
import { seedProducts } from "../../services/productService.js";
export const LandingPage = () => {
  // seedProducts();
  return (
    <div>
      <Products />
    </div>
  );
};
