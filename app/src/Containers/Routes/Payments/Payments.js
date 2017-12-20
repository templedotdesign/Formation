import React, { Component } from 'react';

import Banner from '../../../Components/Banner/Banner';

import classes from './Payments.css';

class Payments extends Component {
  render() {
    return (
      <div>
        <Banner text='Payments'/>
        <div className={classes.Payments}>
          <iframe src='https://vacationcrm.com/travelmvc/IFramePayment?lookup_id=E5E13D10-0CBC-4FA6-929F-60D3ED921279' title='Payment Form'></iframe>
        </div>
      </div>
    );
  }
}

export default Payments;