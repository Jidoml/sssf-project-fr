import React from 'react';
import {selectToken, selectUserId} from "../../Reducer/authSlice";
import {useAppSelector} from "../../Reducer/hooks";


function UserDetail() {

  const token = useAppSelector(selectToken);
  const userID = useAppSelector(selectUserId);

  return (
    <div>
      <h1>User Detail</h1>
      <p>{userID}</p>
      <p>{token}</p>
    </div>
  );
}

export default UserDetail;
