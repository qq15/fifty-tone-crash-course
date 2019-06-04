import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom'

const SimpleIntro = (props) => (
  <div id="scripts">
    文字
  </div>
);

const HiraganaIntro = (props) => (
  <div id="hiraganaIntro">
    hiragana
  </div>
);

const KatakanaIntro = (props) => (
  <div id="katakanaIntro">
    katakana
  </div>
);

const Intro = (props) => (
  <HashRouter>
    <Switch>
      <Route path="/" component={SimpleIntro} />
      <Route path="/hiragana" component={HiraganaIntro} />
      <Route path="/katakana" component={KatakanaIntro} />
    </Switch>
  </HashRouter>
)

export default Intro;