import style from "./OurMission.module.css";
import Ourmission from "./ProductsImages/OurMission.png";

function OurMission() {
  return (
 <>
    <div className={style.main}>
     <div className={style.heading}>
      <h1>OurMission</h1>
      <p>Hamari mission simple hai —
“Har ghar tak safe, fresh aur pure dairy products pahunchana.”

Humara focus sirf products bechna nahi, balki har customer ko ek safe aur healthy experience dena hai. Hum chahte hain ki jab aap humare doodh, dahi, paneer ya ghee ka use karein, to aapko bilkul bhi doubt na ho — bas trust aur satisfaction ho.

Isliye hum sourcing se lekar delivery tak har step par special dhyaan dete hain. Freshness maintain karna, hygiene follow karna aur quality ko consistent rakhna — yeh sab hamare daily process ka hissa hai.

Hum believe karte hain ki acchi health ki shuruaat clean aur pure food se hoti hai. Isi liye hamari puri team dedicated hai ki aap tak sirf best quality hi pahunchay — natural, fresh aur bilkul safe dairy products, jin par aap har roz bharosa kar sakein.</p>
     </div>
     <div className={style.imgIcon}>
      <img src={Ourmission} alt="Team" />
     </div>
    </div>
  </>
  );
}

export default OurMission;