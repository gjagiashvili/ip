import React from "react";
import styles from "../modules/InfoContainer.module.scss";

const InfoContainer = ({ ipAddress, location, timezone, isp }) => {
  return (
    <div className={styles["info-container"]}>
      <div className={styles["info-item"]}>
        <span className={`${styles["info-label"]} ${styles["label"]}`}>
          IP Address:
        </span>
        <br></br>
        <span className={styles["info-value"]}>{ipAddress}</span>
      </div>
      <div className={styles["info-item"]}>
        <span className={`${styles["info-label"]} ${styles["label"]}`}>
          Location:
        </span>
        <br></br>
        <span className={styles["info-value"]}>{location}</span>
      </div>
      <div className={styles["info-item"]}>
        <span className={`${styles["info-label"]} ${styles["label"]}`}>
          Timezone:
        </span>
        <br></br>
        <span className={styles["info-value"]}>{timezone}</span>
      </div>
      <div className={styles["info-item"]}>
        <span className={`${styles["info-label"]} ${styles["label"]}`}>
          ISP:
        </span>
        <br></br>
        <span className={styles["info-value"]}>{isp}</span>
      </div>
    </div>
  );
};

export default InfoContainer;
