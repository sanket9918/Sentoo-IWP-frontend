import React from 'react';
import './App.css';
import Hero from './component/main-header.component';
import Register from './component/register.component';

import Login from './component/login.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar1 from './component/navbar.component';
import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './component/dashboard.component';


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
              <Route path='/dashboard' exact component={Dashboard} />

            </Switch>

          </div>
        </BrowserRouter>
      </Provider>


    </>
  );
}

export default App;
