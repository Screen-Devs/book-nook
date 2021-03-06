import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import {authenticateUser} from "../requests";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";


// import Dark from "../stylesDark.css";
import Light from "../styles.css";

export default function App() {

  const [authStatus, setAuthStatus] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  // if user is not authenticated, redirect to login
  useEffect(() => {
    authenticate();
  }, [])

  const authenticate = () => {
    authenticateUser()
      .then((response) => {
        setAuthStatus(response.isAuthenticated);
        setCurrentUser(response.username);
      })
      .catch(error => console.error(error));

  }


  return(
    <div className="App">
      <Routes>
        <Route path={`/home/${currentUser}/*`} element={<Home authenticate={authenticate} authStatus={authStatus} currentUser={currentUser}/>} />
        <Route path="/login" element={<Login authenticate={authenticate} authStatus={authStatus} currentUser={currentUser}/>} />
        <Route path="/signup" element={<Signup authStatus={authStatus} currentUser={currentUser}/>} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
