import React from "react";
import ReactDOM from "react-dom";
import 'animate.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function CommentModule() {
  return (
    <div className = "commentModule" >
      <Card className="text-center commentModuleBody">
  <Card.Header><b>USER NAME</b></Card.Header>
  <Card.Body>
    <Card.Text>
      This is my lovely comment. For my lovely friend. I say lovely things about you and books. And now I will say this again.
      This is my lovely comment. For my lovely friend. I say lovely things about you and books. And now I will say this again.
      This is my lovely comment. For my lovely friend. I say lovely things about you and books. And now I am finished.
    </Card.Text>
    <Button variant="dark">Button</Button>
  </Card.Body>
  <Card.Footer className="text-muted"><i>2 days ago</i></Card.Footer>
</Card>
    </div >
  );
}






