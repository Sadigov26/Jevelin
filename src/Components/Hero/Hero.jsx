import React from "react";
import styles from "./Hero.module.scss";
import watch from "../../About/Vector-Smart-Object-copy-3.png";

const Hero = () => {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContainerDesk}>
            <h1>
              Lifestyle <br /> Smart <span>Watch</span>
            </h1>
            <h3>technology of the future</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae sodales lectus, non ultrices nisi. In varius.
            </p>
          </div>
          <div className={styles.heroContainerWatch}>
            <img src={watch} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
