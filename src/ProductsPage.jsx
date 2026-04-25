import Footer from "./footer";
import style from "./ProductsPage.module.css";
import { Link } from "react-router-dom";
function ProductsPage(){
  return(
    <>
    <div className={style.main}>

      <h1>Our Fresh Dairy Products</h1>
      <p id={style.productTitle}>Shudh aur fresh dairy products, direct farm se aapke ghar tak</p>

      <div className={style.productDetails}>
         <img src="src/ProductsImages/Milk.png" alt="ProductImg" />
         <h2>Milk</h2>
         <p>Fresh farm milk delivered daily</p>
         <div id={style.milkPrice}>
         <span>Buffalo Milk ₹75 Liter</span><br />
          <span>Cow Milk ₹50 Liter</span>
         </div>
         <Link class="btn btn-success" to="/milkDetails">View Details</Link>
      </div><br />

      <div className={style.productDetails}>
          <img src="src/ProductsImages/Ghee.png" alt="ProductImg" />
         <h2>Ghee</h2>
         <p>Fresh farm Ghee delivered daily</p>
         <div id={style.milkPrice}>
         <span>Buffalo Ghee ₹1300 Liter</span><br />
          <span>Cow Ghee ₹1800 Liter</span>
         </div>
         <Link class="btn btn-success" to="/gheeDetails">View Details</Link>  
      </div><br />

      <div className={style.productDetails}>
          <img src="src/ProductsImages/Paneer.png" alt="ProductImg" />
         <h2>Paneer</h2>
         <p>Fresh farm Paneer delivered daily</p>
         <span>₹600 / KG</span>
         <Link class="btn btn-success" to="/paneerDetails">View Details</Link>  
      </div><br />

      <div className={style.productDetails}>
          <img src="src/ProductsImages/Dahi.png" alt="ProductImg" />
         <h2>Dahi</h2>
         <p>Fresh farm Dahi delivered daily</p>
         <span>₹60 / KG</span>
         <Link class="btn btn-success" to="/dahiDetails">View Details</Link>
      </div><br />
    </div>

      <Footer></Footer>
    </>
  )
}

export default ProductsPage;