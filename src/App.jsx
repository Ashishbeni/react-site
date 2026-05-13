import Home from "./Home";
import Header from "./header";
import About from "./about";
import ProductsPage from "./ProductsPage";
import MilkDetailsPage from "./MilkDetails";
import CowMilkDetails from "./CowMilk";
import GheeDetailsPage from "./GheeDetails";
import CowGhee from "./CowGhee";
import PaneerDetails from "./PaneerDetails";
import DahiDetails from "./DahiDetails";
import Contact from "./Contact";
import Cart from "./Cart";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const AddToCart = (Product)=>{
       const alreadyExistItems = cartItems.find((item)=>item.name === Product.name);
         if(alreadyExistItems){
         const updatedCart = cartItems.map((item) =>
         item.name === Product.name
         ? { ...item, quantity: item.quantity + 1 }
         : item
               );
         setCartItems(updatedCart);
         alert("Product quantity updated in cart");
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
  element={
    <ProductsPage
      AddToCart={AddToCart}
      cartItems={cartItems}
    />
  }
/>
        <Route path="/milkDetails" element={<MilkDetailsPage/>}/>
        <Route path="/cowMilkDetails" element={<CowMilkDetails/>}/>
        <Route path="/gheeDetails" element={<GheeDetailsPage/>}/>
        <Route path="/cowGhee" element={<CowGhee/>}/>
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