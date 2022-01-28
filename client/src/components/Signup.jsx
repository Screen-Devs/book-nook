import React, { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import axios from "axios";

export default function Signup () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userExists, setUserExists] = useState(null);

  // TODO: finalize logic
  const handleSignup = (e) => {
    e.preventDefault();
    axios.post('/authenticate/signup', {
      username,
      password,
    })
      .then((response) => {
        console.log(response);
        if (response.data === 'exists') {
          console.log('test');
          setUserExists(true);

        }
      })
  }


  return (
    <>
      {userExists && (<Navigate to="/login" replace={true}/>)}
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" value={username} onChange={e => setUsername(e.target.value)} required></input>
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)}required></input>
        <button type="submit">Submit</button>
      </form>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
    </>
  )
}
