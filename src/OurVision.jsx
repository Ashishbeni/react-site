import style from "./OurVision.module.css"
import OurVision from "./ProductsImages/OurVision.png";

function OurVision() {
  return (
 <>
    <div className={style.main}>
     <div className={style.heading}>
      <h1>OurVision</h1>
      <p>Humara vision hai: “India ka sabse trusted dairy brand banna.”

Hum sirf ek dairy company nahi banna chahte, balki har ghar ka ek trusted hissa banna chahte hain. Hamara aim hai ki jab bhi koi doodh, dahi, paneer ya ghee ke baare me soche, to sabse pehle MuharaGold ka naam yaad aaye.

Aane wale samay me hum apni reach ko aur badhana chahte hain, naye areas me expand karna chahte hain aur zyada se zyada logon tak apne pure aur fresh products pahunchana chahte hain. Lekin growth ke saath-saath hum apni core values — quality, purity aur trust — ko kabhi compromise nahi karenge.

Hum believe karte hain ki asli success sirf expansion me nahi, balki customer ke bharose me hoti hai. Isi liye hum har din better banne ki koshish karte hain, taki aapko hamesha best mile — safe, fresh aur truly pure dairy products.</p>
     </div>
     <div className={style.imgIcon}>
      <img src={OurVision} alt="Team" />
     </div>
    </div>
  </>
  );
}

export default OurVision;