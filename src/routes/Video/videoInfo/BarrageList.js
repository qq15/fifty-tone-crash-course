import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import store from './videoInfoStore';


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

const onExpandClick = () => {
    store.dispatch({
      type: "changeTimeLineDisplay",
    });
    store.dispatch({
      type: "changeBarrageListStatus",
    });
  }

export default class BarrageList extends PureComponent {
  render() {
    store.subscribe(() => this.forceUpdate());
    return (
      <div
        onClick={onExpandClick}
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
      >
        {store.getState().barrageListStatus}</span>
      </div>
    )
  }
}