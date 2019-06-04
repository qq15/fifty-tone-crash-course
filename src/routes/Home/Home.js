import React, {Component} from 'react';
import { Carousel } from 'antd';
import JpScripts from './JP_scripts';
import FiftyToneMap from './FiftyToneMap';
import './Home.css';

class TopCarousel extends Component {
  render () {
    return (
      <div style={{ marginTop: 60, }}>
      <Carousel autoplay slide style={{ marginTop: 10, }}>
        <div>
          <h3>平假名(Hiragana)</h3>
        </div>
        <div>
          <h3>片假名(Katakana)</h3>
        </div>
        <div>
          <h3>汉字(Kanji)</h3>
        </div>
        <div>
          <h3>五十音图(Fifty-tone map)</h3>
        </div>
      </Carousel>
      </div>
    );
  }
}

const Home = (props) => (
  <div id="Home">
    <TopCarousel />       
    <JpScripts />
    <FiftyToneMap />
  </div>
)
export default Home;