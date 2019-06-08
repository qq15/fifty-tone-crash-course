import React from 'react';
import { Card, Collapse, Icon, Select } from 'antd';
import store from '../../Store';
import JPMapImgURL from '../../assets/images/JP_map.png';
import './Jp_scripts.css';

const { Panel } = Collapse;
const { Option } = Select;

function callback(key) {
  console.log(key);
}

const JP_scripts_text = `
  日语由名为“平假名”和“片假名”的两种拼音文字（被称为假名）组成，
  它们是这门语言中同一组声音的两个版本。平假名和片假名由不到50个
  “字母”组成，这些字母其实是从汉字草书和楷书中挑选来构造拼音文字的。
  日语也使用汉字大量用于日文写作。日语书面语中的大多数单词都是用汉
  字(Kanji)写的。存在超过40000个汉字，其中约2000个代表超过95%的
  实际用于书面文字的字符。日语中没有空格，因此在区分句子中单独单词时
  需要使用汉字。汉字也可用于区分同音异义词，鉴于日语的有限发音，
  这种情况经常发生在日语中。
`;
const Hiragana_text = `
  平假名是日语的基本拼音文字(phonetic script),它代表日语的每个发音。
  因此，理论上你可以用平假名组成任何日语句子。然而，日语句子是没有空格的，
  所以这将创建几乎无法解读的文本。
`;

const Katakana_text_1 = `
  片假名主要用于从外语引进的词。它也可以用于强调一些词，类似斜体在英语中的功能。
  有关更完整的用法列表，请参阅关于片假名的
`

const Katakana_text_2 = `
  。片假名和平假名代表同一组拼音，只是字形不一样。
`

const Kanji_text = `
  在日语中，名词、形容词和动词几乎都是用汉字写的。副词也经常是用汉字写的。这意味着
  你需要会繁体字以阅读大部分日语句子（儿童书籍和其它假设读者不会许多汉字的读物例外）。
`

const genExtra = () => (
  <Icon
    type="setting"
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);

class FoldingPannel extends React.Component {
  state = {
    expandIconPosition: 'left',
  };

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };

  render() {
    const { expandIconPosition } = this.state;
    return (
      <Card 
        loading={store.getState().logoIsLoading}
        style={{ width: "60%", display: "inline-block", marginTop: "-5%", }}
      >
        <Collapse
          defaultActiveKey={['1']}
          onChange={callback}
          expandIconPosition={expandIconPosition}
        >
          <Panel header="文字" key="1" extra={genExtra()}>
            <div>{JP_scripts_text}</div>
          </Panel>
          <Panel header="平假名" key="2" extra={genExtra()}>
            <div>{Hiragana_text}</div>
          </Panel>
          <Panel header="片假名" key="3" extra={genExtra()}>
            <div>
              {Katakana_text_1}
              <a href="https://en.wikipedia.org/wiki/Katakana#Usage">维基百科条目</a>
              {Katakana_text_2}
            </div>
          </Panel>
          <Panel header="汉字" key="4" extra={genExtra()}>
            <div>{Kanji_text}</div>
          </Panel>
        </Collapse>
        <br />
        Expand Icon Position:{' '}
        <Select value={expandIconPosition} onChange={this.onPositionChange}>
          <Option value="left">left</Option>
          <Option value="right">right</Option>
        </Select>
      </Card>
    );
  }
}

const ExtraContent = (props) => (
  <div className="extraContent"
    style={{ display: "inline-block", marginLeft: "5%", }}
  >
  <Card
    loading= {store.getState().logoIsLoading}
    hoverable
    style={{ width: 240 }}
    cover={<img alt="the map of Japan" src={JPMapImgURL} j/>}
  >
    <Card.Meta
      title="资料来源"
      description="baike.sogou.com"
    />
  </Card>
  </div>
)

const JpScripts = (props) => (
  <div id="JpScripts" style={{marginTop: "6%", marginBottom: "4%", }}>
    <FoldingPannel />
    <ExtraContent />
  </div>
);

export default JpScripts;