import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/product/:id" element={<ProductDetailsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
