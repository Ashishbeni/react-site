import Footer from "./footer";
import style from "./ProductsPage.module.css";
import { Link } from "react-router-dom";

import Milk from "./ProductsImages/Milk.png";
import Ghee from "./ProductsImages/Ghee.png";
import Paneer from "./ProductsImages/Paneer.png";
import Dahi from "./ProductsImages/Dahi.png";

function ProductsPage({ AddToCart, cartItems = [] }) {

      const whatsappMessage = `
    🥛 Murrah Gold Dairy Order

    Product: Add your order details here.

    Please share:
    - Product Name
    - Quantity
    - Delivery Address
    - Preferred Delivery Time
    `;  
    const whatsappURL = `https://wa.me/917056523602?text=${encodeURIComponent(
  whatsappMessage
)}`; 

  const buffaloMilkItem = cartItems.find(
    (item) => item.name === "Buffalo Milk"
  );

  const cowMilkItem = cartItems.find(
    (item) => item.name === "Cow Milk"
  );

  const buffaloGheeItem = cartItems.find(
    (item) => item.name === "Buffalo Ghee"
  );

  const cowGheeItem = cartItems.find(
    (item) => item.name === "Cow Ghee"
  );

  const paneerItem = cartItems.find(
    (item) => item.name === "Paneer"
  );

  const dahiItem = cartItems.find(
    (item) => item.name === "Dahi"
  );

  return (
    <>
      <div className={style.main}>

        <h1>Our Fresh Dairy Products</h1>

        <div className={style.ProductContainer}>

          {/* Buffalo Milk */}
          <div className={style.productDetails}>
            <img src={Milk} alt="ProductImg" />

            <h5>Buffalo Milk</h5>

            <div id={style.milkPrice}>
              <span>₹80 Liter</span><br />
            </div>

            <button
              className="btn btn-success"
              onClick={() =>
                AddToCart({
                  name: "Buffalo Milk",
                  price: 80,
                  image: Milk,
                  quantity: 1
                })
              }
            >
              {buffaloMilkItem ? "Add More" : "Add To Cart"}
            </button>

            <Link className="btn btn-info" to="/milkDetails">
              View Details
            </Link>
          </div>



          {/* Cow Milk */}
          <div className={style.productDetails}>
            <img src={Milk} alt="ProductImg" />

            <h5>Cow Milk</h5>

            <div id={style.milkPrice}>
              <span>₹50 Liter</span><br />
            </div>

            <button
              className="btn btn-success"
              onClick={() =>
                AddToCart({
                  name: "Cow Milk",
                  price: 50,
                  image: Milk,
                  quantity: 1
                })
              }
            >
              {cowMilkItem ? "Add More" : "Add To Cart"}
            </button>

            <Link className="btn btn-info" to="/cowMilkDetails">
              View Details
            </Link>
          </div>



          {/* Buffalo Ghee */}
          <div className={style.productDetails}>
            <img src={Ghee} alt="ProductImg" />

            <h5>Buffalo Ghee</h5>

            <div id={style.milkPrice}>
              <span>₹1400 Liter</span><br />
            </div>

            <button
              className="btn btn-success"
              onClick={() =>
                AddToCart({
                  name: "Buffalo Ghee",
                  price: 1400,
                  image: Ghee,
                  quantity: 1
                })
              }
            >
              {buffaloGheeItem ? "Add More" : "Add To Cart"}
            </button>

            <Link className="btn btn-info" to="/gheeDetails">
              View Details
            </Link>
          </div>



          {/* Cow Ghee */}
          <div className={style.productDetails}>
            <img src={Ghee} alt="ProductImg" />

            <h5>Cow Ghee</h5>

            <div id={style.milkPrice}>
              <span>₹1800 Liter</span><br />
            </div>

            <button
              className="btn btn-success"
              onClick={() =>
                AddToCart({
                  name: "Cow Ghee",
                  price: 1800,
                  image: Ghee,
                  quantity: 1
                })
              }
            >
              {cowGheeItem ? "Add More" : "Add To Cart"}
            </button>

            <Link className="btn btn-info" to="/cowGhee">
              View Details
            </Link>
          </div>



          {/* Paneer */}
          <div className={style.productDetails}>
            <img src={Paneer} alt="ProductImg" />

            <h5>Paneer</h5>

            <span>₹600 / KG</span><br />

            <button
              className="btn btn-success"
              onClick={() =>
                AddToCart({
                  name: "Paneer",
                  price: 600,
                  image: Paneer,
                  quantity: 1
                })
              }
            >
              {paneerItem ? "Add More" : "Add To Cart"}
            </button>

            <Link className="btn btn-info" to="/paneerDetails">
              View Details
            </Link>
          </div>



          {/* Dahi */}
          <div className={style.productDetails}>
            <img src={Dahi} alt="ProductImg" />

            <h5>Dahi</h5>

            <span>₹60 / KG</span><br />

            <button
              className="btn btn-success"
              onClick={() =>
                AddToCart({
                  name: "Dahi",
                  price: 60,
                  image: Dahi,
                  quantity: 1
                })
              }
            >
              {dahiItem ? "Add More" : "Add To Cart"}
            </button>

            <Link className="btn btn-info" to="/dahiDetails">
              View Details
            </Link>
          </div>



<a
  id={style.orderNow}
  className="btn btn-success"
  href={whatsappURL}
  target="_blank"
  rel="noreferrer"
>
  Order via WhatsApp
</a>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductsPage;