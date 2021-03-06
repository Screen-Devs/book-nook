import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import 'animate.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as timeago from 'timeago.js';
import styled from 'styled-components';

const User = styled.div`
  &:hover {
    color: grey;
    cursor: pointer;
`;

export default function CommentModule({ comment, handleGetFriendData }) {
  return (
    <div className='commentModule'>
      <Card className='text-center commentModuleBody'>
        <Card.Header>
          <Link
          to={`../friend/${comment.commenter}`}
          className='link'>
            <User className='link' onClick={()=>{
              handleGetFriendData(comment.commenter)
            }}>{comment.commenter}</User>
          </Link>
        </Card.Header>
        <Card.Body>
          <Card.Text>{comment.message}</Card.Text>
        </Card.Body>
        <Card.Footer className='text-muted'>
          <i>{timeago.format(comment.date)}</i>
        </Card.Footer>
      </Card>
    </div>
  );
}

//
