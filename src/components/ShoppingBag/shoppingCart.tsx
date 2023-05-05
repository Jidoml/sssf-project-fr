import React from "react";
import {useAppSelector} from "../../Reducer/hooks";
import {selectBarrelIds} from "../../Reducer/cartSlice";
import ShoppingCartItem from "./shoppingCartItem";
import styles from "./shoppingCart.module.css"
import TopBar from "../topBar";
import {List} from "@mui/material";
import {Link} from "react-router-dom";

function ShoppingCart() {
  let barrelIds = useAppSelector(selectBarrelIds);

  return (
    <div>
      <img
        src={require("../../Content/beer-background-ZC2QTEK-scaled.jpg")}
        alt="beerbackgroundZC2QTEKscaled1148"
        className={styles['beerbackground-zc2qt-kscaled1']}
      />
      <TopBar/>
      <p className={styles['mainText']}>Review your bag</p>
      <div className={styles['container']}>
        {
          barrelIds ?
            <div>
              <List className={styles['containerList']}>
                {
                  barrelIds.map((barrelId) => (
                    <ShoppingCartItem key={barrelId} barrelId={barrelId}/>
                  ))}
              </List>
              <Link to={"/productOffer"} className={styles['bottomField']}>
                <button className={styles['button1']}>
                  <span className={styles['simpleText']}>Continue shopping</span>
                </button>
              </Link>
              <Link to={"/checkOut"}>
                <button className={styles['button2']}>
                  <span className={styles['simpleText']}>Check out</span>
                </button>
              </Link>
            </div>
            : <p className={styles['mainText']}>No drinks selected</p>
        }
      </div>
    </div>
  );
}

export default ShoppingCart;
