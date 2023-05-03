import * as React from "react";
import styles from "./Home/home.module.css";
import Login from "./Login/Login";
import {Link} from "react-router-dom";


function TopBar(){
  return (
    <div className="topBar">
    <img
    //  src="/playground_assets/rectangle7149-hc5o-200h.png"
      alt=""
      className={styles['rectangle7']}
    />
      <Link to={"/"}><link/>HOME
  <span className={styles['text']}>
        <span>TAKE a BEER</span>
        </span>
      </Link>
  <span className={styles['text02']}>
          <span>EN</span>
        </span>
      <Link to="/login"><link/>
  <span className={styles['text04']}>
          <span>account</span>
        </span>
      </Link>
      <Link to="/shoppingCart"><img
        src={require("../Content/ecM7apobi.png")}
        alt="ecM7apobi11100"
        className={styles['ec-m7apobi1']}
      /><link/>

      </Link>
    </div>
  );
}
export default TopBar;
