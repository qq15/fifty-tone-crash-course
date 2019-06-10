import React from 'react';
import Barra from './barrage/index';
import initialSize from './utils/flexiable';
import './common/css/common.css';


initialSize(window, window['lib'] || (window['lib'] = {}));

const list=[
  "发送弹幕吧",
];
const colorConfig = {random: false, colorList: ['red'],};

export default function BulletScreen(props) {
  return (
    <Barra
      className="barra"
      barrageList={list}
      color={colorConfig}
      style={{ font: '3em', marginTop: '-70em' }}
    />
   );
}