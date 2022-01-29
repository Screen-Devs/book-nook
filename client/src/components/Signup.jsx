import React, { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import axios from "axios";

export default function Signup ({ authStatus }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userSaved, setUserSaved] = useState(null);

  const handleSignup = (e) => {
    e.preventDefault();
    axios.post('/authenticate/signup', {
      username,
      password,
    })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.details)
        } else {
          setUserSaved(true);
        }
      })
      .catch((error) => {
        console.error(error);
      })
  }


  return (
    <>
      {userSaved && (<Navigate to="/login" replace={true}/>)}
      {authStatus && (<Navigate to="/" replace={true}/>)}
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" value={username} onChange={e => setUsername(e.target.value)} required></input>
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required></input>
        <button type="submit">Submit</button>
      </form>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
    </>
  )
}
