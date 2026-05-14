import Footer from "./footer";
import style from "./ProductsPage.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
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

const [orderQuantity, setOrderQuantity] = useState(
  {
  buffaloMilk: "1 Liter",
  cowMilk: "1 Liter",
  buffaloGhee: "1 KG",
  cowGhee: "1 KG",
  paneer: "1 KG",
  dahi: "1 KG"
  }
);

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

            <select class="btn btn-secondary" name="Buffalo Milk" 
            value={orderQuantity.buffaloMilk}
             onChange={(e)=>setOrderQuantity({...orderQuantity, buffaloMilk: e.target.value})} 
            >
              <option value="1 Liter">1 Liter</option>
              <option value="2 Liter">2 Liter</option>
              <option value="5 Liter">5 Liter</option>
              <option value="8 Liter">8 Liter</option>
              <option value="10 Liter">10 Liter</option>
              <option value="15 Liter">15 Liter</option>
              <option value="20 Liter">20 Liter</option>
            </select>

            <button
              className="btn btn-success"
              onClick={() =>
                AddToCart({
                  name: "Buffalo Milk",
                  price: 80,
                  image: Milk,
                  quantity: parseInt(orderQuantity.buffaloMilk)
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

            <select class="btn btn-secondary" name="select" 
            value={orderQuantity.cowMilk}
             onChange={(e)=>setOrderQuantity({...orderQuantity, cowMilk: e.target.value})} 
            >
              <option value="1 Liter">1 Liter</option>
              <option value="2 Liter">2 Liter</option>
              <option value="5 Liter">5 Liter</option>
              <option value="8 Liter">8 Liter</option>
              <option value="10 Liter">10 Liter</option>
              <option value="15 Liter">15 Liter</option>
              <option value="20 Liter">20 Liter</option>
            </select>            

            <button
              className="btn btn-success"
              onClick={() =>
                AddToCart({
                  name: "Cow Milk",
                  price: 50,
                  image: Milk,
                  quantity: parseInt(orderQuantity.cowMilk)
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

            <select class="btn btn-secondary" name="select" 
            value={orderQuantity.buffaloGhee}
             onChange={(e)=>setOrderQuantity({...orderQuantity, buffaloGhee: e.target.value})} 
            >
              <option value="1 KG">1 KG</option>
              <option value="2 KG">2 KG</option>
              <option value="5 KG">5 KG</option>
              <option value="8 KG">8 KG</option>
              <option value="10 KG">10 KG</option>
              <option value="15 KG">15 KG</option>
              <option value="20 KG">20 KG</option>
            </select>            

            <button
              className="btn btn-success"
              onClick={() =>
                AddToCart({
                  name: "Buffalo Ghee",
                  price: 1400,
                  image: Ghee,
                  quantity: parseInt(orderQuantity.buffaloGhee)
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

            <select class="btn btn-secondary" name="select" 
            value={orderQuantity.cowGhee}
             onChange={(e)=>setOrderQuantity({...orderQuantity, cowGhee: e.target.value})} 
            >
              <option value="1 KG">1 KG</option>
              <option value="2 KG">2 KG</option>
              <option value="5 KG">5 KG</option>
              <option value="8 KG">8 KG</option>
              <option value="10 KG">10 KG</option>
              <option value="15 KG">15 KG</option>
              <option value="20 KG">20 KG</option>
            </select>            

            <button
              className="btn btn-success"
              onClick={() =>
                AddToCart({
                  name: "Cow Ghee",
                  price: 1800,
                  image: Ghee,
                  quantity: parseInt(orderQuantity.cowGhee)
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

            <select class="btn btn-secondary" name="select" 
            value={orderQuantity.paneer}
             onChange={(e)=>setOrderQuantity({...orderQuantity, paneer: e.target.value})} 
            >
              <option value="1 KG">1 KG</option>
              <option value="2 KG">2 KG</option>
              <option value="5 KG">5 KG</option>
              <option value="8 KG">8 KG</option>
              <option value="10 KG">10 KG</option>
              <option value="15 KG">15 KG</option>
              <option value="20 KG">20 KG</option>
            </select>

            <button
              className="btn btn-success"
              onClick={() =>
                AddToCart({
                  name: "Paneer",
                  price: 600,
                  image: Paneer,
                  quantity: parseInt(orderQuantity.paneer)
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

            <select class="btn btn-secondary" name="select" 
            value={orderQuantity.dahi}
             onChange={(e)=>setOrderQuantity({...orderQuantity, dahi: e.target.value})} 
            >
              <option value="1 KG">1 KG</option>
              <option value="2 KG">2 KG</option>
              <option value="5 KG">5 KG</option>
              <option value="8 KG">8 KG</option>
              <option value="10 KG">10 KG</option>
              <option value="15 KG">15 KG</option>
              <option value="20 KG">20 KG</option>
            </select>

            <button
              className="btn btn-success"
              onClick={() =>
                AddToCart({
                  name: "Dahi",
                  price: 60,
                  image: Dahi,
                  quantity: parseInt(orderQuantity.dahi)
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