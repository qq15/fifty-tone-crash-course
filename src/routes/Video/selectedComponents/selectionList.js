import React from 'react';
import videoStore from '../videoStore';
import { List } from 'antd';
import { Link } from 'react-router-dom';

const videoNames = [
  '',
];
const onPartClick = (num) => {
  videoStore.dispatch({
    type: "changeCurrentPartTo" + String(num),
  });
}

function av1p1List() {
  return (
    <List 
      header={
        <div
          style={{textDecoration: 'none', color: 'rgba(0,0,0,.5)', fontSize: '0.9em'}}
        >

          P1 {videoStore.getState().av1.p1.flv}
        </div>
      }
      footer={
        <Link to={videoStore.getState().av1.p2.full_path}
          style={{textDecoration: 'none', color: 'rgba(0,0,0,.5)', fontSize: '0.9em'}}
        >
          <div
            style={{marginTop: '-1.7em'}}
            onClick={() => onPartClick(2)}
          >
            P2 {videoStore.getState().av1.p2.flv}
          </div>
        </Link>
      }
      size="small"
      bordered={false}
      dataSource={videoNames}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  );
}

function av1p2List() {
  return (
    <List 
      header={
        <Link to={videoStore.getState().av1.p1.full_path}>
          <div
            style={{textDecoration: 'none', color: 'rgba(0,0,0,.5)', fontSize: '0.9em'}}
            onClick={() => onPartClick(1)}
          >
            P1 {videoStore.getState().av1.p1.flv}
          </div>
        </Link>
      }
      footer={
        <div
          style={{marginTop: '-1.7em'}}
        >
          P2 {videoStore.getState().av1.p2.flv}
        </div>
      }
      size="small"
      bordered={false}
      dataSource={videoNames}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  );
}

function av2p1List() {
  return (
    <List 
      header={
        <div
          style={{textDecoration: 'none', color: 'rgba(0,0,0,.5)', fontSize: '0.9em'}}
        >

          P1 {videoStore.getState().av2.p1.flv}
        </div>
      }
      footer={
        <Link to={videoStore.getState().av2.p2.full_path}
          style={{textDecoration: 'none', color: 'rgba(0,0,0,.5)', fontSize: '0.9em'}}
        >
          <div
            style={{marginTop: '-1.7em'}}
            onClick={() => onPartClick(2)}
          >
            P2 {videoStore.getState().av2.p2.flv}
          </div>
        </Link>
      }
      size="small"
      bordered={false}
      dataSource={videoNames}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  );
}

function av2p2List() {
  return (
    <List 
      header={
        <Link to={videoStore.getState().av2.p1.full_path}>
          <div
            style={{textDecoration: 'none', color: 'rgba(0,0,0,.5)', fontSize: '0.9em'}}
            onClick={() => onPartClick(1)}
          >
            P1 {videoStore.getState().av2.p1.flv}
          </div>
        </Link>
      }
      footer={
        <div
          style={{marginTop: '-1.7em'}}
        >
          P2 {videoStore.getState().av2.p2.flv}
        </div>
      }
      size="small"
      bordered={false}
      dataSource={videoNames}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  );
}

function av3p1List() {
  return (
    <List 
      size="small"
      bordered={false}
      dataSource={['小奶音']}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  );
}

export default function SelectionList() {
  let SelectionList = null;
  if (videoStore.getState().currentAv === 1) {
    if (videoStore.getState().currentPart === 1) {
      SelectionList = av1p1List;
    } else if (videoStore.getState().currentPart === 2) {
      SelectionList = av1p2List;
    } else {
      return;
    }
  } else if (videoStore.getState().currentAv === 2) {
    if (videoStore.getState().currentPart === 1) {
      SelectionList = av2p1List;
    } else if (videoStore.getState().currentPart === 2) {
      SelectionList = av2p2List;
    } else {
      return;
    }
  } else {
    SelectionList = av3p1List;
  }

  return (
    <div style={{display: videoStore.getState().selectionListDisplay}}>
      <SelectionList />
    </div>
  );
}