import Footer from "./footer";
import style from "./BestSellingProductsHome.module.css";
import milk from"./ProductsImages/drinkMilk.png";
import ghee from"./ProductsImages/eatGhee.png";
import paneer from"./ProductsImages/eatPaneer.png";
import dahi from"./ProductsImages/eatDahi.png";

function BestSellingProductsHome(){
  return(
    <div className={style.main}>
      <div className={style.bestSellingProductsHome}>

      <h1>⭐ Best Selling Products</h1>
      <h5>Murrah Gold ke kuch sabse zyada pasand kiye jaane wale products, jo roz hazaron gharon tak fresh aur pure quality ke saath pahunchte hain:</h5><br />

      
      <h2>🥛 Pure Cow & Buffalo Milk</h2>
      <div className={style.productDetailsWithImage}>
      <img id={style.image1} src={milk} alt="Milk" />
      <p>Hamara sabse popular product, jo roz subah fresh farm se collect karke direct aapke ghar tak deliver kiya jata hai. Isme koi mixing ya chemical nahi hota, sirf natural aur healthy milk.</p>
      </div><br />

      <h2>🧈 Pure Cow & Buffalo Ghee</h2>
      <div className={style.productDetailsWithImage}>
      <p>Shudh desi ghee made from premium quality cow and Murrah buffalo milk, prepared with traditional methods to preserve rich aroma, natural nutrition, and authentic taste. MurrahGold Ghee brings strength, purity, and farm freshness to every home with the perfect blend of health and tradition.</p>
      <img src={ghee} alt="Ghee" />
      </div><br />

      <h2>🧀 Fresh Paneer</h2>
      <div className={style.productDetailsWithImage}>
      <img id={style.image3} src={paneer} alt="Paneer" />
      <p>Soft, fresh aur high-quality paneer jo daily fresh milk se banaya jata hai. Cooking ke liye perfect aur protein se bharpoor.</p>
      </div><br />
      
      <h2>🧀 Fresh & Creamy Dahi</h2>
      <div className={style.productDetailsWithImage}>
      <p>Prepared from pure cow and Murrah buffalo milk, MurrahGold Dahi is naturally thick, creamy, and rich in nutrition. Packed with calcium, protein, and natural probiotics, it supports healthy digestion and strengthens immunity while delivering the authentic farm-fresh taste your family loves every day.</p>
      <img src={dahi} alt="Dahi" />
      </div>

      <h2>👉 Murrah Gold ka promise:</h2>
      <h5>Har product me sirf freshness, purity aur trust milega — bina kisi compromise ke.</h5>

      </div>
    </div>
    
   
  )
}

export default BestSellingProductsHome;