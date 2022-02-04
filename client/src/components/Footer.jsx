import { Card, Link } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom"
// import "/Users/haydennharper/HackReactor/Blue/book-nook/client/src/images/mediumLogo.png"
import styled from 'styled-components'

const Wrapper = styled.div`
  font-size: 15px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;
`
const devs = [
  {
    name: 'S. Beddow,',
    linkedIn: "https://www.linkedin.com/in/samuel-r-r-beddow/"
  },
  {
    name: 'A. Carnero,',
    linkedIn: "https://www.linkedin.com/in/andrew-carnero/"
  },
  {
    name: 'H. Harper,',
    linkedIn: "https://www.linkedin.com/in/haydenn-harper/"
  },
  {
    name: 'B. Ramirez,',
    linkedIn: "https://www.linkedin.com/in/brynrmrz/"
  },
  {
    name: 'M. Raquepo,',
    linkedIn: "https://www.linkedin.com/in/matthew-raquepo/"
  },
  {
    name: 'K. Sheng',
    linkedIn: "https://www.linkedin.com/in/kevin-c-sheng/"
  }
        ]

export default function Footer() {

  return (
    <div className = "footer">
      <Card>
      <Wrapper>
        Developed by
        {devs.map((dev) => {
          console.log(dev.linkedIn)
          return <a target="_blank" style={{padding: 3, textDecoration: 'none'}} href={dev.linkedIn}>{dev.name}</a>
        })}
      </Wrapper>
      </Card>
    </div>
  );
}