import style from "./aboutTeam.module.css"

function AboutTeam() {
  return (
 <>
    <div className={style.main}>
     <div className={style.heading}>
      <h1>About Our Team</h1>
      <p>MuharaGold me hamari team sirf logon ka group nahi hai —
yeh ek family hai jo purity, trust aur care me believe karti hai.

Subah ke early milk collection se lekar aapke ghar tak fresh products deliver karne tak, har step hum poori dedication aur honesty ke saath handle karte hain. Har member ka ek hi focus hota hai — best quality dena, bina kisi compromise ke.

Hamare farmers, workers aur staff sab milkar ek hi goal par kaam karte hain:
aap tak sabse fresh aur natural dairy products pahunchana.

Hum samajhte hain ki doodh aur uske products aapki daily life ka important hissa hain. Isliye hum ensure karte hain ki jo bhi aap tak pahunchta hai, wo clean, hygienic aur goodness se bharpur ho.

Har drop doodh ke peeche, har spoon dahi ke andar, aur har bite paneer me —
hamari mehnat, commitment aur quality ka promise chhupa hota hai.

MuharaGold me hum sirf dairy products nahi bechte —
hum aapko trust serve karte hain.</p>
     </div>
     <div className={style.imgIcon}>
      <img src="src/ProductsImages/Team.png" alt="Team" />
     </div>
    </div>
  </>
  );
}

export default AboutTeam;