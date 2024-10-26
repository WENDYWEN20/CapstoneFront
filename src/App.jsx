import { useState, useEffect } from "react";
import AdidasLogo from "./assets/Hoodie1.jpg";
import ProductCart from "../pages/CartCheckOut.jsx";
import Home from "../pages/HomePage.jsx"
import Users from "../pages/User.jsx"
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";

console.log(import.meta.env.VITE_API_BASE_URL);

function App() {

    const [product, setproduct] = useState([]);
    //fetch all products when components first render
    useEffect(()=>{
      const fetchProducts=async()=>{const res= await fetch(`http://localhost:3000/api/products`)
      const productsData=await res.json()
      console.log(productsData);
      setproduct(productsData.products)
      };
      fetchProducts()
    }, [])

    const products = [
      { id: 1, name: "70s Short Full Zip Fleece Hoodie", price: "$10" },
      { id: 2, name: "Product 2", price: "$20" },
    ];
  
    return (
      <main className="bg-indigo-500 md: bg-amber-300  lg:bg-violet-400 h-screeen text-center p-10">
             <Routes>


        <NavBar />
  
        <div className="bg-indigo-300 text-center p-10 round-full border-spacing-x-20">
          <a
            href="https://www.adidas.com/us/70s-short-full-zip-fleece-hoodie/JN7665.html"
            target="_blank"
          >
            <img src={AdidasLogo} className="logo" alt="Vite logo" />
          </a>
        </div>
        <div className="flex-1 bg-red-400">
          {products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
        <p className="w-80 text-center p-5">Footer Contact Us</p>
        </Routes>
      </main>
    );       
    
  };

  // useEffect(()=>{
  //   const fetchQuizzes=async()=>{
  //     fetch('http://quizapi_APIkey=${import.meta.env.VITE_API_KEY') //put VITE_API_KEY in env file
  //   }
  // })

  

export default App;
