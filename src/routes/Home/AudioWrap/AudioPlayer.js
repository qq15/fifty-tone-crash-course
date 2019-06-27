import React from 'react'
import store from './audioStore';
import ReactPlayer from 'react-player'
import { Button, Card, Icon } from 'antd';

const decreaseRow = () => {
  if (store.getState().currentRow > 1) {
    store.dispatch({
      type: 'decreaseCurrentRow',
    });
  }
};

const increaseRow = () => {
  if (store.getState().currentRow < 10) {
    store.dispatch({
      type: 'increaseCurrentRow',
    });
  }
};

function AudioPlayer() {
  const playerStyle = {
    margin: 'auto',
  };
  const cardStyle = {
    width: 380, margin: 'auto', marginTop: '5px'
  };
  const { title, description, extraDescription, icon, url } = store.getState()[`row${store.getState().currentRow}`];
  const currentRow = store.getState().currentRow;
  const Player = () => (
    <React.Fragment>
      <ReactPlayer
        style={playerStyle}
        url={url}
        controls={true}
        playing={currentRow === 1 ? false : true}
      />
      <Card
        title={<span><Icon type="profile" />&nbsp;{title}</span>} style={cardStyle}
      >
        <Button onClick={decreaseRow}>
          <Icon type="left-circle" theme="twoTone" />
        </Button>
        &nbsp;{description}&nbsp;
        <Button onClick={increaseRow}>
          <Icon type="right-circle" theme="twoTone" />
        </Button><br />
        <Icon type={icon} theme="twoTone" />&nbsp;{extraDescription}
      </Card>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <Player />
    </React.Fragment>
  );
}

export default AudioPlayer;