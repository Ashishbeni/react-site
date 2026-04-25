import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import milk from "./ProductsImages/Milk.png";
import ghee from "./ProductsImages/Ghee.png";
import paneer from "./ProductsImages/Paneer.png";
import dahi from "./ProductsImages/Dahi.png";

function ProductsScroller() {
  return (
    <>
      {/* Internal CSS */}
      <style>
        {`
        .carousel-img {
          width: 100%;
          height: 80vh;
          object-fit: cover;
        }

        @media (max-width: 1024px) {
          .carousel-img {
            height: 60vh;
          }
        }

        @media (max-width: 768px) {
          .carousel-img {
            height: 40vh;
          }
          .carousel-control-prev-icon,
          .carousel-control-next-icon {
            width: 25px;
            height: 25px;
          }
        }

        @media (max-width: 480px) {
          .carousel-img {
            height: 30vh;
          }
          .carousel-indicators button {
            width: 8px;
            height: 8px;
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
            <img src={milk} className="d-block w-100 carousel-img" alt="Milk" />
          </div>

          <div className="carousel-item">
            <img src={ghee} className="d-block w-100 carousel-img" alt="Ghee" />
          </div>

          <div className="carousel-item">
            <img src={paneer} className="d-block w-100 carousel-img" alt="Paneer" />
          </div>

        <div className="carousel-item">
  <img 
    src={dahi} 
    className="d-block w-100 carousel-img dahi-img" 
    alt="Dahi" 
  />
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