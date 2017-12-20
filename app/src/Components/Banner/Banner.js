import React from 'react';

import classes from './Banner.css';

const banner = (props) => {
  let attachedClasses = [classes.Banner];
  let random = Math.floor(Math.random() * (16 - 0 + 1)) + 0;
  switch(random) {
    case 0: 
      attachedClasses.push(classes.Paris);
      break;
    case 1:
      attachedClasses.push(classes.Washington);
      break;
    case 2:
      attachedClasses.push(classes.Beach);
      break;
    case 3:
      attachedClasses.push(classes.Rome);
      break;
    case 4:
      attachedClasses.push(classes.Stonehenge);
      break;
    case 5:
      attachedClasses.push(classes.Mountain);
      break;
    case 6:
      attachedClasses.push(classes.Alaska);
      break;
    case 7:
      attachedClasses.push(classes.NYC);
      break;
    case 8:
      attachedClasses.push(classes.Venice);
      break;
    case 9:
      attachedClasses.push(classes.Snow);
      break;
    case 10:
      attachedClasses.push(classes.Arch);
      break;
    case 11:
      attachedClasses.push(classes.Coastal);
      break;
    case 12:
      attachedClasses.push(classes.Balloon);
      break;
    case 13:
      attachedClasses.push(classes.Seattle);
      break;
    case 14:
      attachedClasses.push(classes.Tennis);
      break;
    case 15:
      attachedClasses.push(classes.Fireworks);
      break;
    case 16:
      attachedClasses.push(classes.Cruise);
      break;
    default:
      console.error('Routes/Home::OutOfRangeError');
      break;
  }
  return(
    <div className={attachedClasses.join(' ')}>
      <h1>{props.text}</h1>
    </div>
  );
}

export default banner;