import React, {Component} from 'react';
import flvjs from './flv';
import './Video.css';

export default class Video extends Component {

  state = {
    checkboxField: ['isLive', 'withCredentials', 'hasAudio', 'hasVideo'],
  };

  flv_load = () => {
    console.log('isSupported: ' + flvjs.isSupported());
  };

  render() {
    return (
      <div
        id="about"
        style={{ marginTop: "6.63%", backgroundColor: "#FCFAF2", }}
      >

        <div className="mainContainer">
          <div>
            <div id="streamURL">
              <div className="url-input">
                <label for="sURL">Stream URL:</label>
                <input id="sURL" type="text" value="https://jsedu.gitee.io/fifty_tone.flv" />
                <button onclick="switch_mds()">Switch to MediaDataSource</button>
              </div>
              <div className="options">
                <input type="checkbox" id="isLive" onchange="saveSettings()" />
                <label for="isLive">isLive</label>
                <input type="checkbox" id="withCredentials" onchange="saveSettings()" />
                <label for="withCredentials">withCredentials</label>
                <input type="checkbox" id="hasAudio" onchange="saveSettings()" checked />
                <label for="hasAudio">hasAudio</label>
                <input type="checkbox" id="hasVideo" onchange="saveSettings()" checked />
                <label for="hasVideo">hasVideo</label>
              </div>
            </div>
            <div id="mediaSourceURL" className="hidden">
              <div className="url-input">
                <label for="msURL">MediaDataSource JsonURL:</label>
                <input id="msURL" type="text" value="http://127.0.0.1/flv/7182741.json" />
                <button onclick="switch_url()">Switch to URL</button>
              </div>
            </div>
          </div>
          <div className="video-container">
            <div>
              <video name="videoElement" className="centeredVideo" controls autoplay>
                Your browser is too old which does not support HTML5 video.
              </video>
            </div>
          </div>
          <div className="controls">
            <button onClick="flv_load()">Load</button>
            <button onClick="flv_start()">Start</button>
            <button onClick="flv_pause()">Pause</button>
            <button onClick="flv_destroy()">Destroy</button>
            <input style={{width:'100px',}} type="text" name="seekpoint"/>
            <button onClick="flv_seekto()">SeekTo</button>
          </div>
          <textarea name="logcatbox" className="logcatBox" rows="10" readonly></textarea>
        </div>

      </div>        
    );
  }
}