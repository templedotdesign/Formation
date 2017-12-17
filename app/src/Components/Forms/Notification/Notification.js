import React from 'react';

import classes from './Notification.css';

const notification = (props) => {
  let attachedClasses = [classes.Notification];
  if(props.success) {
    attachedClasses.push(classes.Green)
  } else {
    attachedClasses.push(classes.Red)
  } 

  return(
    <div className={attachedClasses.join(' ')}>
      <h3>{props.text}</h3>
    </div>
  );
};

export default notification;