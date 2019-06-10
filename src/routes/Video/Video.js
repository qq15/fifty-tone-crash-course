import React, { PureComponent } from 'react';
import { Col, Row } from 'antd';
import fifty_tone_flv_URL from '../../assets/video/fifty_tone.flv';
import Reflv from 'reflv';
import ScrollingText from './BulletScreen';
import './Video.css';


const sleep = delay =>
  new Promise(resolve => {
    setTimeout(resolve, delay)
  })

export default class Video extends PureComponent {

  state = {
    inputValue: '',
    bulletScreen: [],
    bulletValue: '',
    barrageDisplay: 'inline-block',
  };

  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleBtnClick = () => {
    this.setState({
      bulletValue: this.state.inputValue,
      inputValue: '',
      bulletScreen: [...this.state.bulletScreen, this.state.inputValue],
    });
    this.hideBarrage();
  }

  async hideBarrage() {
    await sleep(5000);
    const newBulletScreen = [...this.state.bulletScreen];
    newBulletScreen.shift();
    this.setState({ bulletScreen: newBulletScreen, });
  }

  render() {
    return (
      <React.Fragment>
      <Row gutter={16} style={{ paddingTop: '1em', paddingBottom: '1em', }}>
        <Col
          span={5}
          className="leftCol"
          style={{ backgroundColor: 'white', }}
        >
        </Col>
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
          </Reflv>
          <ScrollingText className="scroll_text" />
          {this.state.bulletScreen.map((item, index) => {
            return (
              <div
                key={index}
                className="block"
                z-index='990'
                style={{
                  marginTop: '-28em',
                  display: this.state.barrageDisplay,
                }}
              >
                {item}
              </div>
            );
          })}
          <input value={this.state.inputValue} onChange={this.handleInputChange} />
          <button
            onClick={this.handleBtnClick}
            style={{ marginBottom: '3.8em', }}
          >
            吐槽
          </button>

        </Col>
        <Col span={5}></Col>
      </Row>
      </React.Fragment>
    );
  }
}