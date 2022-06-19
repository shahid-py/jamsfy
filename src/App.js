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


  //loader
const[showLoading,setShowLoading]=useState(false)

  const [items, setProducts] = useState([]);
  const [backup, setBackUp] = useState([]);

  const[isLoading,setIsLoading] = useState(true)
  
  const[error,setError] = useState(null)

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    const res = axios
      .get("/products")
      .then((res) => {
        setProducts(res.data);
        setBackUp(res.data);
        setIsLoading(false)
        setShowLoading(false) 
    })
    .catch(err=>{ 
        setError(err)
        setIsLoading(false)
    })
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
              isLoading={isLoading} 
              fetchProductByCategory={fetchProductByCategory}
              fetchProducts={fetchProducts}
              showLoading={showLoading} 
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
