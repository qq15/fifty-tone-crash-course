import React, { Component } from 'react';
import HeadNav from '../../common/HeadNav/App';
import Footer from '../../common/Footer';
import { Route } from 'react-router-dom';
import VideoPage from '../../routes/Video/VideoPage';

export default class VideoLayout extends Component {

  render() {
    return (
      <div id="VideoLayout">
        <HeadNav />
        <div className="content-wrap">
          <Route path={this.props.match.url+'/av:num'} component={VideoPage} />
        </div>
        <Footer />
      </div>
    );
  }
}