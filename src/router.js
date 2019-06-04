import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import DLayout from './layouts/DLayout/DLayout'
import LoginUser from './layouts/LoginUser/LoginUser';

export default class RouterWrap extends Component {
  render() {
    return (
      <div id="router">
        <HashRouter>
          <Switch>
            <Route path="/" component={LoginUser} exact />
            <Route path="/home" component={DLayout} />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}