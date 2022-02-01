import React, { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import axios from "axios";
import { TextField, Grid, Paper, Container } from '@material-ui/core';
import 'animate.css';
import Button from 'react-bootstrap/Button';


const gridStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100%',
};

const paperStyle = {
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

const buttonStyle = {
  width: '100%',
  marginTop: 5,
  marginBottom: 13,
};

const textFieldStyle = {
  width: '100%',
  margin: 2,
};

export default function Signup ({ authStatus, currentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userSaved, setUserSaved] = useState(null);
  const [loading, loaded] = useState("loginBackground");


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

  const wasLoaded = () => {
    if (loading === "loginBackground") {
      loaded("loginBackgroundTransition")
        }
  };


  return (
    // <div className='background'>
      <div className={loading} onLoad={wasLoaded()}>
      <Grid className="loginGridStyle">
        <div  className='loginBlogoBackground animate__animated animate__fadeIn'>
        </div>
        </Grid>

      <Grid className="loginGridStyle">
        <Paper className="animate__animated animate__lightSpeedInLeft" style={paperStyle} elevation={12}>
          {userSaved && <Navigate to='/login' replace={true} />}
          {authStatus && currentUser && <Navigate to={`/home/${currentUser}`} replace={true} />}
          <div className="BNwhiteFontBackGround animate__animated animate__flipInY">
            <img className="BNwhiteFont"  src="https://see.fontimg.com/api/renderfont4/eZ4dO/eyJyIjoiZnMiLCJoIjo1MSwidyI6MTAwMCwiZnMiOjUxLCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/Qk9PSyBOT09L/goldleaf-bold-personal-use-bold.png"/>
          </div>
          <div style={{marginBottom: '20px'}}></div>
          <form onSubmit={handleSignup}>
            <TextField
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={textFieldStyle}
              placeholder='Username'
              label='Username'
              type='text'
              required
              className="textFieldStyle"
            />

            <div style={{marginBottom: '10px'}}></div>

            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={textFieldStyle}
              placeholder='Password'
              label='Password'
              type='password'
              required
              className="textFieldStyle"
              style={{width: '340px'}}
            />
            <div style={{marginBottom: '20px'}}></div>
            <Button className="sideComponentTitle"  type='submit' variant='dark' style={{marginLeft: '125px'}}>
              Sign Up
            </Button>
          </form>
          <div style={{margin: '5px'}}></div>
          <nav>
            <Link to='/login' className="link" style={{marginLeft: '3px'}}>Back To Login</Link>
          </nav>
        </Paper>
      </Grid>
    </div>
  )
}
