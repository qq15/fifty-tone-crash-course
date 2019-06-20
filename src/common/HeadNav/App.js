import React, { Component } from 'react';
import {InjectGlobal} from "./style";
import Header from './common/header'
import {IconInjectGlobal} from "./statics/iconfont/iconfont";


class App extends Component {
  render() {
    return (
      <div>
        <InjectGlobal/>
        <IconInjectGlobal/>
        <Header/>
      </div>
    );
  }
}

export default App;
