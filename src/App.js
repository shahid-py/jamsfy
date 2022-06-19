import React, { useState, useEffect } from "react";
import axios from "./utils/Api";
import { Routes, Route } from "react-router-dom";
import "./App.css";

//components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

//categories
import Home from "./Categories/Home";


const App = () => {
  const [items, setProducts] = useState([]);
  const [backup, setBackUp] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    const res = axios
      .get("/products")
      .then((res) => {
        setProducts(res.data);
        setBackUp(res.data);
      })
      .catch((err) => {});
  };
  const fetchProductByCategory = (category) => {
    if (category === "all") {
      setProducts(backup);
    } else {
      setProducts(backup.filter((item) => item.category === category));
    }
  };

  return (
    <div>
      <Navbar />
      <Hero />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              fetchProductByCategory={fetchProductByCategory}
              fetchProducts={fetchProducts}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
