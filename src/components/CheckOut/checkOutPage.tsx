/**
 * Created by jindrichdolezal on 04.05.2023
 */

import React, {useState} from 'react';
import styles from "./checkOut.module.css";
import TopBar from "../topBar";
import {useAppSelector} from "../../Reducer/hooks";
import {selectToken} from "../../Reducer/authSlice";
import HowOrder from "./howOrder";
import PickUp from "./pickUp";
import PersonalInfo from "./personalInfo";
import Summary from "./summary";

function CheckOutPage() {
  let [guest, setGuest] = useState(false)
  let [pickUp, setPickUp] = useState(false)
  let [userInfo, setUserInfo] = useState(false)

  const token = useAppSelector(selectToken);

  const handleGuest = () => {
    setGuest(true);
  }
  const handlePickUp = () => {
    setPickUp(true);
    if(token) {
      setUserInfo(true);
    }
  }
  const handleUserInfo = () => {
    setUserInfo(true);
  }

  return (
    <div>
      <img
        src={require("../../Content/beer-background-ZC2QTEK-scaled.jpg")}
        alt="beerbackgroundZC2QTEKscaled1148"
        className={styles['beerbackground-zc2qt-kscaled1']}
      />
      <TopBar/>
      <div className={styles['containerList']}>
        {
          userInfo ?
            <Summary />
            :
            <div>
              { pickUp ?
                <div>
                  {
                    token ?
                      <div>
                      </div>
                      :
                      <PersonalInfo handleInfo={handleUserInfo}/>
                  }
                </div>
                :
                <div>
                  {
                    token ?
                      <PickUp handlePickUp={handlePickUp}/>
                      :
                      <p>
                        {
                          guest ? <PickUp handlePickUp={handlePickUp}/> : <HowOrder handleGuest={handleGuest}/>
                        }
                      </p>
                  }
                </div>
              }
            </div>
        }
        <p className={styles['mainText']}>Check Out error</p>
      </div>
    </div>
  );
}

export default CheckOutPage;
