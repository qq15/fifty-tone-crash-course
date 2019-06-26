import React from 'react';
import Reflv from 'reflv';


export default function ReflvWrap(props) {
  const {flv, title, statics, time} = props.part;
  const flvURL = require(`../../../assets/video/${flv}.flv`);
  return (
    <React.Fragment>
      <div className="videoTitle">
        <p>{title}</p>
      </div>
      <div className="videoTime">{time}</div>
      <div className="videoDescription">
        <p>{statics}</p>
      </div>
      <Reflv
        url={flvURL}
        type="flv"
        cors
        config={{
          enableWorker: true,
          enableStashBuffer: false,
          stashInitialSize: 128,
        }}
      />
    </React.Fragment>
  );
}