import React from "react";
import {useAppSelector} from "../../Reducer/hooks";
import {selectBarrelIds} from "../../Reducer/cartSlice";
import ShoppingCartItem from "./shoppingCartItem";
import styles from "./shoppingCart.module.css"
import TopBar from "../topBar";
import {List} from "@mui/material";

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
        <List className={styles['containerList']}>
          {
            barrelIds ?
              barrelIds.map((barrelId) => (
                <ShoppingCartItem barrelId={barrelId}/>
              )) : <p>No drinks selected</p>
          }
        </List>
    </div>
  );
}

export default ShoppingCart;
