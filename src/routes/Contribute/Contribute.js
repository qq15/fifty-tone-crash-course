import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal, faBitcoin, faEthereum, faWeixin, faAlipay } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons'
import QRcode from './QRcode.js';
import './Contribute.css';

export default class Home extends Component {
  state = {
    m: '',
  };

  render() {
    return (
      <div id="Contribute">
        <h1>贡献</h1>
        <p className="contribute">
          Fifty-tone Crash Course 是一个<br />
          以 MIT 许可证开源的项目，可以<br />
          完全免费使用。然而，这个项目<br />
          的维护和开发成本使其无法在没<br />
          没有足够经济支持下运作。你可<br />
          以通过以下方式贡献这个项目：
        </p>
        <h2 className="content">捐助</h2>
        <p className="donation">本站接受以下渠道的捐助:</p>
        <ul>
          <li key="Paypal">
            <a href="https://paypal.me/zy2019" className="paypal">
              <FontAwesomeIcon icon={faPaypal} size="2x" />
            </a>
            PayPal
          </li>
          <li key="Alipay" onClick={()=>this.setState({m:'Alipay'})}>            
            <FontAwesomeIcon icon={faAlipay} size="2x" color="rgb(17,136,170)" />
            Alipay
          </li>
          <li key="Wechat" onClick={()=>this.setState({m:'Wechat'})}>
            <FontAwesomeIcon icon={faWeixin} size="2x" color="green" />
            Wechat
          </li>
          <li key="Bitcoin" onClick={()=>this.setState({m:'Bitcoin'})}>
            <FontAwesomeIcon icon={faBitcoin} size="2x" color="orange"/>
            Bitcoin
          </li>
          <li key="Ethereum" onClick={()=>this.setState({m:'Ethereum'})}>
            <FontAwesomeIcon icon={faEthereum} size="2x" />
            Ethereum
          </li>
        </ul>
        <QRcode m={this.state.m} />
        <h2 className="star">收藏</h2>
        <p className="star">
          收藏本项目可以增加人气，<br />
          作者在这里求个 Star:
          <a href="https://gitee.com/jsedu/fifty-tone-crash-course">
            <FontAwesomeIcon icon={faStar} size="2x" color="#696969"
              style={{ marginLeft: "0.25em",}}
            />
          </a>
        </p>
      </div>
    );
  }
}