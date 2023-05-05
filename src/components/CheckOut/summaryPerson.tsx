import React from "react";
import styles from "../ShoppingBag/shoppingCart.module.css";
import {useAppSelector} from "../../Reducer/hooks";
import {selectPickup, selectUserEmail, selectUserName} from "../../Reducer/loanSlice";
import {selectUserId} from "../../Reducer/authSlice";
import gql from "graphql-tag";
import {useQuery} from "@apollo/client";

export const USER_BY_ID = gql`
    query UserById($userByIdId: ID!) {
    userById(id: $userByIdId) {
    id
    username
    email
    }
    }
`;

function SummaryPerson() {
  let userName = useAppSelector(selectUserName);
  let userEmail = useAppSelector(selectUserEmail);

  const userID = useAppSelector(selectUserId);
  const { loading, error, data } = useQuery(USER_BY_ID, {
    variables: {userByIdId: userID},
  });

  let pickUpAddress = useAppSelector(selectPickup);

  if (loading && userID) return <p>Loading...</p>;
  if (error && userID) return <p>Error :(</p>;

  const user = data?.userById;

  return (
    <div className={styles['baseBox']}>
      {
        userID ?
          <div className={styles['text']}>
            <p>{user?.username}</p>
            <p>{user?.email}</p>
            <p>PICK UP</p>
            <p>{pickUpAddress}</p>
          </div>
          : <div className={styles['text']}>
            <p>{userName}</p>
            <p>{userEmail}</p>
            <p>PICK UP</p>
            <p>{pickUpAddress}</p>
          </div>
      }
    </div>
  );
}

export default SummaryPerson;
