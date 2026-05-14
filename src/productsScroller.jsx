import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import milk from "./ProductsImages/buffaloMilkImgForScroller.png";
import ghee from "./ProductsImages/gheeImfScroller.png";
import paneer from "./ProductsImages/PaneerScroller.png";
import dahi from "./ProductsImages/DahiScrolerImage.png";
import { Link } from "react-router-dom";

function ProductsScroller() {
  return (
    <>
      {/* Internal CSS */}
      <style>
        {`
    .carousel-img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(39%) sepia(91%) saturate(500%) hue-rotate(80deg);
}
/* Large Tablet */
@media (max-width: 1024px) {
  .carousel-img {
    height: 60vh;
    object-fit: contain;
  }

  .carousel-item .btn {
    width: 220px !important;
    left: 77% !important;
    bottom: 170px !important;
    font-size: 15px !important;
  }
}

/* Tablet */
@media (max-width: 768px) {
  .carousel-img {
    height: 45vh;
    object-fit: contain;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 25px;
    height: 25px;
  }

  .carousel-item .btn {
    width: 180px !important;
    left: 82% !important;
    transform: translateX(-50%);
    bottom: 35px !important;
    padding: 6px 12px !important;
    font-size: 14px !important;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .carousel-img {
    height: 32vh;
    object-fit: contain;
  }

  .carousel-indicators button {
    width: 8px;
    height: 8px;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 20px;
    height: 20px;
  }

  .carousel-item .btn {
    width: 150px !important;
    left: 255px !important;
    transform: translateX(-50%);
    bottom: 50px !important;
    padding: 0px 0px !important;
    font-size: 12px !important;
  }
}

        `}
      </style>

      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2500"
      >

        {/* Dots */}
        <div className="carousel-indicators">
          <button data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
          <button data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
          <button data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
          <button data-bs-target="#carouselExample" data-bs-slide-to="3"></button>
        </div>

        {/* Images */}
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img  src={milk} className="d-block w-100 carousel-img" alt="Milk" />
              <Link
                  to="/products"
                  className="btn btn-secondary"
                  style={{
                    width: "350px",
                    position: "absolute",
                    bottom: "23px",
                    left: "110px",
                    zIndex: "10",
                    padding: "10px 20px",
                    fontWeight: "bold"
                  }}
                >
                  Explore Products
                </Link>
          </div>

          <div className="carousel-item">
            <img  src={ghee} className="d-block w-100 carousel-img" alt="Ghee" />
              <Link
                  to="/products"
                  className="btn btn-secondary"
                  style={{
                    width: "350px",
                    position: "absolute",
                    bottom: "23px",
                    left: "110px",
                    zIndex: "10",
                    padding: "10px 20px",
                    fontWeight: "bold"
                  }}
                >
                  Explore Products
                </Link>            
          </div>

          <div className="carousel-item">
            <img  src={paneer} className="d-block w-100 carousel-img" alt="Paneer" />
              <Link
                  to="/products"
                  className="btn btn-secondary"
                  style={{
                    width: "350px",
                    position: "absolute",
                    bottom: "23px",
                    left: "110px",
                    zIndex: "10",
                    padding: "10px 20px",
                    fontWeight: "bold"
                  }}
                >
                  Explore Products
                </Link>            
          </div>

        <div className="carousel-item">
           <img src={dahi} className="d-block w-100 carousel-img dahi-img" alt="Dahi"  />
              <Link
                  to="/products"
                  className="btn btn-secondary"
                  style={{
                    width: "350px",
                    position: "absolute",
                    bottom: "23px",
                    left: "110px",
                    zIndex: "10",
                    padding: "10px 20px",
                    fontWeight: "bold"
                  }}
                >
                  Explore Products
                </Link>           
       </div>

        </div>

        {/* Buttons */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>
    </>
  );
}

export default ProductsScroller;