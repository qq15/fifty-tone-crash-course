import React from 'react';
import AliImgURL from '../../assets/images/QRcode_images/Alipay.jpg';
import WechatImgURL from '../../assets/images/QRcode_images/Wechat.jpg';
import BTCImgURL from '../../assets/images/QRcode_images/btc.jpg';
import ETHImgURL from '../../assets/images/QRcode_images/eth.jpg';

const Ali = () => (
  <img
    src={AliImgURL}
    alt="Alipay"
  />
);

const WechatImg = () => (
  <img
    src={WechatImgURL}
    alt="Wechat"
  />
);

const BTC = () => (
  <img
    src={BTCImgURL}
    alt="Bitcoin"
  />
);

const ETH = () => (
  <img
    src={ETHImgURL}
    alt="Bitcoin"
  />
);

const QRcodeIMG = (props) => {
  if (props.m === 'Alipay') {
    return (
      <Ali />
    )
  } else if (props.m === 'Wechat') {
    return (
      <WechatImg />
    )
  } else if (props.m === 'Bitcoin') {
    return (
      <BTC />
    )
  } else if (props.m === 'Ethereum') {
    return (
      <ETH />
    )
  } else {
    return null;
  }
};

export default function QRcode(props) {
  return (
    <div id="QRcode"
      style={{
        display: props.m === '' ? "none" : "block" ,
      }}
    >
      <p>
        {props.m} QR code<br />
        <QRcodeIMG m={props.m} />
      </p>
    </div>
  )
}