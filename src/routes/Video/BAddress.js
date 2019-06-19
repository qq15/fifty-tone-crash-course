import React, {PureComponent} from 'react';
import { Card, Icon } from 'antd';
import videoStore from './videoStore';


const addressCardStyle = {
  borderRadius: 4,
  marginBottom: '0.59em',
  height: '11em',
  overflow: 'hidden',
};

export default class BAddress extends PureComponent {
  render() {
    videoStore.subscribe(() => this.forceUpdate());
    let avNames = [];
    for (let i in videoStore.getState()[`av${videoStore.getState().currentAv}`]) {
      avNames.push({
        title: videoStore.getState()[`av${videoStore.getState().currentAv}`][i]['title'],
        bav: videoStore.getState()[`av${videoStore.getState().currentAv}`][i]['bav'],
        part: videoStore.getState()[`av${videoStore.getState().currentAv}`][i]['part'],
      });
    }
    return (
      <Card
        title="视频原址"
        extra={<Icon type="youtube" theme="filled" style={{ fontSize: '1.5em', color: '#f00' }} />}
        style={addressCardStyle}
      >
      {
        avNames.map(
          (item, index) => (
            <p>
            <a href={`https://www.bilibili.com/video/av${item.bav}/?p=${item.part}`}>{item.title}</a>
            </p>
        ))
      }
      </Card>
    );
  }
}