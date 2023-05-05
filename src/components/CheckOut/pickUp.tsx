import React from "react";
import styles from "./checkOut.module.css";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useDispatch} from "react-redux";
import {setPickup} from "../../Reducer/loanSlice";

interface handlePickUp {
  handlePickUp: () => void;
}

function CheckOutPage({handlePickUp} : handlePickUp) {
  const [pickUp, setPickUp] = React.useState('');
  const dispatch = useDispatch();
  const handleChange = (event: SelectChangeEvent) => {
    setPickUp(event.target.value as string);
    dispatch(setPickup(event.target.value as string));
    handlePickUp();
  };

  return (
    <div className={styles['container']}>
    <p className={styles['question']}>Where would you like to get your order?</p>
  <FormControl className={styles['selectPick']}>
    <InputLabel id="select-label">Place</InputLabel>
    <Select
      labelId="select-label"
      id="simple-select"
      value={pickUp}
      label="PickUp"
      onChange={handleChange}
    >
      <MenuItem value={"Suvantokatu 7, 20540 Turku"}>Turku</MenuItem>
      <MenuItem value={'Aittatie 6, 00560 Helsinki'}>Helsinki</MenuItem>
      <MenuItem value={'Harjukatu 22, 70110 Oulu'}>Oulu</MenuItem>
      <MenuItem value={'Kuukkelitie 3, 96400 Rovaniemi'}>Rovaniemi</MenuItem>
    </Select>
  </FormControl>
    </div>
  )
}

export default CheckOutPage;
