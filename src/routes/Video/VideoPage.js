import React, { PureComponent } from 'react';
import videoStore from './videoStore';
import SelectedVideo from './selectedComponents/SelectedVideo';
import SelectionList from './selectedComponents/selectionList';
import SelectionButtons from './selectedComponents/SelectionButtons'
import { Card, Col, Row, Input, Icon, Button, Timeline } from 'antd';
import { Link } from 'react-router-dom'
import initialSize from './utils/flexiable';
import './common/css/common.css';
import Rec from './Rec';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Video.css';


initialSize(window, window['lib'] || (window['lib'] = {}));
const sleep = delay =>
  new Promise(resolve => {
    setTimeout(resolve, delay)
  })

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
  paddingTop: '0.7em',
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

export default class VideoPage extends PureComponent {

  state = {
    inputValue: '',
    bulletScreen: [],
    barrageList: [],
    bulletValue: '',
  };

  componentWillMount() {
    const currentHash = document.location.hash;
    const avRegex = /^#\/video\/av(\d+).*?(\d+)?$/;
    const arr = currentHash.match(avRegex);
    const av = arr[1];
    const p = arr[2];
    videoStore.dispatch({
      type: "changeCurrentAv",
      value: parseInt(av),
    });
    if (p === '1' || p === undefined) {
      videoStore.dispatch({
        type: "changeCurrentPartTo1"
      })
    } else if (p === '2') {
      videoStore.dispatch({
        type: "changeCurrentPartTo2"
      })} else {
        return;
      }
    }

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
    videoStore.dispatch({
      type: "changeTimeLineDisplay",
    });
    videoStore.dispatch({
      type: "changeBarrageListStatus",
    });
  }

  onSlectionClick = () => {
    videoStore.dispatch({
      type: "changeSelectionListDisplay",
    });
    videoStore.dispatch({
      type: "changeSelectionIcon",
    });
  }

  onPartClick = (num) => {
    videoStore.dispatch({
      type: "changeCurrentPartTo" + String(num),
    });
  }

  async hideBarrage() {
    await sleep(7000);
    const newBulletScreen = [...this.state.bulletScreen];
    newBulletScreen.shift();
    this.setState({ bulletScreen: newBulletScreen, });
  }

  render() {
    videoStore.subscribe(() => this.forceUpdate());

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
            <Col span={19}>
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
                    paddingLeft: '9em',
                  }}
                >{videoStore.getState().barrageListStatus}</span>
              </div>
              <Timeline
                style={{
                  marginTop: '1em',
                  display: videoStore.getState().timeLineDisplay,
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
                  style={{fontSize: '0.9em',}}
                >
                  视频选集&nbsp;
                  <FontAwesomeIcon
                    icon={videoStore.getState().selectionIcon} color="#696969"
                    style={{ marginLeft: "0.25em", fontSize: '0.8em',}}
                    onClick={this.onSlectionClick}
                  />
                </span>
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '0.7em',
                    paddingLeft: '9em',
                  }}
                >
                  1/2
                </span>
                <SelectionList />
                <div style={{display: videoStore.getState().selectionListDisplay === 'block' ? 'none' : 'block'}}>
                  <SelectionButtons />
                </div>
              </div>
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