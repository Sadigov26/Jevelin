import React from "react";
import styles from "./Header.module.scss";
import logo from "../../About/Jevelin_logo_light.png";
import elips from "../../About/Ellipse-974-copy-3.png";
import { SlBasket } from "react-icons/sl";
import { FaLayerGroup } from "react-icons/fa";
import { FaGlasses } from "react-icons/fa";
import { BsBasket } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";
import { MdOutlineSupport } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <img src={elips} alt="" className={styles.elips}/>
        <div className={styles.headerContainer}>
        <div className={styles.fix}>
          <FaLayerGroup  style={{fontSize:"23px" , color:"gray"}}/> 
          <FaGlasses  style={{fontSize:"23px" , color:"gray"}}/>
          <BsBasket  style={{fontSize:"23px" , color:"gray"}}/>
          <FaQuestion  style={{fontSize:"23px" , color:"gray"}}/>
          <MdOutlineSupport  style={{fontSize:"23px" , color:"gray"}}/>
          <IoMdMail  style={{fontSize:"23px" , color:"gray"}}/>
          </div>
          <div className={styles.headerLogo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.headerNavbar}>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="">Gallery</a></li>
              <li><a href="">Features</a></li>
              <li><a href="">Reviews</a></li>
              <li><a href="">Shop</a></li>
            </ul>
          </div>
          <div className={styles.headerButton}>
          <SlBasket  style={{color:"white"}}/>
          <button>BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
