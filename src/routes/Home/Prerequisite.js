import React from 'react';
import { Card } from 'antd';


export default function Prerequisite () {
  return (
    <React.Fragment>
      <Card title="前置知识" style={{ width: 300, margin: '0px 500px 60px 500px' }}>
        <p style={{textAlign: "left"}}>&nbsp;&nbsp;就像英语有26个字母一样，日语有46个常用假名，历史上，常用假名的数量在一直五十个左右，所以日语的所有假名也叫五十音。</p>
        <p style={{textAlign: "left"}}>&nbsp;&nbsp;英文字母有小写大写之分，假名也有平假名和片假名之分。英文中，小写字母出现频率更高，日语中，平假名的出现概率更高。</p>
        <p style={{textAlign: "left"}}>&nbsp;&nbsp;英语有26个字母表，日语也有五十音图。</p>
        <p style={{textAlign: "left"}}>&nbsp;&nbsp;<strong>下面是日语的一些<em>基本概念</em></strong></p>
      </Card>
    </React.Fragment>
  );
}