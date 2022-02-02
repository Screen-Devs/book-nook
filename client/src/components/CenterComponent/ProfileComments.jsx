import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import 'animate.css';
import CommentModule from '../CommentModule.jsx';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { commentOnCanvas } from '../../requests'


export default function ProfileComments ({ userData, currentUserData, currentUserView}) {
  const [canvas, setCanvasList] = useState([]);
  const [commentText, setCommentText] = useState();
  // onFormSubmit = e => {
    //   e.preventDefault()
    //   console.log(commentText)
    //   setCommentText()
    // }

    const onInput = (e) => setCommentText(e.target.value);
    //  onInput = ({target:{commentText}}) => setCommentText(commentText),
    const onFormSubmit = (e) => {
      e.preventDefault()
      const username = currentUserView || currentUserData;
      const comment = {
        username,
        message: commentText,
        commenter: currentUserData,
      }
      console.log(comment)
      commentOnCanvas(comment)
      .then(res => console.log(res,'comment'))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    setCanvasList(userData[0].canvas);
  }, userData)



  //TODO: Need to implement a way to add a comment

  return (
    <>
      <div className = "centerComponent" >
      <div className="userDetails animate__animated animate__flipInX"><h5>User: {userData[0].username}</h5></div>


      <div className="writeMe animate__animated animate__flipInX">
        <h5 style={{fontWeight: 'bold',}}>Write in my book...</h5>

        <div style={{alignSelf: 'center'}}>
          <Form onSubmit={onFormSubmit} >
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control className="writeMeTextArea" as="textarea" onChange={onInput} value={commentText} placeholder="scribble scribble scribble..." rows={5} />
            </Form.Group>
      <Button className="publishButton" type="submit" variant="dark" style={{width: '100px', marginLeft: '230px'}}>Publish</Button>
          </Form>
        </div>
        </div>


      <div className="userBook animate__animated animate__flipInY">
        {canvas.length === 0 ? <CommentModule body="No comments :(" /> :
        canvas.map((comment) => {
          return <CommentModule username={comment.username} body={comment.comment}/>
        })}
      </div>
    </div >
    </>
  );
}
