import React, { Component } from 'react';
import { Card, Col, Icon, Row } from 'antd';
import store from '../Store';
import hjImgURL from '../assets/images/hjIcon.png';
import jpImgURL from '../assets/images/jp.png';
import memImgURL from '../assets/images/memrise.png';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="相关资源" bordered={false} loading={store.getState().logoIsLoading && window.innerWidth>=740 }
              hoverable={true} style={{ height: 200, }}
            >
              <div style={{ marginTop: -12, marginBottom: -22, }}>
                <a href="https://jp.hjenglish.com/">
                  <img 
                    src={hjImgURL}
                    alt="沪江日语"
                  /> 沪江日语
                </a>
              </div><br /><br />
              <a href="https://www.memrise.com/">
                <img 
                  src={memImgURL}
                  alt="memrise"
                /> memrise
              </a><br /><br />
              <a href="https://www.cn.emb-japan.go.jp">
                <img
                  src={jpImgURL}
                  alt="日本"
                /> 驻华使馆
              </a>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Contact" bordered={true} loading={store.getState().logoIsLoading}
              hoverable={true} style={{ height: 200, }}
            >
              <Icon type="mail" /> <a href="mailto:1811639092@qq.com">1811639092@qq.com</a><br /><br />
              <Icon type="github" /> <a href="https://gitee.com/jsedu">gitee.com/jsedu</a><br /><br />
              <Icon type="wechat" /> zyzyzy20160707
            </Card>
          </Col>
          <Col span={8}>
            <Card title="版权所有" bordered={false} loading={store.getState().logoIsLoading}
              hoverable={true} style={{ height: 200, }}
            >
              <Icon type="copyright" /> 2019 <a href="https://jsedu.gitee.io">jsedu.gitee.io</a>,
              <br /><br /> all rights reserved <br /><br />16 级马院思政 705 班张扬
            </Card>
          </Col>
        </Row>
      </div>
      </footer>
    );
  }
}