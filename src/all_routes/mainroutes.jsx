import { Route, Routes } from "react-router-dom";
import Home from "../Pages/home";
import About from "../Pages/about";
import Contact from "../Pages/contact";
import Form from "../Pages/add_product";
import Products from "../Pages/product";
import ProductDetail from "../Pages/productDetail";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/product-detail/:id" element={<ProductDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
};

export default Mainroutes;
