import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Routes/Home/Home';
import ReservationForm from '../Routes/ReservationForm/ReservationForm'; 

class App extends Component {
  state = {
  
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/reservations' component={ReservationForm}/>
          <Route path='/' component={Home}/>          
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
