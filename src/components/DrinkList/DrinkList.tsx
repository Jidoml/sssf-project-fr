import react from 'react';
import DrinkComponent from "./DrinkComponent";
import Drink from "../../interfaces/Drink";
import React from "react";
import gql from 'graphql-tag';
import {useQuery} from "@apollo/client";
import styles from "../Home/home.module.css";
import TopBar from "../topBar";
import {List} from "@mui/material";

export const GET_DRINKS = gql`
    query Drinks {
        drinks {
            id
            name
            description
            image
            amountOfAlcohol
            brewery
            type
            IBU
        }
    }
`;

export type GetDrinksQuery = {
  drinks: Drink[];
};

function DrinkList() {
  const { loading, error, data } = useQuery(GET_DRINKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const drinks = data.drinks;

  return (
    <div>
      <img
        src={require("../../Content/beer-background-ZC2QTEK-scaled.jpg")}
        alt="beerbackgroundZC2QTEKscaled1148"
        className={styles['beerbackground-zc2qt-kscaled1']}
      />
      <TopBar/>
      <List className={styles['containerList']}>
      {drinks.map((drink: Drink) => (
        <DrinkComponent key={drink.id} drink={drink} />
        ))}
      </List>
    </div>
  );
};


export default DrinkList;
