import React, { PureComponent } from 'react';
import { Col, Row } from 'antd';
import fifty_tone_flv_URL from '../../assets/video/fifty_tone.flv';
import Reflv from 'reflv';

export default class Video extends PureComponent {
  render() {
    return (
      <React.Fragment>
      <Row gutter={16} style={{ paddingTop: '6em', }}>
        <Col span={5}></Col>
        <Col span={14}>
          <Reflv
            url={fifty_tone_flv_URL}
            type="flv"
            cors
            config={{
              enableWorker: true,
              enableStashBuffer: false,
              stashInitialSize: 128,
            }}
          />
        </Col>
        <Col span={5}></Col>
      </Row>
      </React.Fragment>
    );
  }
}