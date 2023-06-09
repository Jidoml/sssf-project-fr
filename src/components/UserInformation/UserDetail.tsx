import React from 'react';
import {selectToken, selectUserId} from "../../Reducer/authSlice";
import {useAppSelector} from "../../Reducer/hooks";
import styles from "../CheckOut/checkOut.module.css";
import {Link} from "react-router-dom";
import LoanTable from "./loanTable";
import TopBar from "../topBar";


function UserDetail() {

  const token = useAppSelector(selectToken);
  const userID = useAppSelector(selectUserId);

  return (
    <div>
      <TopBar/>
      <h1>User Detail</h1>
      <p>{userID}</p>
      <p>{token}</p>
      <div className={styles['baseBox']}>
        <LoanTable />
      </div>
      <Link to={"/"}>
        <button className={styles['button1']}>
          <span className={styles['simpleText']}>Home</span>
        </button>
      </Link>
    </div>
  );
}

export default UserDetail;
