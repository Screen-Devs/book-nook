import React, { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import axios from "axios";

export default function Login ({ authStatus, authenticate }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userExists, setUserExists] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('/authenticate/login', {
      username,
      password,
    })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.details)
        } else {
          setUserExists(true);
        }
      })
      .then(() => {
        authenticate();
      })
      .catch((error) => {
        console.error(error);
      })
  }

  return (
    <>
      {authStatus && (<Navigate to="/" replace={true}/>)}
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" value={username} onChange={e => setUsername(e.target.value)} required></input>
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required></input>
        <button type="submit">Submit</button>
      </form>
      <nav>
        <Link to="/signup">Signup</Link>
      </nav>
    </>
  )
}
