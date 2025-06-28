import React from "react";
import { Link, Route, Routes } from "react-router-dom";

 import Home from "./Home.jsx";
 import Products from "./Products.jsx";

const Routing = () => {
  return (
    <div>
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />

      
      </Routes>
    </div>
  );
};

export default Routing;