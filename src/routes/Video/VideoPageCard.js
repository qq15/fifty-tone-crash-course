import React from 'react';
import videoStore from './videoStore';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const h2style = {
  textAlign: 'left',
  fontSize: '16px',
  color: '#222',
  marginBottom: 16,
  marginLeft: '16px',
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

const onRecClick = (value) => {
  videoStore.dispatch({
    type: "changeCurrentAv",
    value,
  });
  videoStore.dispatch({
    type: "changeCurrentPartTo1"
  });
  const currentHash = document.location.hash;
  const avRegex = /^#\/video\/av(\d+).*?(\d+)?$/;
  const arr = currentHash.match(avRegex);
  const av = arr[1];
  if(!(videoStore.getState()[`av${parseInt(av)}`].p2) ||
     !(videoStore.getState()[`av${parseInt(videoStore.getState().currentAv)}`].p2 ||
     !(videoStore.getState()[`av${parseInt(value)}`].p2))
    ) {
        videoStore.dispatch({
          type: "changeVideoSelectionDisplay",
        });
      }

}

export default function CardsOfRecs (props) {
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
              onClick={() => onRecClick(parseInt(item.path[9]))}
              style={{
                marginBottom: '6px',
              }}
              gutter={0}
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