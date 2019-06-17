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
  return (
    <div>
    {
      props.videoNames.map((item, index) => (
        <Link to={item.path}>
          <ul
            key={index}
            onClick={() => onPartClick(index+1)}
            style={{display: 'block', color: 'rgba(0,0,0,.5)', fontSize: '0.72em', marginTop: '1.6em', marginBottom: '1em' }}
          >
            P{index+1} {item.title}
          </ul>
          </Link>
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