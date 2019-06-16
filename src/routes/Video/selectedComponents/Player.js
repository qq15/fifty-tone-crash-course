import React from 'react';
import Reflv from 'reflv';


export default function ReflvWrap(props) {
  const {flv, title, statics} = props.part;
  const flvURL = require(`../../../assets/video/${flv}.flv`);
  return (
    <React.Fragment>
      <div className="videoTitle">
        <p>{title}</p>
      </div>
      <div className="videoTime">2019-02-15 11:48:52</div>
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