import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "animate.css";
import CommentModule from "../CommentModule.jsx";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { commentOnCanvas, getUser } from "../../requests";

export default function ProfileComments({
  userData,
  currentUserData,
  currentUserView,
  currentFriends,
  addNewFriend,
}) {

  const [canvas, setCanvasList] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [showBtn, setRenderBtn] = useState(false)
  const { username, friends, } = userData[0];

  const onInput = (e) => setCommentText(e.target.value);
  //  onInput = ({target:{commentText}}) => setCommentText(commentText),
  const onFormSubmit = (e) => {
    e.preventDefault();
    const username = currentUserView || currentUserData
    const comment = {
      username,
      message: commentText,
      commenter: currentUserData,
    };

    commentOnCanvas(comment)
      .then(({ acknowledged }) => {
        if (acknowledged) {
          getUser(username).then((user) => {
            setCanvasList(user[0].canvas.reverse());
          });
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const renderBtn = !(currentUserView === null) &&
    !(currentFriends.includes(currentUserView));
    setCanvasList(userData[0].canvas);
    setRenderBtn(renderBtn)
  }, [userData])

  //TODO: Need to implement a way to add a comment

  return (
    <>
      <div className="centerComponent">
        <div className="userDetails animate__animated animate__flipInX">
          <h5>User: {username}</h5>
          <div>
            {

              (showBtn) && (
                <a onClick={() => {
                  addNewFriend();
                  setRenderBtn(false);

                }}> Add Friend </a>
              )
            }
          </div>
        </div>

        <div className="writeMe animate__animated animate__flipInX">
          <h5 style={{ fontWeight: "bold" }}>Write in my book...</h5>

          <div style={{ alignSelf: "center" }}>
            <Form onSubmit={onFormSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  className="writeMeTextArea"
                  as="textarea"
                  onChange={onInput}
                  value={commentText}
                  placeholder="scribble scribble scribble..."
                  rows={5}
                />
              </Form.Group>
              <Button
                className="publishButton"
                type="submit"
                variant="dark"
                style={{ width: "100px", marginLeft: "230px" }}
              >
                Publish
              </Button>
            </Form>
          </div>
        </div>

        <div className="userBook animate__animated animate__flipInY">
          {
            (canvas.length) && (
              canvas.reverse().map((comment, idx) => {
                return (
                  <CommentModule
                    key={idx}
                    comment={comment}
                  />
                );
              })
            )}
        </div>
      </div>
    </>
  );
}
