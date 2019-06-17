import React, { PureComponent } from 'react';
import BarrageList from './BarrageList';
import TucaoTimeline from './TucaoTimeline';
import store from './videoInfoStore';
import videoStore from '../videoStore';
import loadHash from '../loadHash';
import VideoSelection from './VideoSelection';


export default class VideoInfo extends PureComponent {
  componentWillMount() {
    loadHash();
  }
  render() {
    store.subscribe(() => this.forceUpdate());
    videoStore.subscribe(() => this.forceUpdate());

    return(
      <React.Fragment>
        <BarrageList />
        <TucaoTimeline />
        <VideoSelection />
      </React.Fragment>
    );
  }
}