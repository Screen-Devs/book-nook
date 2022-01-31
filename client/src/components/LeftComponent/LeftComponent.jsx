import React from 'react';
import ReactDOM from 'react-dom';
import 'animate.css';
import QueueList from './BooksQueue/QueueList.jsx';
import CurrentList from './CurrentBooks/CurrentList.jsx';
import BooksRead from './BooksRead/BooksRead.jsx';
import BookClub from './BookClub/BookClub.jsx';
import Statistics from './Statistics/Statistics.jsx';

export default function LeftComponent({
  lists,
  removeFromQueue,
  removeFromCurrent,
  removeFromCompleted,
  removeFromBookClub,
  queueToCurrent,
  currentToCompleted,
  completedToBookClub,
  queue,
  current,
  completed,
  bookClub
}) {
  return (
    <div className='leftComponent animate__animated animate__fadeInDown'>
      <Statistics
        bookClub={bookClub}
        current={current}
        queue={queue}
        completed={completed}
        className='placeHolderContainerLeft animate__animated animate__fadeInLeft'/>
      <BookClub
        bookClub={bookClub}
        removeFromBookClub={removeFromBookClub}
        className='placeHolderContainerLeft animate__animated animate__fadeInLeft'
      />
      <CurrentList
        current={current}
        removeFromCurrent={removeFromCurrent}
        currentToCompleted={currentToCompleted}
        className='placeHolderContainerLeft animate__animated animate__fadeInLeft'
      />
      <QueueList
        queue={queue}
        removeFromQueue={removeFromQueue}
        queueToCurrent={queueToCurrent}
        className='placeHolderContainerLeft animate__animated animate__fadeInLeft'
      />
      <BooksRead
        completed={completed}
        removeFromCompleted={removeFromCompleted}
        completedToBookClub={completedToBookClub}
        className='placeHolderContainerLeft animate__animated animate__fadeInLeft'
      />
    </div>
  );
}
