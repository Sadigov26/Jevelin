import React from "react";
import styles from "./Experience.module.scss";
import group from "../../About/Group-811211112-copy-71-1.jpg";

const Experience = () => {
  return (
    <div>
      <div className={styles.experience}>
        <div className={styles.experienceContainer}>
          <div className={styles.experienceContainerTitle}>
            <h3>NOW UPGRADED FOR</h3>
            <h1>Best Experience</h1>
          </div>
          <div className={styles.experienceContainerBottom}>
            <div className={styles.experienceContainerDesk}>
              <div>
                <h3>+ Increased storage</h3>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                  Mauris
                </p>

                <div className={styles.faiz}>
                  <div className={styles.faizXett}> </div> <h4>30%</h4>
                </div>
              </div>
              <div>
                <h3>+ Increased storage</h3>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                  Mauris
                </p>
                <div className={styles.faiz2}>
                  <div className={styles.faizXett2}> </div> <h4>80%</h4>
                </div>
              </div>
              <div>
                <h3>+ Increased storage</h3>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                  Mauris
                </p>
                <div className={styles.faiz3}>
                  <div className={styles.faizXett3}> </div> <h4>60%</h4>
                </div>
              </div>
            </div>
            <div className={styles.experienceContainerimg}>
              <img src={group} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
