/**
 * Created by jindrichdolezal on 03.05.2023
 */

import React from 'react';
import {Box, Grid} from "@mui/material";
import styles from './Barrel.module.css'
import {useDispatch} from "react-redux";
import {addBarrelId, selectBarrelIds} from "../../Reducer/cartSlice";
import {useAppSelector} from "../../Reducer/hooks";


interface BarrelProps {
  barrelById: {
    id: string;
    price: number;
    volume: number;
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
    available: boolean;
  }
}

function BarrelComponent(props: BarrelProps) {
  const {barrelById} = props;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addBarrelId(barrelById.id));
  };
  let barrelIds = useAppSelector(selectBarrelIds);

  return (
    <div className={styles['baseBox']}>
      <Grid>
        {/*<img src={require(drink.image)} alt='lol' />*/}
        <Box className={styles['text']}>
          <h3>PRODUCT INFO</h3>
          <p>NAME: {barrelById.drink.name}</p>
          <p>{barrelById.available && !barrelIds?.includes(barrelById.id) ?
            <p>
              <button className={styles['button']} onClick={handleClick}>
                <span className={styles['simpleText']}>Add to bag</span>
              </button>
            </p>
            : <p>IN CART</p>}</p>
        </Box>
        <Box className={styles['textRight']}>
          <p>{barrelById.volume}L</p>
          <p>{barrelById.price}€</p>
          <p>{barrelById.available ? 'Available' : 'Not available'}</p>
        </Box>
      </Grid>
    </div>
  );
}

export default BarrelComponent;
