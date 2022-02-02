import React from "react";
import ReactDOM from "react-dom";
import 'animate.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function CommentModule({ comment }) {
  console.log('Comment module ', comment)

  return (
    <div className = "commentModule" >
      <Card className="text-center commentModuleBody">
        <Card.Header>{comment.username}</Card.Header>
        <Card.Body>
          <Card.Text>
            {comment.message}
          </Card.Text>
          {/* <Button variant="dark">Button</Button> */}
        </Card.Body>
        <Card.Footer className="text-muted"><i>{comment.date}</i></Card.Footer>
      </Card>
    </div >
  );
}






