import React from 'react'

import styles from './home.module.css'
import TopBar from "../topBar";
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className={styles['container']}>
      <div className={styles['home']}>
        <img
          src={require("../../Content/beer-background-ZC2QTEK-scaled.jpg")}
          alt="beerbackgroundZC2QTEKscaled1148"
          className={styles['beerbackground-zc2qt-kscaled1']}
        />
        <TopBar/>
        <span className={styles['text06']}>
          <span>Do you like taste of beer? You are on a right place.</span>
        </span>
        <button
          className={styles['rectangle8']}
        />
        <button
          className={styles['rectangle9']}
        />
        <button
          className={styles['rectangle10']}
        />
        <img
          src={require("../../Content/img_405324.png")}
          alt="img4053241158"
          className={styles['img4053241']}
        />
        <span className={styles['text08']}>
          <span>About us</span>
        </span>
        <img
          src={require("../../Content/brewery-icon-13.jpg.png")}
          alt="breweryicon131160"
          className={styles['breweryicon131']}
        />
        <Link to="/productOffer"><link/>
          <span className={styles['text10']}>
          <span>Product offer</span>
        </span>
        </Link>
        <img
          src={require("../../Content/3067706.png")}
          alt="IMAGE30677061162"
          className={styles['image30677061']}
        />
        <Link to={'/whyCraftBeer'}>
        <span className={styles['text12']}>
          <span>Why craft beer?</span>
        </span>
        </Link>
      </div>
    </div>
  )
}

export default Home
