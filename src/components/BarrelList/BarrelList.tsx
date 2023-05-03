import react from 'react';
import Barrels from "../../interfaces/Barrels";
import React from "react";
import gql from 'graphql-tag';
import {useQuery} from "@apollo/client";
import styles from "../Home/home.module.css";
import TopBar from "../topBar";
import {List} from "@mui/material";
import BarrelComponent from "./BarrelComponent";
import {useParams} from "react-router-dom";

export const GET_BARRELS_BY_DRINK = gql`
    query BarrelByDrink($drinkId: ID!) {
        barrelByDrink(drinkId: $drinkId) {
            id
            price
            volume
            drink {
                name
                IBU
                amountOfAlcohol
                brewery
                description
                id
                image
                type
            }
            available
        }
    }
`;

interface barrelByDrinkData {
  barrelByDrink: Barrels[];
}

function BarrelList() {
  const {drinkId} = useParams();
  const { loading, error, data } = useQuery(GET_BARRELS_BY_DRINK, {
    variables: {drinkId: drinkId},
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const barrels = data.barrelByDrink;

  return (
    <div>
      <img
        src={require("../../Content/beer-background-ZC2QTEK-scaled.jpg")}
        alt="beerbackgroundZC2QTEKscaled1148"
        className={styles['beerbackground-zc2qt-kscaled1']}
      />
      <TopBar/>
      <List className={styles['containerList']}>
        {barrels.map((barrel: Barrels) => (
          <BarrelComponent key={barrel.id} barrelById={barrel} />
        ))}
      </List>
    </div>
  );
}


export default BarrelList;
