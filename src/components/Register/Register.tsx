/**
 * Created by jindrichdolezal on 03.05.2023
 */

import React from "react";
import RegisterForm from "./RegisterForm";
import styles from "../Login/login.module.css";
import TopBar from "../topBar";

function Register() {
  return (
    <div>
        <img
          src={require("../../Content/beer-background-ZC2QTEK-scaled.jpg")}
          alt="beerbackgroundZC2QTEKscaled1148"
          className={styles['beerbackground-zc2qt-kscaled1']}
        />
      <TopBar/>
      <h1 className={styles['question']}>Register</h1>
      <RegisterForm />
    </div>
  );
}

export default Register;
