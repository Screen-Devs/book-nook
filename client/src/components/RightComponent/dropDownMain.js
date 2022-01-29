import React from "react";
import ReactDOM from "react-dom";

const dropDownButton = [ <
    div > {
      [DropdownButton, SplitButton].map((DropdownType, idx) => ( <
        DropdownType as = {
          ButtonGroup
        }
        key = {
          idx
        }
        id = {
          `dropdown-button-drop-${idx}`
        }
        size = "sm"
        variant = "secondary"
        title = "Drop small" >
        <
        Dropdown.Item eventKey = "1" > Action < /Dropdown.Item> <
        Dropdown.Item eventKey = "2" > Another action < /Dropdown.Item> <
        Dropdown.Item eventKey = "3" > Something
        else here < /Dropdown.Item> <
        Dropdown.Divider / >
        <
        Dropdown.Item eventKey = "4" > Separated link < /Dropdown.Item> < /
        DropdownType >
      ))
    } <
    /div>]