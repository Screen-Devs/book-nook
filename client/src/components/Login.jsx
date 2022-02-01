import React, { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import axios from "axios";
import { TextField, Grid, Paper } from '@material-ui/core';
import 'animate.css';
import Button from 'react-bootstrap/Button';




const paperStyle2 = {
  // padding: 10,
  height: '390px',
  width: '380px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '5px',
  border: 'solid',
  borderRadius: '20%',
  zIndex: '1',
  position: 'fixed',
  boxShadow: "0px 0px 32px 8px #000000",
  // borderStyle: "outset",
};

// const buttonStyle = {
//   width: '350px',
//   margin: '14px 9.5px 15px 9.5px',
// };

// const textFieldStyle = {
//   width: '350px',
//   margin: '4px 9.5px 0px 9.5px',
// };



export default function Login ({ authStatus, authenticate, currentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userExists, setUserExists] = useState(null);
  const [loading, loaded] = useState("loginBackground");

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
        loaded('it is loaded');
      })
  }

  const wasLoaded = () => {
    if (loading === "loginBackground") {
      loaded("loginBackgroundTransition")
        }
  };


  return (
    <div className={loading} onLoad={wasLoaded()}>
      <Grid className="loginGridStyle">
        <div  className='loginBlogoBackground animate__animated animate__fadeIn'>
        </div>
      </Grid>


      <Grid className="loginGridStyle">
        <Paper className="animate__animated animate__fadeInDown" style={paperStyle2} elevation={12}>
          {authStatus && currentUser && <Navigate to={`/home/${currentUser}`} replace={true} />}
          <div className="BNwhiteFontBackGround animate__animated animate__flipInY">
            <img className="BNwhiteFont" src="https://see.fontimg.com/api/renderfont4/eZ4dO/eyJyIjoiZnMiLCJoIjo1MSwidyI6MTAwMCwiZnMiOjUxLCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/Qk9PSyBOT09L/goldleaf-bold-personal-use-bold.png"/>
          </div>
          <div style={{marginBottom: '20px'}}></div>
          <form onSubmit={handleLogin}>
            <TextField
              className="textFieldStyle"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Username'
              label='Username'
              type='text'
              required
            />
            <div style={{marginBottom: '10px'}}></div>
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              label='Password'
              type='password'
              required
              className="textFieldStyle"
            />
            <div style={{marginBottom: '20px'}}></div>

            <Button className="sideComponentTitle"  type='submit' variant='dark' style={{marginLeft: '140px'}}>
              Login
            </Button>
          </form>
          <div style={{margin: '5px'}}></div>
          <nav>
            <Link to='/signup' className="link" style={{marginLeft: '3px'}}>Signup</Link>
          </nav>
        </Paper>
      </Grid>
      </div>
  )
}
