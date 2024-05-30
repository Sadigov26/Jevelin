import React from "react";
import styles from "./Customers.module.scss";
import cust from "../../About/tyler-nix-626668-unsplash2.jpg";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Customers = () => {
  return (
    <div>
      <div className={styles.customers}>
        <div className={styles.customersContainer}>
          <div className={styles.customersTop}>
            <h1>What our customers say</h1>
          </div>
          <div className={styles.customersBottom}>
            <div className={styles.imageCustomers}>
              <FaChevronLeft />
              <img src={cust} alt="" />
              <FaChevronRight />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              vitae odales lectus, non ultrices nisi. In varius, leo non
              gravida.
            </p>
            <h3>Maggie Wilson</h3>
            <h1>99</h1>
          </div>
        </div>
        <div className={styles.customersContainerBottom}>
        <FaYoutube  />
        <FaYoutube  />
        <FaYoutube  />
        <FaYoutube  />
        </div>
      </div>
    </div>
  );
};

export default Customers;
