import React, { PureComponent } from 'react';
import { Icon, Table } from 'antd';
import store from '../../Store';
import { Link } from 'react-router-dom';

const getNum = str => {
    const arr = str.match(/.*?(\d+)?/g).filter( i => i !== '');
    return arr[0];
  }

export default class FiftyToneMap extends PureComponent {

  render() {

    return (
      <React.Fragment>
      <div style={{ marginTop: '1em', paddingTop: '1em', }}>
        <div className="title">
          <p><Icon type="table" />&nbsp;五十音图</p>
        </div>
        <div className="description">
          <p>50トーンマップ</p>
        </div>
      <Table columns={columns} dataSource={data} 
        scroll={{ x: 1300 }} loading={store.getState().logoIsLoading}
      />
      </div>
      </React.Fragment>
    );
  }
}

const columns = [
  {
    title: '',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'あ段',
    dataIndex: 'a_p',
    key: '0',
    render: (text) => (
      <span>
        <Link to={`/video/av6/?p=${getNum(text)}`}>
          <Icon type="video-camera" theme="twoTone" style={{display: text === '' ? 'none' : 'inline'}} />
        </Link>&nbsp;
        {text.slice(0,6)}
      </span>
    ),
  },
  {
    title: 'い段',
    dataIndex: 'i_p',
    key: '1',
    render: (text) => (
      <span>
        <Link to={`/video/av6/?p=${getNum(text)}`}>
          <Icon type="video-camera" theme="twoTone" style={{display: text === '' ? 'none' : 'inline'}} />
        </Link>&nbsp;
        {text.slice(0,6)}
      </span>
    ),
  },
  {
    title: 'う段',
    dataIndex: 'u_p',
    key: '2',
    render: (text) => {
      console.log('text:', text.length,text);
      return(
      <span>
        <Link to={`/video/av6/?p=${getNum(text)}`}>
          <Icon type="video-camera" theme="twoTone" style={{display: text === '' ? 'none' : 'inline'}} />
        </Link>&nbsp;
        {text.slice(0,6)}
      </span>
      );
    },
  },
  {
    title: 'え段',
    dataIndex: 'e_p',
    key: '3',
    render: (text) => (
      <span>
        <Link to={`/video/av6/?p=${getNum(text)}`}>
          <Icon type="video-camera" theme="twoTone" style={{display: text === '' ? 'none' : 'inline'}} />
        </Link>&nbsp;
        {text.slice(0,6)}
      </span>
    ),
  },
  {
    title: 'お段',
    dataIndex: 'o_p',
    key: '4',
    render: (text) => (
      <span>
        <Link to={`/video/av6/?p=${getNum(text)}`}>
          <Icon type="video-camera" theme="twoTone" style={{display: text === '' ? 'none' : 'inline'}} />
        </Link>&nbsp;
        {text.slice(0,6)}
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'あ行',
    a_p: 'あ アa  1',
    i_p: 'い イi  2',
    u_p: 'う ウu  3',
    e_p: 'え エe  4',
    o_p: 'お オo  5',
  },
  {
    key: '2',
    name: 'か行',
    a_p: 'か カka  6',
    i_p: 'き キki  7',
    u_p: 'く クku  8',
    e_p: 'け ヶke  9',
    o_p: 'こ コko  10'
  },
  {
    key: '3',
    name: 'さ行',
    a_p: 'さ サsa  11',
    i_p: 'し シshi 12',
    u_p: 'す スsu  13',
    e_p: 'せ セse  14',
    o_p: 'そ ソso  15',
  },
  {
    key: '4',
    name: 'た行',
    a_p: 'た タta  16',
    i_p: 'ち チchi 17',
    u_p: 'つ ツtsu 18',
    e_p: 'て テte  19',
    o_p: 'と トto  20',
  },
  {
    key: '5',
    name: 'な行',
    a_p: 'な ナna  21',
    i_p: 'に ニni  22',
    u_p: 'ぬ ヌnu  23',
    e_p: 'ね ネne  24',
    o_p: 'の ノno  25',
  },
  {
    key: '6',
    name: 'は行',
    a_p: 'は ハha  26',
    i_p: 'ひ ヒhi  27',
    u_p: 'ふ フhu  28',
    e_p: 'へ ヘhe  29',
    o_p: 'ほ ホho  30',
  },
  {
    key: '7',
    name: 'ま行',
    a_p: 'ま マma  31',
    i_p: 'み ミmi  32',
    u_p: 'む ムmu  33',
    e_p: 'め メme  34',
    o_p: 'も モmo  35',
  },
  {
    key: '8',
    name: 'や行',
    a_p: 'や ヤya  36',
    i_p: '',
    u_p: 'ゆ ユyu  37',
    e_p: '',
    o_p: 'よ ヨyo  38',
  },
  {
    key: '9',
    name: 'ら行',
    a_p: 'ら ラra  39',
    i_p: 'り リri  40',
    u_p: 'る ルru  41',
    e_p: 'れ レre  42',
    o_p: 'ろ ロro  43',
  },
  {
    key: '10',
    name: 'わ行',
    a_p: 'わ ワwa  44',
    i_p: '',
    u_p: '',
    e_p: '',
    o_p: 'を ヲwo  45',
  },
  {
    key: '11',
    name: '拨音',
    a_p: 'ん ンn  46',
    i_p: '',
    u_p: '',
    e_p: '',
    o_p: '',
  },
];
