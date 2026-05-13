import style from "./Cart.module.css";
import Footer from "./footer";

function Cart({ cartItems, RemoveFromCart }) {

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deleveryCharge =
    totalPrice < 500 && totalPrice > 0 ? 50 : 0;

  const finalPrice = totalPrice + deleveryCharge;



  /* ✅ WhatsApp Message */
  const whatsappMessage = cartItems
    .map(
      (item) =>
        `🛒 ${item.name}
Quantity: ${item.quantity}
Price: ₹${item.price * item.quantity}`
    )
    .join("\n\n");



  /* ✅ WhatsApp URL */
  const whatsappURL = `https://wa.me/917056523602?text=${encodeURIComponent(
    `🥛 Murrah Gold Dairy Order\n\n${whatsappMessage}

-------------------
Total Price: ₹${totalPrice}
Delivery Charge: ₹${deleveryCharge}
Final Price: ₹${finalPrice}`
  )}`;




  return (
    <>
      <h1 className={style.cartTitle}>
        Your Fresh Dairy Cart 🥛
      </h1>

      <div className={style.cart}>

        {cartItems.map((item, index) => (
          <div key={index} className={style.cartItemBox}>

            <img src={item.image} alt={item.name} />

            <h5>{item.name}</h5>

            <h5>
              Price:
              <span className={style.value}>
                ₹{item.price}
              </span>
            </h5>

            <h5>
              Quantity:
              <span className={style.value}>
                {item.quantity}
              </span>
            </h5>

            <button
              id={style.removeBtn}
              className="btn btn-danger"
              onClick={() => RemoveFromCart(item.name)}
            >
              Remove
            </button>

          </div>
        ))}

      </div>

      <br />



      <h5 className={style.totalPrice}>
        Total Price:
        <span className={style.value}>
          ₹{totalPrice}
        </span>
      </h5>

      <h5 className={style.totalPrice}>
        Delivery Charge:
        <span className={style.value}>
          ₹{deleveryCharge}
        </span>
      </h5>

      <h5 className={style.totalPrice}>
        Final Price:
        <span className={style.value}>
          ₹{finalPrice}
        </span>
      </h5>



      {/* ✅ WhatsApp Order Button */}

      <a
        href={whatsappURL}
        target="_blank"
        rel="noreferrer"
        className="btn btn-success"
        style={{
          marginLeft: "10px",
          marginBottom: "20px"
        }}
      >
        Order on WhatsApp
      </a>

      <Footer />
    </>
  );
}

export default Cart;