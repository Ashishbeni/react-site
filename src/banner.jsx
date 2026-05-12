import { Link } from "react-router-dom";
import style from"./banner.module.css";
import HomeCoverPhoto from "./ProductsImages/HomeCoverPhoto.png";

function Banner() {
  return (
    <>
    <div style={{ position: "relative" }}>
      
      {/* Full Image */}
      <img className={style.BannerImage}
        src={HomeCoverPhoto}
        alt="Child with cow"
        
     />

      {/* Overlay Content */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          transform: "translateY(-50%)",
          color: "white",
        }}
      >
        {/* <h1 style={{ fontSize: "3rem", color: "#66b3ff", fontWeight: "bold" }}>
          Murrah Gold Dairy
        </h1>
        <p style={{ fontSize: "1.2rem" }}>
          Shudh bhains ka doodh, seedha farm se ghar tak
        </p>
        
        <Link className="btn btn-primary mt-3" to="/products">Explore Products</Link> */}
      </div>

    </div>

    </>
  );
}

export default Banner;