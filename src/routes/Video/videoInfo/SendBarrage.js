import React, { PureComponent } from 'react';
import { Input, Icon, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import store from './videoInfoStore';

const sleep = delay =>
  new Promise(resolve => {
    setTimeout(resolve, delay)
  })

export default class BulletScreenAndSendBarrage extends PureComponent {
  async hideBarrage() {
    await sleep(7000);
    store.dispatch({
      type: "shiftBulletScreen",
    })
  }
  handleInputChange = e => {
    store.dispatch({
      type: "changeBarrageInputValue",
      value: e.target.value,
    });
  }
  handleBtnClick = () => {
    store.dispatch({
      type: "pushBarrageList",
    });
    store.dispatch({
      type: "addBullet",
    });
    store.dispatch({
      type: "changeBarrageInputValue",
      value: '',
    });
    this.hideBarrage();
  }
  render() {
    store.subscribe(() => this.forceUpdate());
    return (
      <React.Fragment>
        {store.getState().bulletScreen.map((item, index) => {
          return (
            <div
              key={index}
              className="block"
            >
              {item}
            </div>
          );
        })}
      <Row gutter={0}>
        <Col span={19}>
          <Input
            value={store.getState().barrageInputValue}
            onChange={this.handleInputChange}
            placeholder="发个友善的弹幕见证当下"
            prefix={<Icon type="font-colors" style={{ color: 'rgba(0,0,0,.5)' }} />}
            addonAfter={
              <Link to="/home/barrage_etiquette" style={{textDecoration: 'none', color: 'rgba(0,0,0,.5)', fontSize: '0.8em'}}>
                弹幕礼仪<Icon type="right" />
              </Link>}
            style={{ display: 'inline-flex', marginTop: 0, paddingTop: 0, }}
          />
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            className="tcBtn"
            onClick={this.handleBtnClick}
            style={{ marginBottom: '3.8em', display: 'inline-flex', }}
          >
            发送
          </Button>
        </Col>
      </Row>
      </React.Fragment>
    );
  }
}