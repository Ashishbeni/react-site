import style from "./OurStory.module.css";
import OurStory from "./ProductsImages/OurStory.png";


function OurStory() {
  return (
 <>
    <div className={style.main}>
     <div className={style.heading}>
      <h1>OurStory</h1>
      <p>MuharaGold ki shuruaat ek simple soch se hui —
“Shuddh doodh har ghar tak pahunchna chahiye.”

Hamari journey chhoti si shuruaat se start hui, jahan humne local farmers ke saath milkar fresh aur natural dairy products deliver karna shuru kiya. Dheere-dheere yeh sirf ek kaam nahi, balki ek responsibility ban gaya — logon tak asli aur bina milawat ke products pahunchane ki.

Aaj bhi hum wahi values follow karte hain — honesty, freshness aur trust. Har subah jab doodh collect hota hai, to usme sirf ek hi cheez hoti hai — quality ka promise.

Hum maante hain ki ek strong brand sirf products se nahi, balki relationships se banta hai. Isi liye MuharaGold sirf ek naam nahi, balki ek rishta hai jo hum apne customers ke saath har roz aur mazboot banate hain.</p>
     </div>
     <div className={style.imgIcon}>
      <img src={OurStory} alt="Team" />
     </div>
    </div>
  </>
  );
}

export default OurStory;