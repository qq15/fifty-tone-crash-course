import React from 'react';
import videoStore from '../videoStore';
import store from './videoInfoStore';
import { Link } from 'react-router-dom';

const onPartClick = (num) => {
  videoStore.dispatch({
    type: "changeCurrentPartTo" + String(num),
  });
  store.dispatch({
    type: "clearBullets",
  });
}

function PList(props) {
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
          <ul
            key={index}
            style={{display: 'block', color: 'rgba(0,0,0,.5)', fontSize: '0.72em', marginTop: '1.6em', marginBottom: '1em' }}
          >
            <Link style={{color: 'rgba(0,0,0,.5)',display: shouldShowLink(item.path)? 'block':'none'}} to={item.path}
              onClick={() => onPartClick(index+1)}
            >
              P{index+1} {item.title}
            </Link>
            <li style={{display: shouldShowLink(item.path)? 'none':'block'}}>
              P{index+1} {item.title}
            </li>
          </ul>
        )
      )
    }
    </div>
  )
}

export default function SelectionList() {
  let avNames = [];
  let i = null;
  for (i in videoStore.getState()[`av${videoStore.getState().currentAv}`]) {
    avNames.push({
      title: videoStore.getState()[`av${videoStore.getState().currentAv}`][i]['title'], path: videoStore.getState()[`av${videoStore.getState().currentAv}`][i]['full_path']
    });
  }
  let SelectionList = null;
  SelectionList = () => <PList videoNames={avNames} />;
  return (
    <div style={{display: store.getState().selectionListDisplay}}>
      <SelectionList />
    </div>
  );
}