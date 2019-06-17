import React from 'react';
import { Card, List, Row, Col } from 'antd';
import style from './barrage_etiq.less';

const proposedBarrages = [
  "与视频相关的弹幕",
  "符合视频气氛的弹幕",
  "认真负责的字幕",
  "专业的科普解说",
];

const bannedBarrages = [
  "无关视频中刷口号",
  "违反法律法规",
  "垃圾广告",
  "人身攻击",
  "恶意刷屏",
  "私人信息",
  "无关内容",
  "遮挡字幕",
  "低俗词汇",
  "过度跟风",
  "误导他人",
  "不懂气氛",
  "剧透",
  "引战",
];

const secondTitle = {
  fontSize: '1.17em',
  marginTop: 16,
  marginBottom: 16,
  marginBlockStart: '1em',
  marginBlockEnd: '1em',
  marginInlineStart: '0px',
  marginInlineEnd: '0px',
  fontWeight: 'bold',
};

export default function BarrageEtiquette() {
  return (
    <div
      style={style}
      id="barrageEtiq"
    >
    <Row>
      <Col span={5}></Col>
      <Col span={14}>
        <Card style={{
            marginBottom: 16,
            marginTop: 16,
            fontSize: '16px'
          }}
        >
          <h1>弹幕礼仪</h1>
        </Card>
        <h2
          style={secondTitle}
        >
          倡议内容
        </h2>
        <List
          header={<div>以下弹幕，让五十音速成课更温暖、更有爱</div>}
          footer={<div>请让你的弹幕"阳光、理性、平和、友善"</div>}
          bordered={true}
          dataSource={proposedBarrages}
          renderItem={(item) => (<List.Item>{item}</List.Item>)}
        />
        <h2
          style={secondTitle}
        >
          禁止内容          
        </h2>
        <List
          header={<div>违反以下规则都将受到相应处理</div>}
          footer={<div>相关社区规则详情，待拟。</div>}
          bordered={true}
          dataSource={bannedBarrages}
          renderItem={(item) => (<List.Item>{item}</List.Item>)}
          style={{
            marginBottom: 110,
          }}
        />
      </Col>
      <Col span={5}></Col>
    </Row>
    </div>
  );
}