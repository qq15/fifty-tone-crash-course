import React, { PureComponent } from 'react';
import { Typography } from 'antd';


const { Title, Paragraph } = Typography;

export default class Tests extends PureComponent {
  render() {
    return (
      <React.Fragment>
      <Title>自我评价</Title>
      <Paragraph>
        五十音是日语的基础，重点有三块：发音、听力和书写。如果满分是100的话，那么发音和听力都是30分，书写是40分。
      </Paragraph>
      <Title level={2}>你觉得自己能得多少分呢？</Title>
      </React.Fragment>
    );
  }
}