import React from "react";
import styles from "./Galary.module.scss";
import watch2 from "../../About/gallery6.jpg";
import replace from "../../About/Replace-screen-inside-this-SO3-1.jpg";
import { MdKeyboardVoice } from "react-icons/md";


const Galary = () => {
  return (
    <div>
      <div className={styles.galary}>
        <div className={styles.galaryContainer}>
         
          <div className={styles.galaryTitle}>
            <h3>ABOUT OUR WATCHES</h3>
            <h1>
              <span>New</span>,<span>Improved</span>Design and Performance
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              vitae odales lectus, non ultrices nisi. In varius, leo non
              gravida.
            </p>
          </div>
          <div className={styles.galaryImg}>
            <img src={watch2} alt="" />
            <img src={watch2} alt="" />
            <img src={watch2} alt="" />
          </div>
          <div className={styles.galaryMeet}>
            <div className={styles.galaryMeetImg}>
              <img src={replace} alt="" />
            </div>
            <div className={styles.galaryMeetDesk}>
              <div>
                <h3>MEET WITH OUR</h3>
                <h1>Splendid Features</h1>
              </div>

              <div>
                <MdKeyboardVoice />
                <div>
                  <h3>Voice Recognition</h3>
                  <h1>
                    Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                    Mauris
                  </h1>
                </div>
              </div>
              <div>
                <MdKeyboardVoice />
                <div>
                  <h3>Voice Recognition</h3>
                  <h1>
                    Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                    Mauris
                  </h1>
                </div>
              </div>
              <div>
                <MdKeyboardVoice />
                <div>
                  <h3>Voice Recognition</h3>
                  <h1>
                    Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                    Mauris
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galary;
