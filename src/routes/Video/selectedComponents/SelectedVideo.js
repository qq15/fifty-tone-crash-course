import React, { PureComponent } from 'react';
import videoStore from '../videoStore';
import Player from './Player';


export default class SelectedVideo extends PureComponent {
  render() {
    const ReflvWrap = () => (
      <Player
        part={videoStore.getState()[`av${videoStore.getState().currentAv}`][`p${videoStore.getState().currentPart}`]}
      />
    )
    videoStore.subscribe(() => this.forceUpdate());

    return (
      <ReflvWrap />
    )
  }
}