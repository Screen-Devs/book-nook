import React, { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import axios from "axios";
import { TextField, Grid, Paper, Button, Container } from '@material-ui/core';

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
    <div className='background'>
      <Grid style={gridStyle}>
        <Paper style={paperStyle} elevation={12}>
          {userSaved && <Navigate to='/login' replace={true} />}
          {authStatus && <Navigate to='/home' replace={true} />}
          <h2>Signup</h2>
          <form onSubmit={handleSignup}>
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
              Signup
            </Button>
          </form>
          <nav>
            <Link to='/login'>Login</Link>
          </nav>
        </Paper>
      </Grid>
    </div>
  )
}
