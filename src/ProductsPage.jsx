import Footer from "./footer";
import style from "./ProductsPage.module.css";
import { Link } from "react-router-dom";
import Milk from "./ProductsImages/Milk.png";
import Ghee from "./ProductsImages/Ghee.png"; 
import Paneer from "./ProductsImages/Paneer.png"; 
import Dahi from "./ProductsImages/Dahi.png"; 
function ProductsPage(){
  return(
    <>
    <div className={style.main}>

      <h1>Our Fresh Dairy Products</h1>
      <p id={style.productTitle}>Shudh aur fresh dairy products, direct farm se aapke ghar tak</p>

      <div className={style.productDetails}>
         <img src={Milk} alt="ProductImg" />
         <h2>Milk</h2>
         <p>Fresh farm milk delivered daily</p>
         <div id={style.milkPrice}>
         <span>Buffalo Milk ₹75 Liter</span><br />
          <span>Cow Milk ₹50 Liter</span>
         </div>
         <Link class="btn btn-info" to="/milkDetails">View Details</Link>
      </div><br />

      <div className={style.productDetails}>
          <img src={Ghee} alt="ProductImg" />
         <h2>Ghee</h2>
         <p>Fresh farm Ghee delivered daily</p>
         <div id={style.milkPrice}>
         <span>Buffalo Ghee ₹1300 Liter</span><br />
          <span>Cow Ghee ₹1800 Liter</span>
         </div>
         <Link class="btn btn-info" to="/gheeDetails">View Details</Link>  
      </div><br />

      <div className={style.productDetails}>
          <img src={Paneer} alt="ProductImg" />
         <h2>Paneer</h2>
         <p>Fresh farm Paneer delivered daily</p>
         <span>₹600 / KG</span>
         <Link class="btn btn-info" to="/paneerDetails">View Details</Link>  
      </div><br />

      <div className={style.productDetails}>
          <img src={Dahi} alt="ProductImg" />
         <h2>Dahi</h2>
         <p>Fresh farm Dahi delivered daily</p>
         <span>₹60 / KG</span>
         <Link class="btn btn-info" to="/dahiDetails">View Details</Link>
      </div><br />

      <Link id={style.orderNow} class="btn btn-success" to="https://web.whatsapp.com/">Order via WhatsApp</Link>
    </div>

      <Footer></Footer>
    </>
  )
}

export default ProductsPage;