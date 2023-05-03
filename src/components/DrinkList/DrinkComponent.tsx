/**
 * Created by jindrichdolezal on 02.05.2023
 */

import React from 'react';
import {Box, Grid} from "@mui/material";
import styles from './DrinkComponent.module.css';
import {Link} from "react-router-dom";

interface DrinkProps {
  drink: {
    id: string;
    name: string;
    amountOfAlcohol: number;
    brewery: string;
    description: string;
    image: string;
    type: string;
    IBU: number;
  }
}
function DrinkComponent(props: DrinkProps) {
  const {drink} = props;

  return (
    <div className={styles['baseBox']}>
      <Grid>
        {/*<img src={require(drink.image)} alt='lol' />*/}
        <Box className={styles['text']}>
          <h3>PRODUCT INFO</h3>
          <p>NAME: {drink.name}</p>
          <p>DESCRIPTION: {drink.description}</p>
          <p>ALCOHOL: {drink.amountOfAlcohol}</p>
          <p>BRAVERY: {drink.brewery}</p>
          <p>DESCRIPTION: {drink.description}</p>
          <p>IBU: {drink.IBU}</p>
          <Link to={`/productOffer/${drink.id}`}>
            <button className={styles['button']}>Show options</button>
          </Link>
        </Box>
      </Grid>
    </div>
  );
};

export default DrinkComponent;
