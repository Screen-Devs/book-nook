import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'animate.css';
import Logout from './Logout.jsx';
import {
  Menu,
  MenuItem,
  IconButton,
  TextField,
  Button,
  Paper,
  InputBase,
  Divider,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';

const buttonStyle = {
  background: 'grey',
  border: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const paperStyle = {
  p: '2px 4px',
  display: 'flex',
  alignItems: 'center',
  width: 400,
  left: 500,
};

const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 8px;
`;

export default function Header({ authenticate, handleSearch }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentBook, setCurrentBook] = useState('');
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(currentBook);
  };

  return (
      <div className='header animate__animated animate__swing'>
        <Left>
          <Link to='/home'><img
            alt='Book Nook logo'
            className='headerLogo'
            src='https://see.fontimg.com/api/renderfont4/eZ4dO/eyJyIjoiZnMiLCJoIjo0MCwidyI6MTAwMCwiZnMiOjQwLCJmZ2MiOiIjRkZGRUZFIiwiYmdjIjoiIzA4MDgwOCIsInQiOjF9/Qk9PSyBOT09L/goldleaf-bold-personal-use-bold.png'
          /></Link>
        </Left>
        <Center>
          <Paper component='form' style={paperStyle} elevation={24} onSubmit={handleSubmit}>
            <InputBase
              style={{ marginLeft: '10px', flex: 1 }}
              placeholder='Search'
              value={currentBook}
              onChange={(e) => setCurrentBook(e.target.value)}
            />
            <Divider style={{ height: 28, m: 0.5 }} orientation='vertical' />
            <IconButton type='submit' style={{ p: '10px' }}>
              <SearchIcon />
            </IconButton>
          </Paper>
        </Center>
        <Right>
          <Button style={buttonStyle} onClick={handleMenu}>
            <AccountCircleIcon style={{ color: 'white' }} />
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
        </Right>
      </div>
  );
}
