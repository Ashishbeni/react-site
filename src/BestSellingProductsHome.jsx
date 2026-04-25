import Footer from "./footer";
import style from "./BestSellingProductsHome.module.css";
function BestSellingProductsHome(){
  return(
    <div className={style.main}>
      <div className={style.bestSellingProductsHome}>
      <h1>⭐ Best Selling Products</h1>
      <p>Muhara Gold ke kuch sabse zyada pasand kiye jaane wale products, jo roz hazaron gharon tak fresh aur pure quality ke saath pahunchte hain:</p><br />

      <h2>🥛 Pure Bhains Milk</h2>
      <p>Hamara sabse popular product, jo roz subah fresh farm se collect karke direct aapke ghar tak deliver kiya jata hai. Isme koi mixing ya chemical nahi hota, sirf natural aur healthy milk.</p><br />

      <h2>🧈 Desi Ghee</h2>
      <p>Traditional tareeke se bana hua shudh desi ghee, jo apne rich taste aur aroma ke liye jana jata hai. Har ghar ki sehat aur swad ka perfect combination.</p><br />

      <h2>🧀 Fresh Paneer</h2>
      <p>Soft, fresh aur high-quality paneer jo daily fresh milk se banaya jata hai. Cooking ke liye perfect aur protein se bharpoor.</p><br />

      <h2>👉 Muhara Gold ka promise:</h2>
      <p>Har product me sirf freshness, purity aur trust milega — bina kisi compromise ke.</p>

      </div>
    </div>
  )
}

export default BestSellingProductsHome;