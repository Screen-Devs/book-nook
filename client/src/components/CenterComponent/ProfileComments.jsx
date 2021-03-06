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
  handleSearchToResults,
  handleGetFriendData
}) {

  const [canvas, setCanvasList] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [showBtn, setRenderBtn] = useState(false)
  const { username } = userData[0];

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
    setRenderBtn(renderBtn);
  }, [userData])


  //TODO: Need to implement a way to add a comment
  let isFriend = false;
  if (currentFriends.includes(username)) {
    isFriend = true;
  }
  let onOwnPage = false;
  let myPage, writeMeHeader;
  if (username === currentUserData) {
    onOwnPage = true;
    myPage = 'My Book';
    writeMeHeader = 'Note to self...'
  }

  const sorter = (a,b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  };

  return (
    <>
      <div className="centerComponent">
        <div className="userDetails animate__animated animate__flipInX">
          <h5 className={isFriend ? 'friendTitle' : ''}>
            {onOwnPage ? myPage : username}</h5>
          <div>
            { (showBtn) && (
              <Button
                className='sideComponentTitle'
                variant='dark'
                onClick={() => {
                  addNewFriend();
                  setRenderBtn(false)}}
                >Add Friend
              </Button>
            )}
          </div>
        </div>

        <div className="writeMe animate__animated animate__flipInX">
          <h5 style={{ fontWeight: "bold" }}>
          { onOwnPage ? writeMeHeader : 'Write in my book...' }</h5>

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
              canvas.sort(sorter).map((comment, idx) => {
                return (
                  <CommentModule
                    key={idx}
                    comment={comment}
                    handleGetFriendData={handleGetFriendData}
                  />
                );
              })
            )}
        </div>
      </div>
    </>
  );
}
