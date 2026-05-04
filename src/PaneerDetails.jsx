import "bootstrap/dist/css/bootstrap.min.css";
import style from "./PaneerDetails.module.css";
import Footer from "./footer";
import { Link } from "react-router-dom";
import Paneer from"./ProductsImages/Paneer.png";

function PaneerDetails() {
 return (
  <>
    <div className={style.main}>
       <h2>🧀 Fresh Paneer</h2>
       <p>Murrah Gold ka fresh paneer shudh doodh se hygienic process ke through tayyar kiya jata hai. Ye soft, fresh aur high-quality paneer hai jo daily use ke liye perfect hai. Isme koi preservative ya chemical nahi hota — sirf natural taste aur nutrition.</p>

       <img src={Paneer} alt="Paneer"/><br /><br /><br /><br />

    <div className={style.mainBox}>
      <div className={style.Box1}>
       <h2>📋 Product Details</h2>
       <ul>
       <li>Type: Fresh Cow & Buffalo Milk Paneer available</li>
       <li>Freshness: Daily fresh preparation</li>
       <li>Quality: No adulteration, no chemicals</li>
       <li>Texture: Soft, smooth aur fresh</li>
       <li>Source: Shudh milk se directly tayyar</li>
       </ul>
       </div>

        <div className={style.Box2}>
       <h2>💪 Health Benefits</h2>
       <ul>
         <li>High protein for muscle growth</li>
         <li>Calcium rich for strong bones</li>
         <li>Healthy weight gain me helpful</li>
         <li>Energy boost karta hai</li>
         <li>Bachon aur adults dono ke liye suitable</li>
         <li>Vegetarian protein ka best source</li>
       </ul>
       </div>
       </div><br />

       <div className={style.mainBox}>
       <div className={style.Box1}>
       <h2>📦 Available Quantity</h2>
       <ul>
       <li>250 gm</li>
       <li>500 gm</li>
       <li>1 Kg</li>
       <li>2 Kg</li>
       </ul>
       </div>
       <div className={style.Box3}>
       <h2>❄️ Storage Instructions</h2>
       <ul>
       <li>Hamesha refrigerator me store karein</li>
       <li>Use within 1-2 days for best freshness</li>
       <li>Fresh water me store kar sakte hain (softness maintain rahegi)</li>
       </ul>
       </div>
       </div><br />

       <div className={style.mainBox}>
       <div className={style.Box1}>
       <h2>🚚 Delivery Info</h2>
       <ul>
       <li>Daily fresh paneer available</li>
       <li>Doorstep delivery</li>
       <li>Clean & hygienic packaging</li>
       </ul>
       </div>
       <div className={style.Box4}>
       <h2>🔁 Subscription Options</h2>
       <ul>
       <li>Weekly delivery option</li>
       <li>Monthly subscription available</li>
       <li>Bulk orders available</li>
       </ul>
       </div>
       </div><br />

       <div className={style.mainBox}>
       <div className={style.Box1}>
       <h2>⭐ Why Choose Muhara Gold Paneer?</h2>
       <ul>
       <li>Fresh & soft quality 🧀</li>
       <li>Pure milk se tayyar 🥛</li>
       <li>No chemicals, no compromise 🧪❌</li>
       <li>Trusted by families 🏠</li>
       <li>Rich taste & perfect texture</li>
       </ul>
       </div>
       </div><br /><br />

      <Link class="btn btn-success" to="https://web.whatsapp.com/">Order via WhatsApp</Link>
    </div>

    <Footer></Footer>
  </>
);
}

export default PaneerDetails;