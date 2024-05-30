import React from "react";
import styles from "./Quickvideo.module.scss";

const Quickvideo = () => {
  return (
    <div>
      <div className={styles.quickvideo}>
        <div className={styles.quickvideoContainer}>
          <div className={styles.quickvideoContainerTop}>
            <h3>HOW IT WORKS</h3>
            <h1>
              <span>See for yourself. </span>
              <br />
              Quick video introduction
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              vitae
              <br /> odales lectus, non ultrices nisi. In varius, leo non
              gravida.
            </p>
          </div>
          <div className={styles.quickvideoContainerBottom}>
            <iframe
              width="523"
              height="294"
              src="https://www.youtube.com/embed/g4n2yVPnQzs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quickvideo;
