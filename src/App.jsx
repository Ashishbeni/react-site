import Home from "./Home";
import Header from "./header";
import About from "./about";
import ProductsPage from "./ProductsPage";
import MilkDetailsPage from "./MilkDetails";
import GheeDetailsPage from "./GheeDetails";
import PaneerDetails from "./PaneerDetails";
import DahiDetails from "./DahiDetails";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/milkDetails" element={<MilkDetailsPage/>}/>
        <Route path="/gheeDetails" element={<GheeDetailsPage/>}/>
        <Route path="/paneerDetails" element={<PaneerDetails/>}/>
        <Route path="/dahiDetails" element={<DahiDetails/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;