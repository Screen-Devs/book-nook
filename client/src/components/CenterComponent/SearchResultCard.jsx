import React from "react";
import ReactDOM from "react-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Divider } from '@material-ui/core';
// import 'animate.css';
// import CommentModule from '../CommentModule.jsx';

export default function searchResult ({book, goToReviews, handleSearchToResults}) {

  const hdleSearchToResults = () => {
    handleSearchToResults(book)
  }

  const info = book.volumeInfo

  let image = info.imageLinks

  const setToReviews = () => {
    hdleSearchToResults()
    goToReviews()
  }

  return (
    // <div className="commentModule">
      <div className='aSearchResult'>
      <Card className="searchResultCard">
        <Card.Body >
          <Card.Header style={{fontWeight: 'bold', borderRadius:"20px", backgrounColor:''}}>{info.title}</Card.Header>
          <Divider style={{borderWitdh: '0.05px', borderBottom: 'solid', }}/>
          <Card.Text className="searchResultText">
            <b>Author:</b> {info.authors ? info.authors.join(', ') : null}
          </Card.Text>
          <Divider/>
          <Card.Text className="searchResultText">
            <b>Publisher: </b>{info.publisher ? info.publisher : null}
          </Card.Text>
          <Card.Text className="searchResultText">
            <b>Genre:</b> {info.categories ? info.categories.join(', ') : null }
          </Card.Text>
          <Card.Text className="searchResultText">
            <b>Published:</b> {info.publishedDate ? info.publishedData : null}
          </Card.Text>
          <Card.Text className="searchResultText">
            <b>Overview:</b> {info.description ? info.description : null}
          </Card.Text>
          <Button variant="dark" style={{marginLeft: '134px'}}>Book Details</Button>
        </Card.Body>
      </Card>
      <div className="searchResultImageContainer" >
        <img className="searchResultImage"  src={image.thumbnail}/>
      </div>
    </div>
  );
}
