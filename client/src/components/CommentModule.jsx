import React from "react";
import ReactDOM from "react-dom";
import 'animate.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as timeago from 'timeago.js';

export default function CommentModule({ comment }) {
  console.log('lolool');
  return (
    <div className = "commentModule" >
      <Card className="text-center commentModuleBody">
        <Card.Header>{comment.commenter}</Card.Header>
        <Card.Body>
          <Card.Text>
            {comment.message}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted"><i>{timeago.format(comment.date)}</i></Card.Footer>
      </Card>
    </div >
  );
}






