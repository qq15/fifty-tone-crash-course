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

/*
const aURL = require('../../../assets/audio/1.mp3');
const kaURL = require('../../../assets/audio/2.mp3');
const saURL = require('../../../assets/audio/3.mp3');
const taURL = require('../../../assets/audio/4.mp3');
const naURL = require('../../../assets/audio/5.mp3');
const haURL = require('../../../assets/audio/6.mp3');
const maURL = require('../../../assets/audio/7.mp3');
const yaURL = require('../../../assets/audio/8.mp3');
const raURL = require('../../../assets/audio/9.mp3');
const waURL = require('../../../assets/audio/10.mp3');
const audioList = [
  aURL, kaURL, saURL, taURL, naURL, haURL, maURL, yaURL, raURL, waURL
];
      <ReactPlayer
        style={playerStyle}
        url={aURL}
        controls={true}
        playing={false}
      />
      <Card
        title="あ行" style={cardStyle}
      >
        あ(a) い(i) う(u) え(e) お(o) 这5个音是日语的5个元音,其它41个都是辅音
      </Card>
      <ReactPlayer
        style={playerStyle}
        url={kaURL}
        controls={true}
        playing={false}
      />
      <Card
        title="か行" style={cardStyle}
      >
        か(ka) き(ki) く(ku) け(ke) こ(ko)
      </Card>
      <ReactPlayer
        style={playerStyle}
        url={saURL}
        controls={true}
        playing={false}
      />
      <Card
        title="さ行" style={cardStyle}
      >
        さ(sa) し(shi) す(su) せ(se) そ(so)
      </Card>
      <ReactPlayer
        url={taURL}
        style={playerStyle}
        controls={true}
        playing={false}
      />
      <Card
        title="た行" style={cardStyle}
      >
        た(ta) ち(chi) つ(tsu) て(te) と(to)
      </Card>
      <ReactPlayer
        url={naURL}
        style={playerStyle}
        controls={true}
        playing={false}
      />
      <Card
        title="な行" style={cardStyle}
      >
        な(na) に(ni) ぬ(nu) ね(ne) の(no)
      </Card>
      <ReactPlayer
        url={haURL}
        style={playerStyle}
        controls={true}
        playing={false}
      />
      <Card
        title="は行" style={cardStyle}
      >
        は(ha) ひ(hi) ふ(hu) へ(he) ほ(ho)
      </Card>
      <ReactPlayer
        url={maURL}
        style={playerStyle}
        controls={true}
        playing={false}
      />
      <Card
        title="ま行" style={cardStyle}
      >
        ま(ma) み(mi) む(mu) め(me) も(mo)
      </Card>
      <ReactPlayer
        url={yaURL}
        style={playerStyle}
        controls={true}
        playing={false}
      />
      <Card
        title="や行" style={cardStyle}
      >
        や(ya) (i) ゆ(yu) (e) よ(yo)
      </Card>
      <ReactPlayer
        url={raURL}
        style={playerStyle}
        controls={true}
        playing={false}
      />
      <Card
        title="ら行" style={cardStyle}
      >
        ら(ra) り(ri) る(lu) れ(re) ろ(ro)
      </Card>
      <ReactPlayer
        url={waURL}
        style={playerStyle}
        controls={true}
        playing={false}
      />
      <Card
        title="わ行" style={cardStyle}
      >
        わ(wa) (i) (u) (e) を(wo) ん(n)
      </Card>
*/