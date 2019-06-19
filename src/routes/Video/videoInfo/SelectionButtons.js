import React from 'react';
import videoStore from '../videoStore';
import store from './videoInfoStore';
import { Button } from 'antd';
import { Link } from 'react-router-dom';


const onPartClick = (num) => {
  videoStore.dispatch({
    type: "changeCurrentPartTo" + String(num),
  });
  store.dispatch({
    type: "clearBullets",
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

function Buttons(props) {
  const shouldShowLink = (path) => {
    const avRegex = /^\/video\/av(\d+).*?(\d+)?$/;
    const p = parseInt(path.match(avRegex)[2]);
    const currentP = videoStore.getState().currentPart;
    return ( (currentP === p) || ((currentP === 1) && isNaN(p))) ? false : true
  }
  return (
    <div>
    {
      props.videoNames.map(
        (item, index) => (
          <span>
            <Link
              style={{color: 'rgba(0,0,0,.5)', display: shouldShowLink(item.path)?'inline':'none'}}
              to={item.path}
            >
              <Button
                type="default" style={vsBtnStyle}
                onClick={() => onPartClick(index+1)}
              >
                {index + 1}
              </Button>
            </Link>
            <Button
              type="primary" style={Object.assign({},vsBtnPrimaryStyle,{display: shouldShowLink(item.path)?'none':'inline'})}
              onClick={() => onPartClick(index+1)}
            >
              {index + 1}
            </Button>
          </span>
        )
      )
    }
    </div>
  )
}

export default function SelectionButtons() {
  let avNames = [];
  let i = null;
  for (i in videoStore.getState()[`av${videoStore.getState().currentAv}`]) {
    avNames.push({
      title: videoStore.getState()[`av${videoStore.getState().currentAv}`][i]['title'], path: videoStore.getState()[`av${videoStore.getState().currentAv}`][i]['full_path']
    });
  }
  let SelectionList = null;
  SelectionList = () => <Buttons videoNames={avNames} />;
  return (
    <div style={{display: store.getState().selectionListDisplay === 'block' ? 'none' : 'block'}}>
      <SelectionList />
    </div>
  );
}