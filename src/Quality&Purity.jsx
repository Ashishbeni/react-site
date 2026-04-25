import style from "./Quality&Purity.module.css";
import QualityPurity from "./ProductsImages/Quality&Purity.png";

function QualityAndPurity() {
  return (
 <>
    <div className={style.main}>
     <div className={style.heading}>
      <h1>Quality&Purity</h1>
      <p>MuharaGold me quality koi option nahi —
yeh hamari daily commitment hai.

Hum ensure karte hain ki har product bilkul fresh aur natural ho. Milk directly trusted farms se liya jata hai, jahan animals ki proper care ki jati hai aur natural practices follow ki jati hain.

Processing ke har step par hygiene ka khas dhyaan rakha jata hai, taki aap tak jo product pahunchta hai wo bilkul safe aur clean ho. Hum kisi bhi tarah ke chemicals ya adulteration se door rehte hain, kyunki hum jaante hain ki aapki health sabse important hai.

Har spoon dahi ka, har bite paneer ki aur har drop doodh ka — ek hi baat reflect karta hai: purity, freshness aur trust.

Humari koshish sirf products deliver karna nahi, balki aapko ek aisa experience dena hai jahan aap bina soche samjhe hum par bharosa kar sakein — kyunki jo hum dete hain, wo bilkul waise hi hota hai jaise nature ne banaya hai.</p>
     </div>
     <div className={style.imgIcon}>
      <img src={QualityPurity} alt="Team" />
     </div>
    </div>
  </>
  );
}

export default QualityAndPurity;