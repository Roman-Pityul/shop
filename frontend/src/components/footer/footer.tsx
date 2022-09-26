import React from "react";

import logo from "../../img/footer-logo.svg";
import insta from "../../img/instagram.svg";
import vk from "../../img/vkontakte.svg";
import faceb from "../../img/facebook.svg";
import ok from "../../img/ok.svg";
import phone from "../../img/phone.svg";

import "./footer.scss";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {

   const scrollUp = () => {
      window.scroll(0, 0);
   };

   return (
      <div className="footer">
         <div className="footer__content">
            <div className="footer__left">
               <img src={logo} alt="logo" />
               <Link to='about' onClick={scrollUp} className="footer__link">
                  <span>О компании</span>
               </Link>
               <Link to='contacts' onClick={scrollUp} className="footer__link">
                  <span >Контакты</span>
               </Link>
               <Link to='vacancy' onClick={scrollUp} className="footer__link">
                  <span>Вакансии</span>
               </Link>
               <Link to='articles' onClick={scrollUp} className="footer__link">
                  <span>Статьи</span>
               </Link>
               <Link to='policy' onClick={scrollUp} className="footer__link">
                  <span>Политика обработки персональных данных</span>
               </Link>
            </div>
            <div className="footer__right">
               <img src={insta} alt="instagram" />
               <img src={vk} alt="vk" />
               <img src={faceb} alt="facebook" />
               <img src={ok} alt="ok" />
               <img src={phone} alt="phone" />
               <span>8 800 777 33 33</span>
            </div>
         </div>
      </div>
   );
};

export default Footer;
