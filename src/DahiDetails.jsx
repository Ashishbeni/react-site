import "bootstrap/dist/css/bootstrap.min.css";
import style from "./DahiDetails.module.css";
import Footer from "./footer";
import { Link } from "react-router-dom";
import Dahi from"./ProductsImages/Dahi.png"

function DahiDetails() {
    const whatsappMessage = `
    🥛 Murrah Gold Dairy Order

    Product: Ghee

    Please share:
    - Quantity
    - Delivery Address
    - Preferred Delivery Time
    `;  
    const whatsappURL = `https://wa.me/917056523602?text=${encodeURIComponent(
  whatsappMessage
)}`; 

 return (
  <>
    <div className={style.main}>
       <h2>🥣 Fresh Dahi</h2>
       <p>Murrah Gold ka fresh dahi shudh doodh se hygienic process ke through tayyar kiya jata hai. Ye natural fermentation se bana hota hai, jo taste me creamy aur health ke liye bahut faydemand hota hai. Isme koi preservative ya chemical nahi hota — sirf natural goodness.</p>

       <img src={Dahi} alt="Dahi"/><br /><br /><br /><br />

    <div className={style.mainBox}>
      <div className={style.Box1}>
       <h2>📋 Product Details</h2>
       <ul>
       <li>Type: Fresh Cow & Buffalo Milk Dahi available</li>
       <li>Freshness: Daily fresh preparation</li>
       <li>Quality: No adulteration, no chemicals</li>
       <li>Taste: Creamy, smooth aur natural</li>
       <li>Source: Shudh milk se directly tayyar</li>
       </ul>
       </div>

        <div className={style.Box2}>
       <h2>💪 Health Benefits</h2>
       <ul>
         <li>Digestion improve karta hai</li>
         <li>Probiotics se immunity strong hoti hai</li>
         <li>Cooling effect deta hai body ko</li>
         <li>Calcium rich for strong bones</li>
         <li>Bachon aur adults dono ke liye suitable</li>
         <li>Gut health ke liye beneficial</li>
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
       <li>Room temperature par zyada der na rakhein</li>
       </ul>
       </div>
       </div><br />

       <div className={style.mainBox}>
       <div className={style.Box1}>
       <h2>🚚 Delivery Info</h2>
       <ul>
       <li>Daily fresh dahi available</li>
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
       <h2>⭐ Why Choose Muhara Gold Dahi?</h2>
       <ul>
       <li>Fresh & natural fermentation 🥣</li>
       <li>Probiotic rich & healthy</li>
       <li>No chemicals, no compromise 🧪❌</li>
       <li>Trusted by families 🏠</li>
       <li>Rich taste & smooth texture</li>
       </ul>
       </div>
       </div><br /><br />

     <a
       href={whatsappURL}
       target="_blank"
       rel="noreferrer"
       className="btn btn-success"
     >
      Order on WhatsApp
     </a>
    </div>

    <Footer></Footer>
  </>
);
}

export default DahiDetails;