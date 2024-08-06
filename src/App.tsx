import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import { Cart } from "./components/Cart/Cart.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import Favourites from "./components/Favourites/Favourites.js";
import ProductsContextProvider from "./context/ProductsContext.js";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductsContextProvider>
          <SnackbarProvider>
            <NavBar></NavBar>
            <Routes>
              <Route path="/" element={<LandingPage />}></Route>
              <Route
                path="/product/:id"
                element={<ProductDetailsPage />}
              ></Route>
              <Route path="/cart" element={<Cart />} />
              <Route path="/favourites" element={<Favourites />} />
            </Routes>
          </SnackbarProvider>
        </ProductsContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
