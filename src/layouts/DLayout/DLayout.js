import React, { Component } from 'react';
import HeadNav from '../../common/HeadNav';
import Footer from '../../common/Footer';
import "./DLayout.less";
import { Route } from 'react-router-dom';
import Home from '../../routes/Home/Home';
import About from '../../routes/About/About';
import Share from '../../routes/Share/Share';
import Contribute from '../../routes/Contribute/Contribute';

export default class DLayout extends Component {

  render() {
    return (
      <div id="DLayout">
        <HeadNav />
        <div className="content-wrap">
          <Route path={this.props.match.url+'/'} component={Home} exact/>
          <Route path={this.props.match.url+'/aboutme'} component={About} />
          <Route path={this.props.match.url+'/share'} component={Share} />
          <Route path={this.props.match.url+'/contribute'} component={Contribute} />
        </div>
        <Footer />
      </div>
    );
  }
}