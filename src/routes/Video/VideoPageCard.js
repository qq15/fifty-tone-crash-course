import React from 'react';
import videoStore from './videoStore';
import store from './videoInfo/videoInfoStore';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const h2style = {
  textAlign: 'left',
  fontSize: '16px',
  color: '#222',
  marginBottom: 16,
};

const videoPageCardListStyle = {
  padding: 0,
  border: 0,
  fontSize: '100%',
  verticalAlign: 'baseline',
  color: '#222',
  cursor: 'pointer',
  lineHeight: 1.5,
};

const imgStyle = {
  display: 'inline-block',
  width: '141px',
  height: '80px',
  margin: 0,
  padding: 0,
  border: 0,
};

const cardTitleStyle = {
  height: '36px',
  lineHeight: '18px',
  fontSize: '14px',
  fontWeight: 500,
  marginTop: '',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign: 'left',
  display: 'inline-block',
  color: '#222',
  backgroundColor: 'transparent',
};

const cardUp = {
  display: 'block',
  fontSize: '100%',
  color: '#999',
  transition: 'color .3s',
  lineHeight: 1.5,
  marginBottom: '2px',
  whiteSpace: 'nowrap',
  textAlign: 'left',
};

const cardDescription = {
  display: 'block',
  fontSize: '100%',
  color: '#999',
  transition: 'color .3s',
  lineHeight: 1.5,
  whiteSpace: 'nowrap',
  textAlign: 'left',
};



export default function CardsOfRecs (props) {
  const onRecClick = (path) => {
    const avRegex = /^\/video\/av(\d+).*?(\d+)?$/;
    const av = parseInt(path.match(avRegex)[1]);
    videoStore.dispatch({
      type: "changeCurrentAv",
      value: av,
    });
    videoStore.dispatch({
      type: "changeCurrentPartTo1"
    });
    if(!(videoStore.getState()[`av${parseInt(av)}`].p2)) {
      store.dispatch({
        type: "changeVideoSelectionDisplayToNone",
      });
    } // 如果视频没有第二部分，改变视频选集展示状态为"none"
    if(!!(videoStore.getState()[`av${parseInt(videoStore.getState().currentAv)}`].p2) && store.getState().videoSelectionDisplay !== 'block') {
      store.dispatch({
        type: "changeVideoSelectionDisplayToBlock",
      });
    } // 如果视频有第二部分而且当前视频选集不展示，改变视频选集展示状态为"block"
    store.dispatch({
      type: "clearBullets",
    });
  }
  const avStr = "av" + videoStore.getState().currentAv;
  let storeClone = Object.assign({}, videoStore.getState());
  delete storeClone[avStr];
  let listOfCardInfo = [];
  for (let i in storeClone) {
    if (!!(i.match(/^av\d+$/)) && i !== avStr) {
      listOfCardInfo.push({
        path: storeClone[i].p1.full_path,
        title: storeClone[i].p1.title,
        up: storeClone[i].p1.up,
        statics: storeClone[i].p1.statics,
        pic: storeClone[i].p1.pic,
      })
    }
  }

  return (
    <React.Fragment>
    <h2 style={h2style}>
      相关推荐
    </h2>
    <div style={{videoPageCardListStyle}}>
    {
      listOfCardInfo.map((item, index) => {
        return (
          <Link to={item.path} key={index}>
            <Row
              onClick={() => onRecClick(item.path)}
              style={{
                marginBottom: '6px',
              }}
              gutter={20}
            >
              <Col span={12}>
              <img
                style={imgStyle}
                src={require(`../../assets/images/${item.pic}`)}
                alt={`${item.pic}`}
              />
              </Col>
              <Col span={12}>
              <div
                style={cardTitleStyle}
              >
                {item.title}
              </div>
                <p
                  style={cardUp}
                >
                  {item.up}
                </p>
                <p
                  style={cardDescription}
                >
                  {item.statics}
                </p>
              </Col>
            </Row>
          </Link>
        );
      })
    }
    </div>
    </React.Fragment>
  );
}