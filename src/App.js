import React, { useState, useEffect } from "react";
// import "./App.css";
import Navbar from "./Components/index";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages";
import About from "./Pages/about";
import Blogs from "./Pages/blogs";
import SignUp from "./Pages/signup";
import Contact from "./Pages/contact";
import Footer from "./Components/Footer";
import MyAccount from "./Pages/login";
import Login from "./Pages/login";
import data from "./data";
import Main from "./Components/Main";
import Basket from "./Components/Basket";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <>
      <Router>
        <Navbar countCartItems={cartItems.length} />
        {/* <div className="row">
          <Main products={products} onAdd={onAdd}></Main>
          <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Basket>
        </div> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Main" element={<Main products={products} onAdd={onAdd}/>} />
          <Route path="/Basket" element={<Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
