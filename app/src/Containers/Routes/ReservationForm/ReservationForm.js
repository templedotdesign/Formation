import React, { Component } from 'react';

import Banner from '../../../Components/Banner/Banner';
import ConfigurableForm from '../../Forms/ConfigurableForm/ConfigurableForm';

class ReservationForm extends Component {
  render() {
    return(
      <div>
        <Banner text='Reservations'/>
        <ConfigurableForm/>
      </div>
    );
  }
}

export default ReservationForm;