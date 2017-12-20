import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../../Components/Layout/Layout';
import Home from '../Routes/Home/Home';
import ReservationForm from '../Routes/ReservationForm/ReservationForm';
import Payments from '../Routes/Payments/Payments';
import Agents from '../Routes/Agents/Agents'; 
import Disney from '../Routes/Disney/Disney';
import GroupTravel from '../Routes/GroupTravel/GroupTravel';
import Resources from '../Routes/Resources/Resources';
import Blog from '../Routes/Blog/Blog';
import Contact from '../Routes/Contact/Contact';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path='/reservations' component={ReservationForm}/>
              <Route path='/payments' component={Payments}/>
              <Route path='/disney' component={Disney}/>
              <Route path='/agents' component={Agents}/>
              <Route path='/grouptravel' component={GroupTravel}/>
              <Route path='/resources' component={Resources}/>
              <Route path='/blog' component={Blog}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/' component={Home}/>          
            </Switch>
          </Layout>
        </BrowserRouter>
    );
  }
}

export default App;
