import React from 'react';
import ReactDOM from 'react-dom';
import 'animate.css';
import UserLists from './UserLists.jsx';

export default function LeftComponent({
  currentLayout,
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

  let component;
  if (currentLayout === 'userLists') {
    component = <UserLists
      removeFromQueue={removeFromQueue}
      removeFromCurrent={removeFromCurrent}
      removeFromCompleted={removeFromCompleted}
      removeFromBookClub={removeFromBookClub}
      queueToCurrent={queueToCurrent}
      currentToCompleted={currentToCompleted}
      completedToBookClub={completedToBookClub}
      queue={queue}
      current={current}
      completed={completed}
      bookClub={bookClub}
    />;
  } else if (currentLayout === 'bookDetails') {
    component = <BookDetails />;
  }

  return (
    <div className='leftComponent animate__animated animate__fadeInDown'>
      {component};
    </div>
  );
}
