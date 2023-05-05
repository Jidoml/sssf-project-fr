import React, { useState } from 'react';
import {gql, useMutation} from '@apollo/client';
import {useNavigate} from "react-router-dom";
import styles from '../Login/login.module.css';

export const REGISTER = gql`
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

interface RegisterVariables {
  user: Variables;
}
interface RegisterUserResponse {
  token: string;
  message: string;
  user: {
    email: string;
    id: string;
    username: string;
  };
}

interface RegisterData {
  register: RegisterUserResponse;
}

function RegisterForm() {
  const navigate = useNavigate();
  const [variables, setVariables] = useState<Variables>({
    username: '',
    email: '',
    password: '',
  });

  const [registerUser, { loading, error, data }] = useMutation<
    RegisterData,
    RegisterVariables
  >(REGISTER);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { data } = await registerUser({
        variables: { user: variables },
      });
      navigate('/login');
      console.log(data?.register);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setVariables((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div  className={styles['perInfoForm']}>
    <form onSubmit={handleSubmit}>
      <div>
        <p className={styles['formText']}>Username</p>
        <label htmlFor="username">
        <input type="text" id="username" name="username" value={variables.username} onChange={handleChange}  className={styles['formLabel']}/>
        </label>
      </div>
      <div>
        <p className={styles['formText']}>Email</p>
        <label htmlFor="email">
          <input type="email" id="email" name="email" value={variables.email} onChange={handleChange}  className={styles['formLabel']}/>
        </label>
      </div>
      <div>
        <p className={styles['formText']}>Password</p>
        <label htmlFor="password">
          <input type="password" id="password" name="password" value={variables.password} onChange={handleChange}  className={styles['formLabel']}/>
        </label>
      </div>
      <button type="submit" disabled={loading} className={styles['button']}>
        {loading ? 'Loading...' : 'Register'}
      </button>
      {error && <p>{error.message}</p>}
    </form>
    </div>
  );
}

export default RegisterForm;
