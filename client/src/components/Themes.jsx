import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom"
import { ThemeContext, themes } from '../contexts/ThemeContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';





export default function Themes(props ) {
  const [theme, setTheme] = useState(themes.light);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add('white-content');
        break;
      case themes.dark:
      default:
        document.body.classList.remove('white-content');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

      // < h1 className = "headerText" > Book Nook < /h1>