import "bootstrap/dist/css/bootstrap.min.css";
import style from "./brandDiscription.module.css";
import FreeDelivery from "./ProductsImages/FreeDelivery.png";

function BrandDescription() {
  return (<>
    <div className={style.mainContent}>
      
      <div className={style.discriptionContainer}>
        {/* Heading */}
        <h1 className="fw-bold mb-3" style={{ color: "#54a45b" }}>
          MurrahGold (India) Limited
        </h1>

        {/* Subline */}
        <p className="text-muted mb-4">
          Pure • Fresh • Trusted Dairy Products
        </p>

        {/* Main Content */}
        <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#333" }}>
          MurrahGold par hum simple si baat me believe karte hain — 
          <b> dairy bilkul waise hi mile jaisi honi chahiye: pure, fresh aur asli taste ke saath.</b>  
          Hamara <b>Milk, Ghee, Dahi aur Paneer</b> carefully select kiye gaye farms se aata hai, 
          jahan se lekar processing tak har step honestly aur safai ke saath kiya jata hai.
          <br /><br />

          Hum jaante hain ki yeh sirf products nahi hain — yeh aapki daily life ka hissa hain.  
          Subah ki chai ho, ghar ka khana ho ya koi special dish — sabka taste tabhi best aata hai 
          jab quality sahi ho. Isi liye hum hamesha 
          <b> freshness, hygiene aur consistency</b> par focus karte hain.
          <br /><br />

          Koi shortcut nahi, koi compromise nahi — bas har roz wahi dairy products 
          jinke saath aap bina soche bharosa kar sakein.
        </p>

        {/* Tagline */}
        <h5 className="mt-4 fw-bold" style={{ color: "#c59d5f" }}>
          Murrah Gold – Ghar jaisa asli swaad 🥛
        </h5>

      </div>

    </div>

     <img id={style.FreeDelivery} src={FreeDelivery} alt="Free Delivery" />
    </>
  );
}

export default BrandDescription;