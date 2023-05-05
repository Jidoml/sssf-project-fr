import React, {useState} from "react";
import {List} from "@mui/material";
import styles from "./checkOut.module.css";
import ShoppingCartItem from "../ShoppingBag/shoppingCartItem";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Reducer/hooks";
import {clearBarrelId, selectBarrelIds} from "../../Reducer/cartSlice";
import {selectPickup, selectUserEmail, selectUserID, selectUserName} from "../../Reducer/loanSlice";
import SummaryPerson from "./summaryPerson";
import {useMutation} from "@apollo/client";
import {selectToken, selectUserId} from "../../Reducer/authSlice";
import {setId, setToken} from "../../Reducer/authSlice";
import gql from "graphql-tag";

const CREATE_LOAN = gql`
    mutation CreateLoan($user: ID!, $barrel: [ID]!, $pickUp: String!) {
        createLoan(user: $user, barrel: $barrel, pickUp: $pickUp) {
            pickUp
            barrel {
                id
            }
            user {
                id
            }
        }
    }
`;

const REGISTER = gql`
    mutation Register($user: UserInput!) {
        register(user: $user) {
            token
            message
            user {
                email
                id
                username
            }
        }
    }
`;

type Variables = {
  username: string;
  email: string;
  password: string;
}

const LOGIN_MUTATION = gql`
    mutation Login($credentials: Credentials!) {
        login(credentials: $credentials) {
            token
            message
            user {
                id
                username
                email
            }
        }
    }
`;

interface Credentials {
  username: string
  password: string
}

function Summary() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  let barrelIds = useAppSelector(selectBarrelIds);
  const loginUser = useAppSelector(selectUserId);
  const questName = useAppSelector(selectUserName);
  const questEmail = useAppSelector(selectUserEmail);

  const token = useAppSelector(selectToken);

  const variables: Variables = {
    username: questName as string,
    email: questEmail as string,
    password: 'lmkfmv',
  };
  const credentials: Credentials = {
    username: questName as string,
    password: 'lmkfmv',
  }
  const barrel = barrelIds;
  const pickUp = useAppSelector(selectPickup);

  const [login, { loading: loadingLogin, error: errorLogin }] = useMutation(LOGIN_MUTATION)
  const [registerUser, { loading: RegisterLoading, error: RegisterError }] = useMutation(REGISTER);
  const [createLoan, { loading, error }] = useMutation(CREATE_LOAN);
  async function handleSubmit (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    let user : string = loginUser ? loginUser : '';
    let localToken = token ? token : '';
    if(!token){
      try {
        const { data } = await registerUser({
          variables: { user: variables },
        });
        console.log(data.register);
        dispatch(setId(data.register.user.id));
        user = data.register.user.id;
      } catch (error) {
        console.error(error);
      }
      try {
        const {data} = await login({
          variables: {credentials},
        });
        localToken = data?.login?.token;
        console.log(data.login);
      } catch (error) {
        console.error(error);
      }
    }
    try {
      console.log(user, barrel, pickUp, localToken);
      const { data } = await createLoan({
        variables: { user, barrel, pickUp },
        context: { headers: { Authorization: `Bearer ${localToken}` } },
      });
      console.log(data.createLoan);
      dispatch(clearBarrelId());
      navigate('/thanks');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {
        barrelIds ?
          <div>
            <List className={styles['baseBox']}>
              <div>
              {
                barrelIds.map((barrelId) => (
                  <ShoppingCartItem barrelId={barrelId}/>
                ))
              }
              <SummaryPerson />

              </div>
            </List>
            <Link to={"/productOffer"} className={styles['bottomField']}>
              <button className={styles['button1']}>
                <span className={styles['simpleText']}>Continue shopping</span>
              </button>
            </Link>
            <Link to={"/thanks"}>
              <button className={styles['button2']} onClick={handleSubmit}>
                <span className={styles['simpleText']}>Check out</span>
              </button>
            </Link>
          </div>
          : <p className={styles['question']}>No drinks selected</p>
      }
    </div>
  );
}

export default Summary;
