import React, { useEffect, useState } from "react";
import styles from "./Products.module.scss";
import axios from "axios";

const Products = () => {
    const [data ,setdata] = useState([]);
    const getData = () => {
        axios.get("https://dummyjson.com/products")
        .then((res) => {
            setdata(res.data.products)
        })
    }
    useEffect(() => {getData()}, [])
  return (
    <div>
      <div className={styles.products}>
        <div className={styles.productsContainer}>
          <div className={styles.productsContainerTop}>
            <h3>ADJUSTABLE STRAPS</h3>
            <h4>Choose the best color for your activity</h4>
          </div>
          <div className={styles.productsCards}>
{data && data.map((item) => (
            <div className={styles.cards}>
                <p>{item.category}</p>
                <h3>{item.title}</h3>
                <h3>{item.price}$</h3>
                <img src={item.thumbnail} alt="" />
            </div>
))}
          </div>
          <div className={styles.productsBottom}>
            <button>SEE MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
