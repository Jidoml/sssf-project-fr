import React from "react";
import styles from "./checkOut.module.css";
import {Link} from "react-router-dom";

interface changeGuest {
  handleGuest: () => void;
}

function HowOrder({handleGuest}: changeGuest) {
  return (
    <div>
      <p>
      <Link to={"/login"}>
        <button className={styles['button1']}>
          <span className={styles['simpleText']}>Login</span>
        </button>
      </Link>
        <a className={styles['line']}></a>
        <a>
          <button className={styles['button2']} onClick={handleGuest}>
            <span className={styles['simpleText']}>Order as guest</span>
          </button>
        </a>
      <div></div>
      <Link to={"/register"}>
        <button className={styles['button1']}>
          <span className={styles['simpleText']}>Register</span>
        </button>
      </Link>
      </p>
    </div>
  );
}

export default HowOrder;
