import { Link } from "react-router-dom";
import style from"./banner.module.css";
function Banner() {
  return (
    <>
    <div style={{ position: "relative" }}>
      
      {/* Full Image */}
      <img
        src="src/ProductsImages/HomeCoverPhoto.png"
        alt="Child with cow"
        style={{ width: "100%", height: "100vh", objectFit: "cover" }}
     />

      {/* Overlay Content */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          transform: "translateY(-50%)",
          color: "white"
        }}
      >
        <h1 style={{ fontSize: "3rem", color: "#66b3ff", fontWeight: "bold" }}>
          Muhara Gold Dairy
        </h1>
        <p style={{ fontSize: "1.2rem" }}>
          Shudh bhains ka doodh, seedha farm se ghar tak
        </p>
        
        <Link className="btn btn-primary mt-3" to="/products">Explore Products</Link>
      </div>

    </div>

      <img id={style.FreeDelivery} src="src/ProductsImages/FreeDelivery.png" alt="Free Delivery" />
    </>
  );
}

export default Banner;