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

    <div className={style.ProductContainer}>
      <div className={style.productDetails}>
         <img src={Milk} alt="ProductImg" />
         <h5>Buffalo Milk</h5>
         <div id={style.milkPrice}>
         <span>₹80 Liter</span><br />
         </div>
         <Link class="btn btn-info" to="/milkDetails">View Details</Link>
      </div><br />

        <div className={style.productDetails}>
         <img src={Milk} alt="ProductImg" />
         <h5>Cow Milk</h5>
         <div id={style.milkPrice}>
         <span>₹50 Liter</span><br />
         </div>
         <Link class="btn btn-info" to="/milkDetails">View Details</Link>
      </div><br />

      <div className={style.productDetails}>
          <img src={Ghee} alt="ProductImg" />
         <h5>Buffalo Ghee</h5>
         <div id={style.milkPrice}>
         <span>₹1400 Liter</span><br />
         </div>
         <Link class="btn btn-info" to="/gheeDetails">View Details</Link>  
      </div><br />

      <div className={style.productDetails}>
          <img src={Ghee} alt="ProductImg" />
         <h5>Cow Ghee</h5>
         <div id={style.milkPrice}>
         <span>₹1800 Liter</span><br />
         </div>
         <Link class="btn btn-info" to="/gheeDetails">View Details</Link>  
      </div><br />      

      <div className={style.productDetails}>
          <img src={Paneer} alt="ProductImg" />
         <h5>Paneer</h5>
         <span>₹600 / KG</span><br />
         <Link class="btn btn-info" to="/paneerDetails">View Details</Link>  
      </div><br />

      <div className={style.productDetails}>
          <img src={Dahi} alt="ProductImg" />
         <h5>Dahi</h5>
         <span>₹60 / KG</span><br />
         <Link class="btn btn-info" to="/dahiDetails">View Details</Link>
      </div><br />

      <Link id={style.orderNow} class="btn btn-success" to="https://web.whatsapp.com/">Order via WhatsApp</Link>

      </div>

    </div>

      <Footer></Footer>
    </>
  )
}

export default ProductsPage;