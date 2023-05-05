import React from 'react';
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
import CheckOutPage from "./components/CheckOut/checkOutPage";
import Thanks from "./components/Thanks/thanks";
import WhyCraftBeer from "./components/WhyCraftBeer/whyCraftBeer";

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
      <Route path="/whyCraftBeer" element={<WhyCraftBeer />}/>

      <Route path="/login" element={<Login  onLogin={handleLogin}/>} />

      <Route path="/register" element={<Register />} />

      <Route path="/user" element={<UserDetail />} />

      <Route path="/productOffer" element={<DrinkList />} />
      <Route path="/productOffer/:drinkId" element={<BarrelList />} />

      <Route path="/shoppingCart" element={<ShoppingCart />} />

      <Route path="/checkOut" element={<CheckOutPage />} />
      <Route path="/thanks" element={<Thanks />} />
    </Routes>
  </Router>
  );
}

export default App;
