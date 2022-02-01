import React from "react";
import ReactDOM from "react-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Divider } from '@material-ui/core';
// import 'animate.css';
// import CommentModule from '../CommentModule.jsx';

export default function searchResult () {
  // console.log('Current User Data ', userData);
  return (
    // <div className="commentModule">
      <div className='aSearchResult'>
      <Card className="searchResultCard">

  <Card.Body >
    <Card.Header style={{fontWeight: 'bold', borderRadius:"20px", backgrounColor:''}}>TITLE</Card.Header>
    <Divider style={{borderWitdh: '0.05px', borderBottom: 'solid', }}/>
    <Card.Text className="searchResultText">
      <b>Author:</b> VAR
      </Card.Text>
      <Divider/>
      <Card.Text className="searchResultText">
      <b>Publisher: </b>VAR
      </Card.Text>
      <Card.Text className="searchResultText">
      <b>Genre:</b> VAR
      </Card.Text>
      <Card.Text className="searchResultText">
      <b>Published:</b> VAR
      </Card.Text>
      <Card.Text className="searchResultText">
      <b>Overview:</b> VAR
    </Card.Text>
    <Button variant="dark" style={{marginLeft: '134px'}}>Book Details</Button>
  </Card.Body>
</Card>
<div className="searchResultImageContainer" >
<img className="searchResultImage" src="https://www.kroger.com/product/images/large/front/0000000004132" />
        </div>
        </div>

  );
}
//         <div className="card mb-3" style="max-width: 540px;">
//   <div className="row g-0">
//     <div className="col-md-4">
//       <img src="..." className="img-fluid rounded-start" alt="...">
//     </div>
//     <div className="col-md-8">
//       <div className="card-body">
//         <h5 classNAme="card-title">Card title</h5>
//         <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//       </div>
//     </div>
//   </div>
// </div>