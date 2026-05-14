import style from "./Contact.module.css";
import Footer from "./footer";
import { Link } from "react-router-dom";

function Contact(){
  return(
    <>
    <div className={style.main}>
      <div className={style.heading}>
           <h1>Contct Us</h1>
           <p>For any inquiries or partnership opportunities, feel free to reach out to MurrahGold International. We’re here to assist you with premium quality products and reliable support.</p>
      </div>

      <div className={style.elementsDiv}>
        <div className={style.element}>
          <a href="tel:+917056523602"><h1><i  class="fa-solid fa-mobile-screen"></i></h1>
          <h3>Phone:</h3>
          <h5>+91 7056523602</h5>
          </a>
        </div>

        <div className={style.element}>
          <a href="mailto:murrahgold@gmail.com?Subject=Inquiry">
          <h1>  <i class="fa-solid fa-envelope"></i></h1>
          <h3>Email:</h3>
          <h5>murrahgold@gmail.com</h5>      
          </a>     
        </div>

        <div className={style.element}>
          <h1>  <i class="fa-solid fa-location-dot"></i></h1>
          <h3>Address:</h3>
          <h5>VPO Dhad, Tehsil Barwala, District Hisar, Haryana, India</h5>          
        </div>
      </div>

      <div className={style.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27834.74653169953!2d75.98837037670074!3d29.301603419552197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391223ecb424185b%3A0x4cee45b27e468624!2sDhad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1777884025929!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>

    

    <Footer/>
    </>
  )

}

export default Contact;