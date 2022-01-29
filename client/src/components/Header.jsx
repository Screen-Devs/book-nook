import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Logout from './Logout.jsx';
import { Menu, MenuItem, IconButton } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

const buttonStyle = {
  borderRadius:'50%',
  height:40,
  width:40,
  background:'black',
  border:'black',
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
}

export default function Header({ authenticate }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className='header'>
      <img
        alt='Book Nook logo'
        className='headerLogo'
        src='https://see.fontimg.com/api/renderfont4/eZ4dO/eyJyIjoiZnMiLCJoIjo0MCwidyI6MTAwMCwiZnMiOjQwLCJmZ2MiOiIjRkZGRUZFIiwiYmdjIjoiIzA4MDgwOCIsInQiOjF9/Qk9PSyBOT09L/goldleaf-bold-personal-use-bold.png'
      />

      <div className='searchBar'>
        <Form.Control
          type='password'
          id='inputPassword5'
          aria-describedby='passwordHelpBlock'
          placeholder='Search for something...'
        />
      </div>
      <Button style={buttonStyle} onClick={handleMenu}>
        <AccountCircle />
      </Button>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <Logout authenticate={authenticate} />
      </Menu>
    </div>
  );
}

// < h1 className = "headerText" > Book Nook < /h1>
