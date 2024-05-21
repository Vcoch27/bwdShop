import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUpPage from "./page/SignUpPage.js";
import SignInPage from "./page/SignIn.js";
import HomePage from "./page/HomePage.js";
import LandingPage from "./page/LandingPage.js";
import ProductDetail from "../src/component/detailProduct/ProductDetail";
import Products from "./page/Products/Products.js";
import Shoppingcart from "./component/shoppingcart/Shoppingcart.js";
import Admin from "./page/adminpage/Admin.js";
import IntroducePage from "./page/IntroducePage.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/introduce" element={<IntroducePage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/detail" element={<ProductDetail />} />
        <Route path="/cart" element={<Shoppingcart />} />
        <Route path="/admin" element={<Admin />} />

        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
