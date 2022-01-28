import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" required></input>
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" id="password" required></input>
        <input type="submit"></input>
      </form>
      <nav>
        <Link to="/signup">Signup</Link>
      </nav>
    </>
  )
}

export default Login;