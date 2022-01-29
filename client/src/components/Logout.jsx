import React from "react";
import axios from "axios";
import { MenuItem } from "@material-ui/core";

export default function Logout ({ authenticate }) {

  const handleLogout = (e) => {
    e.preventDefault();
    axios.post('/authenticate/logout', {})
      .then((response) => {
        authenticate();
      })
      .catch((error) => {
        console.error(error);
      })
  }

  return (
    <>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </>
  )
}
