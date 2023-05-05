import React from "react";
import styles from "./thanks.module.css";
import TopBar from "../topBar";

function Thanks() {
  return (
    <div>
      <img
        src={require("../../Content/beer-background-ZC2QTEK-scaled.jpg")}
        alt="beerbackgroundZC2QTEKscaled1148"
        className={styles['beerbackground-zc2qt-kscaled1']}
      />
      <TopBar/>
      <div>
      <h1 className={styles['question']}>Thank you for your order!</h1>
      <a href={"/"}>
      <button className={styles['button']}>Back to home</button>
      </a>
      </div>
    </div>
  );
}

export default Thanks;
