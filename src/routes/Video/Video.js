import React, { PureComponent } from 'react';
import { Col, Row } from 'antd';
import fifty_tone_flv_URL from '../../assets/video/fifty_tone.flv';
import Reflv from 'reflv';
import './Video.css';

export default class Video extends PureComponent {
  render() {
    return (
      <React.Fragment>
      <Row gutter={16} style={{ paddingTop: '1em', paddingBottom: '1em', }}>
        <Col span={5}></Col>
        <Col span={14}>
          <div className="videoTitle">
            <p>五十音之歌</p>
          </div>
          <div className="videoDescription">
            <p>あいうえおのうた</p>
          </div>
          <Reflv
            url={fifty_tone_flv_URL}
            type="flv"
            cors
            config={{
              enableWorker: true,
              enableStashBuffer: false,
              stashInitialSize: 128,
            }}
          >
            <video name="videoElement" class="centeredVideo" controls autoplay>
              Your browser is too old which does not support HTML5 video.
            </video>
          </Reflv>
        </Col>
        <Col span={5}></Col>
      </Row>
      </React.Fragment>
    );
  }
}