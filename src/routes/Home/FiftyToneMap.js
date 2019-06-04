import React, { Component } from 'react';
import { Table } from 'antd';
import store from '../../Store';

export default class FiftyToneMap extends Component {
  state = {
    logoIsLoading: false,
  };

  render() {
    store.subscribe(() => this.setState(
      Object.assign({}, this.state, store.getState().logoIsLoading)
    ));

    return (
      <Table columns={columns} dataSource={data} 
        scroll={{ x: 1300 }} loading={store.getState().logoIsLoading} />
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
  { title: 'あ段', dataIndex: 'a_p', key: '0', },
  { title: 'い段', dataIndex: 'i_p', key: '1', },
  { title: 'う段', dataIndex: 'u_p', key: '2', },
  { title: 'え段', dataIndex: 'e_p', key: '3', },
  { title: 'お段', dataIndex: 'o_p', key: '4', },
];

const data = [
  {
    key: '1',
    name: 'あ行',
    a_p: 'あ アa',
    i_p: 'い イi',
    u_p: 'う ウu',
    e_p: 'え エe',
    o_p: 'お オo',
  },
  {
    key: '2',
    name: 'か行',
    a_p: 'か カka',
    i_p: 'き キki',
    u_p: 'く クku',
    e_p: 'け ヶke',
    o_p: 'こ コko'
  },
  {
    key: '3',
    name: 'さ行',
    a_p: 'さ サsa',
    i_p: 'し シshi',
    u_p: 'す スsu',
    e_p: 'せ セse',
    o_p: 'そ ソso',
  },
  {
    key: '4',
    name: 'た行',
    a_p: 'た タta',
    i_p: 'ち チchi',
    u_p: 'つ ツtsu',
    e_p: 'て テte',
    o_p: 'と トto',
  },
  {
    key: '5',
    name: 'な行',
    a_p: 'な ナna',
    i_p: 'に ニni',
    u_p: 'ぬ ヌnu',
    e_p: 'ね ネne',
    o_p: 'の ノno',
  },
  {
    key: '6',
    name: 'は行',
    a_p: 'は ハha',
    i_p: 'ひ ヒhi',
    u_p: 'ふ フhu',
    e_p: 'へ ヘhe',
    o_p: 'ほ ホho',
  },
  {
    key: '7',
    name: 'ま行',
    a_p: 'ま マma',
    i_p: 'み ミmi',
    u_p: 'む ムmu',
    e_p: 'め メme',
    o_p: 'も モmo',
  },
  {
    key: '8',
    name: 'や行',
    a_p: 'や ヤya',
    i_p: '',
    u_p: 'ゆ ユyu',
    e_p: '',
    o_p: 'よ ヨyo',
  },
  {
    key: '9',
    name: 'ら行',
    a_p: 'ら ラra',
    i_p: 'り リri',
    u_p: 'る ルru',
    e_p: 'れ レre',
    o_p: 'ろ ロro',
  },
  {
    key: '10',
    name: 'わ行',
    a_p: 'わ ワ',
    i_p: '',
    u_p: '',
    e_p: '',
    o_p: 'を ヲwo',
  },
  {
    key: '11',
    name: '拨音',
    a_p: 'ん ンn',
    i_p: '',
    u_p: '',
    e_p: '',
    o_p: '',
  },
];
