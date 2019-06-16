import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import DLayout from './layouts/DLayout/DLayout'
import LoginUser from './layouts/LoginUser/LoginUser';
import VideoLayout from './layouts/VideoLayouts/VideoLayouts';

export default class RouterWrap extends Component {
  render() {
    return (
      <div id="router">
        <HashRouter>
          <Switch>
            <Route path="/" component={LoginUser} exact />
            <Route path="/home" component={DLayout} />
            <Route path="/video" component={VideoLayout} />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}