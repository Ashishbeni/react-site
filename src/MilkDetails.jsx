import "bootstrap/dist/css/bootstrap.min.css";
import style from "./MilkDetails.module.css";
import Footer from "./footer";
import { Link } from "react-router-dom";

function MilkDetailsPage() {
  return (
    <>
    <div className={style.main}>
       <h2>🥛 Fresh Cow & Buffalo Milk</h2>
       <p>Muhara Gold ka shudh doodh (cow aur buffalo dono) directly farm se fresh collect karke hygienic process ke through aapke ghar tak pahunchaya jata hai. Aap apni preference ke hisaab se cow milk ya buffalo milk choose kar sakte hain. Isme koi milawat ya preservative nahi hota — sirf natural aur healthy milk.</p>

       <img src="src/ProductsImages/Milk.png" alt="Milk"/><br /><br /><br /><br />

    <div className={style.mainBox}>
      <div className={style.Box1}>
       <h2>📋 Product Details</h2>
       <ul>
       <li>Type: Shudh Cow Milk & Buffalo Milk available</li>
       <li>Freshness: Same day milking & delivery</li>
       <li>Quality: No adulteration, no chemicals</li>
       <li>Taste: Natural, fresh aur rich (buffalo milk creamy hota hai, cow milk light hota hai)</li>
       <li>Source: Direct from our dairy farm</li>
       </ul>
       </div>

        <div className={style.Box2}>
       <h2>💪 Health Benefits</h2>
       <ul>
         <li>Strong bones aur teeth ke liye calcium rich</li>
         <li>High protein for daily energy</li>
         <li>Immunity boost karta hai </li>
         <li>Bachon aur adults dono ke liye suitable</li>
         <li>Cow milk light digestion ke liye better</li>
         <li>Buffalo milk zyada creamy aur energy-rich hota hai</li>
       </ul>
       </div>
       </div><br />

       <div className={style.mainBox}>
       <div className={style.Box1}>
       <h2>📦 Available Quantity</h2>
       <ul>
       <li>500 ml</li>
       <li>1 Litre</li>
       <li>2 Litre</li>
       <li>5 Litre</li>
       </ul>
       </div>
       <div className={style.Box3}>
       <h2>❄️ Storage Instructions</h2>
       <ul>
       <li>Hamesha refrigerator me store karein</li>
       <li>Use within 24 hours for best freshness</li>
       <li>Boil before consumption (recommended)</li>
       </ul>
       </div>
       </div><br />

       <div className={style.mainBox}>
       <div className={style.Box1}>
       <h2>🚚 Delivery Info</h2>
       <ul>
       <li>Daily morning fresh delivery available</li>
       <li>Doorstep service</li>
       <li>Clean & hygienic packaging</li>
       </ul>
       </div>
       <div className={style.Box4}>
       <h2>🔁 Subscription Options</h2>
       <ul>
       <li>Daily Milk Plan</li>
       <li>Weekly Plan</li>
       <li>Monthly Subscription</li>
       </ul>
       </div>
       </div><br />

       <div className={style.mainBox}>
       <div className={style.Box1}>
       <h2>⭐ Why Choose Muhara Gold Milk?</h2>
       <ul>
       <li>Farm fresh guarantee 🐄</li>
       <li>Cow & buffalo milk dono available</li>
       <li>No mixing, no compromise 🧪❌</li>
       <li>Trusted by local families 🏠</li>
       <li>Pure taste, natural quality</li>
       </ul>
       </div>
       </div><br /><br />
      <Link class="btn btn-success" to="https://web.whatsapp.com/">Order Now</Link>
    </div>

      <Footer></Footer>
    </>
  );
}

export default MilkDetailsPage;