import React, { PureComponent } from 'react';
import BulletScreenAndSendBarrage from './videoInfo/SendBarrage';
import VideoInfo from './videoInfo/VideoInfo';
import SelectedVideo from './selectedComponents/SelectedVideo';
import { Card, Col, Row, Icon } from 'antd';
import initialSize from './utils/flexiable';
import './common/css/common.css';
import Rec from './Rec';
import './Video.css';

initialSize(window, window['lib'] || (window['lib'] = {}));
const addressCardStyle = {
  borderRadius: 4,
  marginBottom: '0.59em',
  height: '11em',
  overflow: 'hidden',
};
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
              <Card
                title="视频原址"
                extra={<Icon type="youtube" theme="filled" style={{ fontSize: '1.5em', color: '#f00' }} />}
                style={addressCardStyle}
              >
                <p><a href="https://www.bilibili.com/video/av43616016/?p=1">五十音之歌（平假名版）</a></p>
                <p><a href="https://www.bilibili.com/video/av43616016/?p=2">五十音之歌（片假名版）</a></p>
              </Card>
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