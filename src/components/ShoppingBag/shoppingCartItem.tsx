// /**
//  * Created by jindrichdolezal on 03.05.2023
//  */
//
 import React from 'react';
import gql from "graphql-tag";
import {useQuery} from "@apollo/client";
import styles from './shoppingCart.module.css'

export const GET_SINGLE_BARREL = gql`
    query BarrelById($barrelByIdId: ID!) {
        barrelById(id: $barrelByIdId) {
            id
            price
            volume
            drink {
                id
                name
                image
            }
            available
        }
    }
`;

interface DrinkData {
  barrelId: string;
}

 function ShoppingCartItem(proms: DrinkData) {
   const {loading, error, data} = useQuery(GET_SINGLE_BARREL, {
    variables: {barrelByIdId: proms.barrelId},
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const barell = data?.barrelById;

  return (

    <div className={styles['baseBox']}>
     <div className={styles['text']}>
       <p>{barell.drink.name}</p>
       <p>SIZE: {barell.volume}L</p>
       <p>PRICE: {barell.price}€</p>
     </div>
    </div>
   );
 }

 export default ShoppingCartItem;
