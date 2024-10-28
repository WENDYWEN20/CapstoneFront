import { useState, useEffect } from "react";
import ProductCart from "../pages/CartCheckOut.jsx";
import ProductDetails from "../pages/ProductDetail.jsx";
import Users from "../pages/User.jsx";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import FooterPage from "../components/Footer.jsx";
import About from "../components/About.jsx";
import Return from "../components/Return.jsx";
import HomePage from "../pages/HomePage.jsx";

console.log(import.meta.env.VITE_API_BASE_URL);

function App() {
  const [productAPI, setproduct] = useState([]);
  //fetch all products when components first render
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`http://localhost:3000/products`);
      const productsData = await res.json();
      console.log(productsData);
      setproduct(productsData.products);
      console.log(productAPI);
    };
    fetchProducts();
  }, []);

  return (
    <main className="text-center p-10">
      <NavBar />
      {/* <div className="flex-1 bg-red-400">
        {productAPI.map((product) => (
          <ProductDetails key={product._id} product={product} />
        ))}
      </div> */}
      {/* <HomePage prod={productAPI}/> */}
      <Routes>
        <Route path="/"  element={<HomePage prod={productAPI}/>}  /> 
        <Route path="/about" element={<About />} />
        <Route path="/return" element={<Return />} />
      </Routes>

      <FooterPage />

    </main>
  );
}

export default App;
