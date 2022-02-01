import React from "react";
import ReactDOM from "react-dom";
import 'animate.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function CommentModule({ username = 'Find a friend!', body, time }) {
  return (
    <div className = "commentModule" >
      <Card className="text-center commentModuleBody">
        <Card.Header><b>{username}</b></Card.Header>
        <Card.Body>
          <Card.Text>
            {body}
          </Card.Text>
          <Button variant="dark">Button</Button>
        </Card.Body>
        <Card.Footer className="text-muted"><i>2 days ago</i></Card.Footer>
      </Card>
    </div >
  );
}






