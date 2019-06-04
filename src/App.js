import React, {Component} from 'react';

import store from './Store';
import Progress from './progress/Progress'
import {ThemeContext} from './theme';
import RouterWrap from './router';
import './App.css';

const callFakeAPI = delay =>
  new Promise(resolve => {
    setTimeout(resolve, delay)
  })

class TopProgress extends React.Component {
  state = {
    isLoading: true,
  }

  async componentDidMount() {
    await callFakeAPI(3000);
    this.setState(() => ({
      isLoading: false,
    }));
  }

  render() {
    return (
      <React.Fragment>
        <Progress isAnimating={this.state.isLoading} />
      </React.Fragment>
    )
  }
}

class App extends Component {
  render() {
    store.subscribe(() => this.forceUpdate());

    return (
      <div className="App">
        <TopProgress />
        <ThemeContext.Provider value={store.getState().theme}>
          <RouterWrap />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
