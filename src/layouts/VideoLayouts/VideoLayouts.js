import React, { Component } from 'react';
import HeadNav from '../../common/HeadNav';
import Footer from '../../common/Footer';
import { Route } from 'react-router-dom';
import VideoPage from '../../routes/Video/VideoPage';

export default class VideoLayout extends Component {

  render() {
    return (
      <div id="VideoLayout">
        <HeadNav />
        <div className="content-wrap">
          <Route path={this.props.match.url+'/av1'} component={VideoPage} />
          <Route path={this.props.match.url+'/av2'} component={VideoPage} />
          <Route path={this.props.match.url+'/av3'} component={VideoPage} />
        </div>
        <Footer />
      </div>
    );
  }
}