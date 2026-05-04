import "bootstrap/dist/css/bootstrap.min.css";
import style from "./GheeDetails.module.css";
import Footer from "./footer";
import { Link } from "react-router-dom";
import Ghee from"./ProductsImages/Ghee.png";

function GheeDetailsPage() {
 return (
  <>
    <div className={style.main}>
       <h2>🧈 Pure Desi Ghee</h2>
       <p>Murrah Gold ka shudh desi ghee traditional tareeke se tayyar kiya jata hai, jisme cow aur buffalo milk dono ka use hota hai. Ye ghee bilkul natural process se banaya jata hai bina kisi chemical ya preservative ke, jisse iska asli taste aur nutrition barkarar rehta hai.</p>

       <img src={Ghee} alt="Ghee"/><br /><br /><br /><br />

    <div className={style.mainBox}>
      <div className={style.Box1}>
       <h2>📋 Product Details</h2>
       <ul>
       <li>Type: Shudh Cow Ghee & Buffalo Ghee available</li>
       <li>Process: Traditional bilona method se tayyar</li>
       <li>Quality: No adulteration, no chemicals</li>
       <li>Taste: Rich aroma aur authentic desi flavour</li>
       <li>Source: Fresh milk se directly banaya gaya</li>
       </ul>
       </div>

        <div className={style.Box2}>
       <h2>💪 Health Benefits</h2>
       <ul>
         <li>Digestion improve karta hai</li>
         <li>Body ko natural energy deta hai</li>
         <li>Immunity boost karta hai</li>
         <li>Skin aur hair ke liye beneficial</li>
         <li>Brain health ke liye accha hota hai</li>
         <li>Healthy fats ka best source</li>
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
       <li>Room temperature par bhi store kar sakte hain</li>
       <li>Direct sunlight se door rakhein</li>
       <li>Dry aur clean container me rakhein</li>
       </ul>
       </div>
       </div><br />

       <div className={style.mainBox}>
       <div className={style.Box1}>
       <h2>🚚 Delivery Info</h2>
       <ul>
       <li>Freshly prepared ghee available</li>
       <li>Doorstep delivery</li>
       <li>Safe & hygienic packaging</li>
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
       <h2>⭐ Why Choose Muhara Gold Ghee?</h2>
       <ul>
       <li>Traditional bilona method 🧈</li>
       <li>Pure & chemical-free 🧪❌</li>
       <li>Rich taste & aroma</li>
       <li>Trusted by families 🏠</li>
       <li>Premium quality assurance</li>
       </ul>
       </div>
       </div><br /><br />

      <Link class="btn btn-success" to="https://web.whatsapp.com/">Order via WhatsApp</Link>
    </div>

    <Footer></Footer>
  </>
);
}

export default GheeDetailsPage;