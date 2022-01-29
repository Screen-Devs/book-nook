import React from 'react';

export const TabPanel = (props) => {
  const {children, value, index} = props;

  return(
    <div>
      {value === index && (
        <h1>{children}</h1>
      )}
    </div>
  )
}
