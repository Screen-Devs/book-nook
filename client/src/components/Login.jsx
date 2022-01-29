import React, { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import axios from "axios";
import { TextField, Grid, Paper, Button } from '@material-ui/core';

const gridStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100%',
};
// style={gridStyle}

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
};
// style={paperStyle}

const buttonStyle = {
  width: '97%',
  marginTop: 10,
  marginBottom: 13,
  marginLeft: '5px',
};

const textFieldStyle = {
  width: '97%',
  margin: '5px',
};

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
    <div className='loginBackground'>
      <div className="loginBox">
      <Grid style={gridStyle}>
        <Paper className="animate__animated animate__fadeInDown" style={paperStyle} elevation={12}>
          {authStatus && <Navigate to='/' replace={true} />}
          <div className="BNwhiteFontBackGround animate__animated animate__flipInY">
            <img className="BNwhiteFont" src="https://see.fontimg.com/api/renderfont4/eZ4dO/eyJyIjoiZnMiLCJoIjo1MSwidyI6MTAwMCwiZnMiOjUxLCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/Qk9PSyBOT09L/goldleaf-bold-personal-use-bold.png"/>
          </div>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <TextField
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={textFieldStyle}
              placeholder='Username'
              label='Username'
              type='text'
              required
            />
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={textFieldStyle}
              placeholder='Password'
              label='Password'
              type='password'
              required
            />
            <Button className="loginButton" type='submit' variant='contained' color='default' style={buttonStyle}>
              <b>Login</b>
            </Button>
          </form>
          <nav>
            <Link to='/signup'>Signup</Link>
          </nav>
        </Paper>
      </Grid>
      </div>
    </div>
  )
}
