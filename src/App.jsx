import { useState, useEffect } from "react";
import ProductCart from "../pages/CartCheckOut.jsx";
import StripeButton from "../pages/Stripe.jsx"
import ProductInfo from "../pages/ProductInfo.jsx";
import UsersCard from "../pages/UsersCard.jsx";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import FooterPage from "../components/Footer.jsx";
import About from "../components/About.jsx";
import Return from "../components/Return.jsx";
import HomePage from "../pages/HomePage.jsx";
import ProductsPage from "../pages/ProductsPage.jsx"


console.log(import.meta.env.VITE_API_BASE_URL);

function App() {
  const [productAPI, setproduct] = useState([]);
  //fetch all products added to cart when plan to check out
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
      <hr />
      {/* <div className="flex-1 bg-red-400">
        {productAPI.map((product) => (
          <ProductDetails key={product._id} product={product} />
        ))}
      </div> */}

      <Routes>
      <Route path="/"  element={<HomePage/>}  /> 
        <Route path="/products"  element={<ProductsPage prod={productAPI}/>}  /> 
        <Route path="/products/:id"  element={<ProductInfo/>}  /> 
        <Route path="/carts" element={<ProductCart />} />
        <Route path="/create-checkout-session" element={<StripeButton />} />
        <Route path="/checkout" element={<StripeButton />} />
        <Route path="/about" element={<About />} />
        <Route path="/return" element={<Return />} />
      </Routes>
      <hr />
      <FooterPage />

    </main>
  );
}

export default App;
