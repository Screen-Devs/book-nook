import React from 'react';
import ReactDOM from 'react-dom';
import 'animate.css';
import UserLists from './UserLists.jsx';
import BookDetailsLeftComponent from './BookDetailsLeftComponent.jsx';


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
  bookClub,
  goToReviews,
  set,
  currentView,
  handleSingleBookSearch,
}) {

  let component;
  if (currentLayout === 'userLists') {
    component = (
      <div className='leftComponent animate__animated animate__fadeInTopLeft'>
        <UserLists
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
          goToReviews={goToReviews}
          currentView={currentView}
          handleSingleBookSearch={handleSingleBookSearch}
        />
      </div>
    )
  }
  // TODO: remove if left component will always be user lists
  // else if (currentLayout === 'bookDetails') {
  //   component = (
  //     <div className='leftComponentBookDetails animate__animated animate__fadeInDown'>
  //       <BookDetailsLeftComponent
  //         removeFromQueue={removeFromQueue}
  //         removeFromCurrent={removeFromCurrent}
  //         removeFromCompleted={removeFromCompleted}
  //         removeFromBookClub={removeFromBookClub}
  //         queueToCurrent={queueToCurrent}
  //         currentToCompleted={currentToCompleted}
  //         completedToBookClub={completedToBookClub}
  //         queue={queue}
  //         current={current}
  //         completed={completed}
  //         bookClub={bookClub}
  //         goToReviews={goToReviews}
  //         set={set}
  //       />
  //     </div>
  //   )
  // }

  return (
    // <div className='leftComponent animate__animated animate__fadeInDown'>
    <>
      {component}
    </>
  );
}


// component =
//     <div className='leftComponentBookDetails animate__animated animate__fadeInDown'>
//     <BookDetailsLeftComponent
//     removeFromQueue={removeFromQueue}
//       removeFromCurrent={removeFromCurrent}
//       removeFromCompleted={removeFromCompleted}
//       removeFromBookClub={removeFromBookClub}
//       queueToCurrent={queueToCurrent}
//       currentToCompleted={currentToCompleted}
//       completedToBookClub={completedToBookClub}
//       queue={queue}
//       current={current}
//       completed={completed}
//       bookClub={bookClub}
//       goToReviews={goToReviews}
//       set={set}
//     />
//     </div>