import React from "react";
import styles from "../Home/home.module.css";
import TopBar from "../topBar";

function WhyCraftBeer() {

  return (
    <div className={styles['container']}>
      <div className={styles['home']}>
        <img
          src={require("../../Content/beer-background-ZC2QTEK-scaled.jpg")}
          alt="beerbackgroundZC2QTEKscaled1148"
          className={styles['beerbackground-zc2qt-kscaled1']}
        />
        <TopBar/>
        <p className={styles['textOnly']}>Craft beer is better because, let's face it, life is too short to drink watered-down beer that tastes like disappointment. Plus, you can always tell people you're supporting small businesses while getting tipsy. It's a win-win situation!</p>
      </div>
    </div>
  )
}

export default WhyCraftBeer;
