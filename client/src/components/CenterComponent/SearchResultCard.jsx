import React from "react";
import ReactDOM from "react-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Divider } from '@material-ui/core';
// import 'animate.css';
// import CommentModule from '../CommentModule.jsx';

export default function searchResult ({book}) {
  const info = book.volumeInfo

  let image = info.imageLinks || 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'

  return (
      <div className='bookSearchCard' style={{backgroundColor:"#212529", borderRadius:"20px", margin:'20px 10px 20px 10px'}}>
        <div className="bookSearchHeader" style={{fontWeight: 'bold', borderRadius:"20px 20px 0px 0px", backgroundColor:'#212529', color: 'white', padding:'10px' }}><h3>{info.title}</h3></div>
        {/* <div style={{display:'flex', flexDirection:'row',}}> */}
        <div className="bookSearchImage" style={{backgroundColor:'#212529', borderRadius:"0px 0px 0px 20px", padding:'0px 5px 0px 5px' }}>
          <img src={image.thumbnail} style={{borderRadius:'20px',}}/>
        </div>
          <div className="bookSearchOverview" style={{padding:'10px', borderRadius:'20px 20px 0px 0px', backgroundColor:'white',}}>
            <div className="hideScroll" style={{overflow:'auto', height:'290px'}}>
          <b>Overview:</b> {info.description}<br/>
          </div>
          </div>
        <div className="bookSearchDetails hideScroll" style={{display:'flex', flexDirection:'column', overflow:'scroll', backgroundColor:"#212529", color:'white', borderRadius:"0px 0px 20px 0px", padding:'10px',}}>
        <b>Author:</b> {info.authors[0]}<p/>
        <b>Publisher: </b>{info.publisher}<p/>
            <b>Genre:</b> {(info.categories) ? info.categories[0] : null }<p/>
            <b>Published:</b> {info.publishedDate}<p/>
            </div>
            {/* </div> */}
      </div>
  );
}

{/* <Button variant="dark" style={{marginLeft: '134px'}}>Book Details</Button> */}

// style={{display:'flex', flexDirection:'column',}}
//style={{display:'flex', flexDirection:'column',}}




//className="searchResultImage"

