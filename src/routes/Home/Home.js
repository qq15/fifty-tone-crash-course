import React, {Component} from 'react';
import { Card, Carousel } from 'antd';
import JpScripts from './JP_scripts';
import FiftyToneMap from './FiftyToneMap';
import threeWay1ImgURL from '../../assets/images/threeWay1.png';
import threeWay2ImgURL from '../../assets/images/threeWay2.png';
import threeWay3ImgURL from '../../assets/images/threeWay3.png';
import hiraMnemonicsURL from '../../assets/images/hira_mnemonics.png';
import vsImgURL from '../../assets/images/hiraganakatakana2.png';
import JpAlphaImgURL from '../../assets/images/Japanese-alphabet.jpg';
import './Home.css';

const { Meta } = Card;

class TopCarousel extends Component {
  render () {
    return (
      <div style={{ marginTop: '0.03em', }}>
      <Carousel autoplay slide style={{ marginTop: 10, }} effect="fade" >
        <div className="bing">
          <img src={vsImgURL}
            style={{ width: '14%', height:'14%' }}
            alt="Hiragana vs Katakana" 
          />
        </div>

        <div className='img'>
          <ul style={{ marginTop: '2.3em', }}>
            <li>
              <img
                src={threeWay1ImgURL} alt="'Japan' in Hiragana"
                style={{ width: '93%', height:'93%' }}
              />
            </li>
            <li>
              <img
                style={{ width: '93%', height:'93%' }}
                src={threeWay2ImgURL} alt='Japan in Katakana'
              />
            </li>
            <li>
              <img
                style={{ width: '93%', height:'93%' }}
                src={threeWay3ImgURL} alt='Japan in Kanji'
              />
            </li>
          </ul>
        </div>
        <div>
          <img
            style={{ width: '16%' }}
            src={JpAlphaImgURL}
            alt=''
          />
        </div>
      </Carousel>
      </div>
    );
  }
}

const Charts = () => (
  <div>
    <Card
      hoverable
      style={{ width: '50%', margin: 'auto' }}
      cover={<img alt="Hiragana mnemonics" src={hiraMnemonicsURL} />}
    >
      <Meta title="平假名助记符(Hiragana Mnemonics)" description="www.nippon.com" />
    </Card>
  </div>
);

const Home = (props) => (
  <div id="Home">
    <TopCarousel />       
    <JpScripts />
    <Card title="写一写" style={{ width: 350, margin: '60px 400px 10px 720px'}}>
      <p>点击录像机图标进入对应假名的书写视频页面</p>
    </Card>
    <FiftyToneMap />
    <Card
      title="有英语基础的同学可以读这篇文章"
      style={{ width: 350, margin: '60px 400px 10px 720px'}}
    >
      <p><a
        href="https://www.nippon.com/en/views/b05603/hiragana-the-first-building-block-of-written-japanese.html"
      >
        平假名：日语的第一个基石。 
      </a></p>
      <p>有英语基础的同学会发现下面这张图很有意思。</p>
    </Card>
    <Charts />
  </div>
)
export default Home;