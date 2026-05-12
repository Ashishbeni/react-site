import Home from "./Home";
import Header from "./header";
import About from "./about";
import ProductsPage from "./ProductsPage";
import MilkDetailsPage from "./MilkDetails";
import GheeDetailsPage from "./GheeDetails";
import PaneerDetails from "./PaneerDetails";
import DahiDetails from "./DahiDetails";
import Contact from "./Contact";
import Cart from "./Cart";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const AddToCart = (Product)=>{
       const alredyExistItems = cartItems.find((item)=>item.name === Product.name);
       if(alredyExistItems){
         alert("This product is already added to your cart.");
         return;
       }else{
         alert("Product added to cart successfully.");
         setCartItems([...cartItems, Product]);
       }
  }

  const RemoveFromCart = (productName) => {

  const updatedCart = cartItems.filter(
    (item) => item.name !== productName
  );

  setCartItems(updatedCart);
}


  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route 
          path="/products" 
          element={<ProductsPage AddToCart={AddToCart} />} 
        />
        <Route path="/milkDetails" element={<MilkDetailsPage/>}/>
        <Route path="/gheeDetails" element={<GheeDetailsPage/>}/>
        <Route path="/paneerDetails" element={<PaneerDetails/>}/>
        <Route path="/dahiDetails" element={<DahiDetails/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route 
          path="/cart" 
          element={<Cart cartItems={cartItems}
          RemoveFromCart={RemoveFromCart} />} 
        />
      </Routes>
    </div>
  );
}

export default App;