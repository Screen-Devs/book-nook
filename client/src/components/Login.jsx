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

const paperStyle = {
  padding: 10,
  height: '27vh',
  width: 280,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
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
    <div className='background'>
      <Grid style={gridStyle}>
        <Paper style={paperStyle} elevation={12}>
          {authStatus && <Navigate to='/' replace={true} />}
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
            <Button type='submit' variant='contained' color='default' style={buttonStyle}>
              Login
            </Button>
          </form>
          <nav>
            <Link to='/signup'>Signup</Link>
          </nav>
        </Paper>
      </Grid>
    </div>
  )
}
