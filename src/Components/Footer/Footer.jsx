import React from "react";
import styles from "./Footer.module.scss"; // Footer bileşenine özgü stilleri içeren dosya
import logo from "../../About/Jevelin_logo_light.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <img src={logo} alt="Jevelin Logo" className={styles.footerLogo} />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.
          </p>
          <li>Secure online payment</li>
        </div>
        <div className={styles.footerRight}>
          <ul className={styles.footerLinks}>
            <h3>BEST EXPERIENCE</h3>
            <li>FAQ</li>
            <li>Shipment</li>
            <li>Returns</li>
            <li>Gift cards</li>
            <li>Policies</li>
          </ul>
        </div>
        <div className={styles.footerLinkstwo}>
          <h3>COMPANY</h3>
          <li>About us</li>
          <li>Press</li>
          <li>Offices</li>
          <li>Affiliates</li>
          <li>Giveaway</li>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>Copyright © 2018 JevelinTheme - Theme by Shufflehound</p>
      </div>
    </footer>
  );
};

export default Footer;
