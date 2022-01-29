import React from "react";
import ReactDOM from "react-dom"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Logout from "./Logout.jsx";

export default function Header({ authStatus, authenticate }) {
  return (
    <div className = "header" >
      <img alt="Book Nook logo" className="headerLogo" src="https://see.fontimg.com/api/renderfont4/eZ4dO/eyJyIjoiZnMiLCJoIjo0MCwidyI6MTAwMCwiZnMiOjQwLCJmZ2MiOiIjRkZGRUZFIiwiYmdjIjoiIzA4MDgwOCIsInQiOjF9/Qk9PSyBOT09L/goldleaf-bold-personal-use-bold.png"/>

      <div className="searchBar">
        <Form.Control
          type="password"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
          placeholder="Search for something..."
        />
      </div>
      <Logout authenticate={authenticate}/>
      <Button variant="light"> User's Image </Button>
    </div >
  );
}

      // < h1 className = "headerText" > Book Nook < /h1>