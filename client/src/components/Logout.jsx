import React from "react";
import axios from "axios";

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
      <button type="submit" onClick={handleLogout}>Logout</button>
    </>
  )
}
