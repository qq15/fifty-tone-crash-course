import React, { Component } from 'react';
import HeadNav from '../../common/HeadNav/App';
import Footer from '../../common/Footer';
import "./DLayout.less";
import { Route } from 'react-router-dom';
import Home from '../../routes/Home/Home';
import Share from '../../routes/Share/Share';
import Contribute from '../../routes/Contribute/Contribute';
import BarrageEtiquette from '../../routes/Barrage_etiquette/barrage_etiq';
import Tests from '../../routes/Tests/Tests';

export default class DLayout extends Component {

  render() {
    return (
      <div id="DLayout">
        <HeadNav />
        <div className="content-wrap">
          <Route path={this.props.match.url+'/'} component={Home} exact/>
          <Route path={this.props.match.url+'/share'} component={Share} />
          <Route path={this.props.match.url+'/contribute'} component={Contribute} />
          <Route path={this.props.match.url+'/barrage_etiquette'} component={BarrageEtiquette} />
          <Route path={this.props.match.url+'/tests'} component={Tests} />
        </div>
        <Footer />
      </div>
    );
  }
}