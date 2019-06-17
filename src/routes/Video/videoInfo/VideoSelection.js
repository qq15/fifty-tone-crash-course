import React, { PureComponent } from 'react';
import videoStore from '../videoStore';
import store from './videoInfoStore';
import SelectionList from './selectionList';
import SelectionButtons from './SelectionButtons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const onSlectionClick = () => {
  store.dispatch({
    type: "changeSelectionListDisplay",
  });
  store.dispatch({
    type: "changeSelectionIcon",
  });
}

export default class VideoSelection extends PureComponent {
  render() {
    videoStore.subscribe(() => this.forceUpdate());
    store.subscribe(() => this.forceUpdate());

    return(
      <div
        style={{
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
          display: store.getState().videoSelectionDisplay,
        }}
      >
        <span
          style={{fontSize: '0.9em',}}
        >
          视频选集&nbsp;
          <FontAwesomeIcon
            icon={store.getState().selectionIcon} color="#696969"
            style={{ marginLeft: "0.25em", fontSize: '0.8em',}}
            onClick={onSlectionClick}
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
        <SelectionList style={{display: "block"}}/>
        <SelectionButtons />
      </div>
    );
  }
}