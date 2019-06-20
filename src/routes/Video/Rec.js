import React, { PureComponent } from 'react';
import VideoPageCard from './VideoPageCard';
import videoStore from './videoStore';


export default class Rec extends PureComponent {
  render() {
    videoStore.subscribe(() => this.forceUpdate())

    return (
      <React.Fragment>
      <div>
        <VideoPageCard
          style={{
          }}
        />
      </div>
      </React.Fragment>
    );
  }
}