import React, {useState} from "react";
import styles from "./checkOut.module.css";
import {setUserName ,setUserEmail} from "../../Reducer/loanSlice";
import {useDispatch} from "react-redux";

interface handleInfo {
  handleInfo: () => void;
}

function PersonalInfo(handleInfo: handleInfo) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });

  const isEnabled = userInfo.name.length > 0 && userInfo.email.length > 0;
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlePerInfo = (event: React.FormEvent<HTMLFormElement>) => {
    dispatch(setUserName(userInfo.name));
    console.log(userInfo.name);
    dispatch(setUserEmail(userInfo.email));
    console.log(userInfo.email);
    handleInfo.handleInfo();
  }

  return (
    <div className={styles['perInfoForm']}>
      <form onSubmit={handlePerInfo}>
        <div>
          <p className={styles['formText']}>Name:</p>
        <label>
          <input type="text" name="name" value={userInfo.name} onChange={handleChange} className={styles['formLabel']}/>
        </label>
        </div>
        <div>
          <p className={styles['formText']}>email:</p>
        <label>
          <input type="text" name="email" value={userInfo.email} onChange={handleChange} className={styles['formLabel']}/>
        </label>
        </div>
        <a>
          <button type='submit' disabled={!isEnabled} className={styles['button']}>
            <span className={styles['simpleText']}>Submit</span>
          </button>
        </a>
      </form>
    </div>
  );
}

export default PersonalInfo;
