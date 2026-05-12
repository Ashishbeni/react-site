import style from "./Cart.module.css";
import Footer from "./footer";

function Cart({ cartItems, RemoveFromCart }) {
  return (
    <>
      <div className={style.cart}>

        {cartItems.map((item, index) => (
          <div key={index}>
            <img src={item.image} />
            <h5>{item.name}</h5>
            <p>Price: ₹{item.price}</p>

                <button id={style.removeBtn}
                 className="btn btn-danger" onClick={() => RemoveFromCart(item.name)}
                >Remove</button>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Cart;