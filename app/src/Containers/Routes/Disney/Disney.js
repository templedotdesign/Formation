import React, { Component } from 'react';

import classes from './Disney.css'; 

class Disney extends Component {
  render() {
    return (
      <div className={classes.Disney}>
        <iframe src='https://www.disneytravelcenter.com/ms6f1ddcfc/' title='Disney'></iframe>
      </div>
    );
  }
}

export default Disney;