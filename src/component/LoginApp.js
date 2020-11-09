import React, { Component } from 'react';
import Admin from './Login/Admin';
import Login from './Login/Login';
import Logout from './Login/Logout';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class LoginApp extends Component {
    render() {
        return (
            <Router>
              <Switch>
                <Route path="/admin">
                  <Admin />
                </Route>
                <Route path="/logout">
                  <Logout />
                </Route>
                <Route exact path="/">
                  <Login />
                </Route>
              </Switch>
          </Router>
        );
    }
}

export default LoginApp;