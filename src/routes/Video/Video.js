import React, { PureComponent } from 'react';
import { List, Card, Col, Row, Input, Icon, Button, Timeline } from 'antd';
import { Link } from 'react-router-dom'
import fifty_tone_flv_URL from '../../assets/video/fifty_tone.flv';
import fifty_tone2_flv_URL from '../../assets/video/fifty_tone2.flv';
import Reflv from 'reflv';
import ScrollingText from './BulletScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList } from '@fortawesome/free-solid-svg-icons'
import { faThLarge } from '@fortawesome/free-solid-svg-icons'
import './Video.css';


const sleep = delay =>
  new Promise(resolve => {
    setTimeout(resolve, delay)
  })

const videoNames = [''];

const addressCardStyle = {
  borderRadius: 4,
  marginBottom: '0.59em',
  height: '11em',
  overflow: 'hidden',
};

const barraggeListCardStyle = {
  background: '#f4f4f4',
  borderRadius: 4,
  border: 0,
  height: '2.5em',
  fontSize: '1.5em',
  margin: 'auto',
  marginBottom: '1.2em',
  paddingTop: '0.5em',
  paddingLeft: '0.9em',
  overflow: 'hidden',
  textAlign: 'left',
};

const videoSelectionStyle = {
  background: '#f4f4f4',
  borderRadius: 4,
  border: 0,
  fontSize: '1.5em',
  margin: 'auto',
  marginBottom: '1.2em',
  paddingTop: '0.5em',
  paddingLeft: '0.9em',
  overflow: 'hidden',
  textAlign: 'left',
};

export default class Video extends PureComponent {

  state = {
    flvURL: fifty_tone_flv_URL,
    inputValue: '',
    bulletScreen: [],
    barrageList: [],
    barrageListStatus: '展开',
    bulletValue: '',
    timeLineDispay: 'none',
    videoSelection: faThList,
    selectionListDisplay: 'block',
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
      barrageList: [...this.state.barrageList, this.state.inputValue],
    });
    this.hideBarrage();
  }

  onExpandClick = () => {
    if (this.state.timeLineDispay==='none') {
      this.setState({
        barrageListStatus: '收起',
        timeLineDispay: 'block',
      });
    } else {
      this.setState({
        barrageListStatus: '展开',
        timeLineDispay: 'none',
      });
    }
  }

  onSlectionClick = () => {
    if (this.state.videoSelection===faThList) {
      this.setState({
        videoSelection: faThLarge,
        selectionListDisplay: 'none',
      });
    } else {
      this.setState({
        videoSelection: faThList,
        selectionListDisplay: 'block',
      });
    }
  }

  onP1Click = (e) => {
    this.setState({
      flvURL: fifty_tone_flv_URL,
    });
  }

  onP2Click = (e) => {
    this.setState({
      flvURL: fifty_tone2_flv_URL,
    });
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
          span={3}
          className="leftCol"
        >
        </Col>
        <Col span={14}>
          <div className="videoTitle">
            <p>动物平假名歌</p>
          </div>
          <div className="videoDescription">
            <p>あいうえおのうた</p>
          </div>
          <Reflv
            url={this.state.flvURL}
            type="flv"
            cors
            config={{
              enableWorker: true,
              enableStashBuffer: false,
              stashInitialSize: 128,
            }}
          >
          </Reflv>
          {this.state.bulletScreen.map((item, index) => {
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
            <Col span={20}>
              <Input
                value={this.state.inputValue}
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
          <ScrollingText className="scroll_text" />
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
              <div
                onClick={this.onExpandClick}
                style={barraggeListCardStyle}
              >
                <span
                  style={{fontSize: '0.9em',}}
                >弹幕列表 <Icon type="more" /></span>
                <span
                  style={{
                    fontSize: '0.7em',
                    paddingLeft: '12em',
                  }}
                >{this.state.barrageListStatus}</span>
              </div>
              <Timeline
                style={{
                  marginTop: '1em',
                  display: this.state.timeLineDispay,
                }}
              >
                {
                  this.state.barrageList.map((item, index) => {
                    return (
                      <Timeline.Item
                        key={index}
                        style={{
                        }}
                      >
                        <p>{item}</p>
                      </Timeline.Item>
                    );
                  })
                }
              </Timeline>
              <div
                style={videoSelectionStyle}
              >
                <span
                  onClick={this.onSlectionClick}
                  style={{fontSize: '0.9em',}}
                >
                  视频选集&nbsp;
                  <FontAwesomeIcon
                    onClick={this.onSlectionClick}
                    icon={this.state.videoSelection} color="#696969"
                    style={{ marginLeft: "0.25em", fontSize: '0.8em',}}
                  />
                </span>
                <span
                  onClick={this.onSlectionClick}
                  style={{
                    fontSize: '0.7em',
                    paddingLeft: '12em',
                  }}
                >1/2</span>
                <List 
                  style={{
                    display: this.state.selectionListDisplay,
                  }}
                  header={
                    <Link to="/home/video" style={{textDecoration: 'none', color: 'rgba(0,0,0,.5)', fontSize: '0.9em'}}>
                      <div onClick={this.onP1Click}>
                        P1 动物平假名歌
                      </div>
                    </Link>
                  }
                  footer={
                    <Link to="/home/video2" style={{textDecoration: 'none', color: 'rgba(0,0,0,.5)', fontSize: '0.9em'}}>
                      <div onClick={this.onP2Click} style={{marginTop: '-1.7em'}}>P2 动物片假名歌</div>
                    </Link>
                  }
                  size="small"
                  bordered={false}
                  dataSource={videoNames}
                  renderItem={item => <List.Item>{item}</List.Item>}
                />
                <div style={{display: this.state.selectionListDisplay === 'block' ? 'none' : 'block'}}>
                  <Link to="/home/video"><div
                    style={{
                      backgroundColor: 'blue', height: '2em', width: '2em', display: 'inline-block',
                    }}
                  >
                    <Link to="/home/video">1</Link>
                  </div></Link>
                  <Link to="/home/video2"><div
                    style={{
                      marginLeft: '2em',
                      marginBottom: '0.3em',
                      backgroundColor: 'white', height: '2em', width: '2em', display: 'inline-block',
                    }}
                  >
                    2
                  </div></Link>
                </div>
              </div>
            </Row>
          </Col>
        </Col>
        <Col span={2}></Col>
      </Row>
      </React.Fragment>
    );
  }
}