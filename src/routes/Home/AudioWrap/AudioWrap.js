import React, { PureComponent } from 'react'
import store from './audioStore';
import AudioPlayer from './AudioPlayer';
import { Card, Icon } from 'antd';


export default class AudioWrap extends PureComponent {
  render () {
    store.subscribe(() => this.forceUpdate());
    return (
      <React.Fragment>
      <Card title={<span><Icon type="notification" />&nbsp;听一听</span>}
        style={{ width: 350, margin: 'auto'}}
      >
        <p>点击三角形图标播放对应假名的发音</p>
      </Card>
      <AudioPlayer/>

      </React.Fragment>
    );
  }
}