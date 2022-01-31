import React from 'react';
import ReactDOM from 'react-dom';
import 'animate.css';
import QueueList from './BooksQueue/QueueList.jsx';
import CurrentList from './CurrentBooks/CurrentList.jsx';
import BooksRead from './BooksRead/BooksRead.jsx';
import BookClub from './BookClub/BookClub.jsx';

export default function LeftComponent({
  lists,
  removeFromQueue,
  removeFromCurrent,
  removeFromCompleted,
  removeFromBookClub,
  queueToCurrent,
  currentToCompleted,
  completedToBookClub,
}) {
  return (
    <div className='leftComponent animate__animated animate__fadeInDown'>
      <div className='placeHolderContainerLeft animate__animated animate__fadeInLeft'>
        Statistics
      </div>
      <BookClub
        lists={lists}
        removeFromBookClub={removeFromBookClub}
        className='placeHolderContainerLeft animate__animated animate__fadeInLeft'
      />
      <CurrentList
        lists={lists}
        removeFromCurrent={removeFromCurrent}
        currentToCompleted={currentToCompleted}
        className='placeHolderContainerLeft animate__animated animate__fadeInLeft'
      />
      <QueueList
        lists={lists}
        removeFromQueue={removeFromQueue}
        queueToCurrent={queueToCurrent}
        className='placeHolderContainerLeft animate__animated animate__fadeInLeft'
      />
      <BooksRead
        lists={lists}
        removeFromCompleted={removeFromCompleted}
        completedToBookClub={completedToBookClub}
        className='placeHolderContainerLeft animate__animated animate__fadeInLeft'
      />
    </div>
  );
}
