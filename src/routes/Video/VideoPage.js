import React, { PureComponent } from 'react';
import BAddress from './BAddress';
import BulletScreenAndSendBarrage from './videoInfo/SendBarrage';
import VideoInfo from './videoInfo/VideoInfo';
import SelectedVideo from './selectedComponents/SelectedVideo';
import { Col, Row, } from 'antd';
import initialSize from './utils/flexiable';
import './common/css/common.css';
import Rec from './Rec';
import './Video.css';


initialSize(window, window['lib'] || (window['lib'] = {}));

export default class VideoPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
      <Row gutter={16} style={{ paddingTop: '1em', paddingBottom: '1em', }}>
        <Col
          span={3}
          className="leftCol"
        >
        </Col>
        <Col span={13}>
          <SelectedVideo />
          <BulletScreenAndSendBarrage />
        </Col>
        <Col span={5}>
          <Col gutter={5}>
            <Row span={1}>
              <BAddress />
            </Row>
            <Row span={23}>
              <VideoInfo />
              <Rec />
            </Row>
          </Col>
        </Col>
        <Col span={4}></Col>
      </Row>
      </React.Fragment>
    );
  }
}