import React from "react";
import ReactDOM from "react-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Divider } from '@material-ui/core';
import styled from "styled-components";
import * as timeago from 'timeago.js';
// import 'animate.css';
// import CommentModule from '../CommentModule.jsx';

export default function searchResult({ book, goToReviews, handleSearchToResults }) {

  const hdleSearchToResults = () => {
    handleSearchToResults(book)
  }

  const info = book.volumeInfo

  let image = info.imageLinks

  const Image = styled.img`
    max-height: 192px;
    max-width: 128px;
    border-radius: 20px;
  `

  const setToReviews = () => {
    hdleSearchToResults()
    goToReviews(book.id)
  }

  return (
    <div className='bookSearchCard' style={{ backgroundColor: "#212529", borderRadius: "20px", margin: '20px 10px 20px 10px' }}>
      <div className="bookSearchHeader" style={{ fontWeight: 'bold', borderRadius: "20px 20px 0px 0px", backgroundColor: '#212529', color: 'white', padding: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <h3>{info.title}</h3>
        <Button className="sideComponentTitle" variant="dark" onClick={setToReviews} style={{ borderRadius: '20px', }}>Book Details</Button>
      </div>
      {/* <div style={{display:'flex', flexDirection:'row',}}> */}
      <div className="bookSearchImage" style={{ backgroundColor: '#212529', borderRadius: "0px 0px 0px 20px", padding: '0px 5px 0px 5px' }}>
        <div className="bookSearchCover" onClick={setToReviews}>
          {(image) ?
            <img src={image.thumbnail} style={{ borderRadius: '20px' }} /> : <Image src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' />
          }
        </div>
      </div>
      <div className="bookSearchOverview" style={{ padding: '10px', borderRadius: '20px 20px 0px 0px', backgroundColor: 'white', }}>
        <div className="hideScroll" style={{ overflow: 'auto', height: '290px' }}>
          <b>Overview:</b> {info.description ? info.description : null}<br />
        </div>
      </div>
      <div className="bookSearchDetails hideScroll" style={{ display: 'flex', flexDirection: 'column', overflow: 'scroll', backgroundColor: "#212529", color: 'white', borderRadius: "0px 0px 20px 0px", padding: '10px', }}>
        <b>Author:</b> {info.authors ? info.authors.join(', ') : null }<p />
        <b>Publisher: </b>{info.publisher ? info.publisher : null }<p />
        <b>Genre:</b> {info.categories ? info.categories.join(', ') : null }<p />
        <b>Published:</b> {info.publishedDate ? info.publishedDate : null}<p />
      </div>
      {/* </div> */}
    </div>
  );
}



