import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login_Container from "./Body/Account/Login_Container";
import SignUp from "./Body/Account/SignUp_Container";

import './CSS/Home.scss';
import './CSS/Login.scss';
import './CSS/Footer.scss';
import './CSS/RecyclableComponents/SteppingDot.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="main-body">
        <div className="container-fluid inner-margin">
          <Switch>
            <Route path="/login" component={Login_Container} />
            <Route path="/register" component={SignUp} />
          </Switch>
        </div>
      </div>
    )
  }
}