import React, {useState} from 'react'
import styles from './login.module.css'
import {Link, useNavigate} from "react-router-dom";
import gql from "graphql-tag";
import User from "../../interfaces/User";
import {useMutation} from "@apollo/client";
import {setId, setToken} from "../../Reducer/authSlice";

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
`

interface LoginFormProps {
  onLogin: (token: string, userId: string) => void;
}

interface Credentials {
  username: string
  password: string
}

interface TokenMessage {
  token: string
  message: string
  user: User
}

interface LoginData {
  login: TokenMessage
}

function Login({ onLogin }: LoginFormProps) {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<Credentials>({
    username: '',
    password: '',
  })

  const [login, { loading, error }] = useMutation<LoginData>(LOGIN_MUTATION)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { credentials },
      });
      const token = data?.login?.token;
      const userId = data?.login?.user.id;
      if (token && userId) {
        setToken(token);
        setId(userId);
        onLogin(token, userId);
        navigate('/user');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles['container']}>
      <div className={styles['login']}>
        <img
          src={require("../../Content/beer-background-ZC2QTEK-scaled.jpg")}
          alt="beerbackgroundZC2QTEKscaled115"
          className={styles['beerbackground-zc2qt-kscaled1']}
        />
        <span className={styles['text']}>
            <span>sing in</span>
          </span>
        <div className={styles["rectangle1"]}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Log in'}
          </button>
          {error && <p>{error.message}</p>}
        </form>
        </div>
        <Link to={'/register'} className={styles['text']}>
          <span>Register</span>
        </Link>
      </div>
    </div>
  )
}

export default Login
