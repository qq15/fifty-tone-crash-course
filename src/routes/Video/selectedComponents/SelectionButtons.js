import React from 'react';
import videoStore from '../videoStore';
import { Button } from 'antd';
import { Link } from 'react-router-dom';


const onPartClick = (num) => {
  videoStore.dispatch({
    type: "changeCurrentPartTo" + String(num),
  });
}

const vsBtnStyle = {
  lineHeight: '38px',
  marginTop: '10px',
  marginBottom: '0.9em',
  marginRight: '0.7em',
  width: '60px',
  height: '40px',
};

const vsBtnPrimaryStyle = {
  lineHeight: '38px',
  marginTop: '10px',
  marginBottom: '0.9em',
  marginRight: '0.7em',
  width: '60px',
  height: '40px',
  borderColor: '#03a0d6',
  background: '#03a0d6',
};

const ButtonsAv1P1 = () => (
    <React.Fragment>
      <Button type="primary" style={vsBtnPrimaryStyle}>1</Button>
      <Link to={videoStore.getState().av1.p2.full_path}>
        <Button
          type="default" style={vsBtnStyle}
          onClick={() => onPartClick(2)}
        >
          2
        </Button>
      </Link>
    </React.Fragment>
);

const ButtonsAv1P2 = () => (
    <React.Fragment>
      <Link to={videoStore.getState().av1.path}>
        <Button
          type="default" style={vsBtnStyle}
          onClick={() => onPartClick(1)}
        >
          1
        </Button>
      </Link>
      <Button type="primary" style={vsBtnPrimaryStyle}>2</Button>
    </React.Fragment>
);

const ButtonsAv2P1 = () => (
    <React.Fragment>
      <Button type="primary" style={vsBtnPrimaryStyle}>1</Button>
      <Link to={videoStore.getState().av2.p2.full_path}>
        <Button
          type="default" style={vsBtnStyle}
          onClick={() => onPartClick(2)}
        >
          2
        </Button>
      </Link>
    </React.Fragment>
);

const ButtonsAv2P2 = () => (
    <React.Fragment>
      <Link to={videoStore.getState().av2.p1.full_path}>
        <Button
          type="default" style={vsBtnStyle}
          onClick={() => onPartClick(1)}
        >
          1
        </Button>
      </Link>
      <Button type="primary" style={vsBtnPrimaryStyle}>2</Button>
    </React.Fragment>
);

const ButtonsAv3P1 = () => (
    <React.Fragment>
      <Button type="primary" style={vsBtnPrimaryStyle}>1</Button>
    </React.Fragment>
);

export default function SelectionButtons(props) {
  let SelectedButtons = null;
  if (videoStore.getState().currentAv === 1) {
    if (videoStore.getState().currentPart === 1) {
      SelectedButtons = ButtonsAv1P1;
    } else if (videoStore.getState().currentPart === 2) {
      SelectedButtons = ButtonsAv1P2;
    }
  } else if (videoStore.getState().currentAv === 2) {
    if (videoStore.getState().currentPart === 1) {
      SelectedButtons = ButtonsAv2P1;
    } else if (videoStore.getState().currentPart === 2) {
      SelectedButtons = ButtonsAv2P2;
    }
  } else if (videoStore.getState().currentAv === 3) {
    if (videoStore.getState().currentPart === 1) {
      SelectedButtons = ButtonsAv3P1;
    } else {
      return;
    }
  }
  return (
    <SelectedButtons />
  );
}