import React from 'react';
import './App.css';
import Hero from './component/main-header.component';
import Register from './component/register.component';
import Rating from './component/protected-component/rating.component';

import Login from './component/login.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar1 from './component/navbar.component';
import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './component/protected-component/dashboard.component';
import Error from './component/error.component';
import ProtectedRoute from './component/protected-component/protected.component';
import Footer from './component/footer.component';
import Property from './component/protected-component/property.component'

function App() {
  return (
    <>
      <Provider store={store}>

        <BrowserRouter>
          <div>
            <Navbar1 />
            <Switch>
              <Route path='/' exact component={Hero} />
              <Route path='/login' exact component={Login} />
              <Route path='/register' exact component={Register} />

              <ProtectedRoute path='/dashboard' component={Dashboard} />
              <ProtectedRoute path='/rating' component={Rating} />
              <ProtectedRoute path='/property' component={Property} />
              {/* <Route path='/dashboard' exact component={Dashboard} />
              <Route path='/rating' component={(props) => <Rating {...props} />} /> */}

              <Route component={Error} />
            
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>


    </>
  );
}

export default App;
