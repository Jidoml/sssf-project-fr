import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import Login from "./components/Login/Login";
import DrinkList from "./components/DrinkList/DrinkList";
import BarrelList from "./components/BarrelList/BarrelList";
import ShoppingCart from "./components/ShoppingBag/shoppingCart";
import { setToken, setId} from './Reducer/authSlice';
import UserDetail from "./components/UserInformation/UserDetail";
import {useAppDispatch} from "./Reducer/hooks";
import Register from "./components/Register/Register";
import styles from "./components/Home/home.module.css";
import TopBar from "./components/topBar";

function App() {
  const dispatch = useAppDispatch();

  const handleLogin = (token: string, userId: string) => {
    dispatch(setToken(token));
    dispatch(setId(userId));
  };

  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>

      <Route path="/login" element={<Login  onLogin={handleLogin}/>} />

      <Route path="/register" element={<Register />} />

      <Route path="/user" element={<UserDetail />} />

      <Route path="/productOffer" element={<DrinkList />} />
      <Route path="/productOffer/:drinkId" element={<BarrelList />} />

      <Route path="/shoppingCart" element={<ShoppingCart />} />
    </Routes>
  </Router>
  );
}

export default App;
