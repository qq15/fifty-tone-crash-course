import React, { Component } from 'react';
import { Menu, Icon, Popover, Button } from 'antd';
import './HeadNav.less';
import { ThemeContext } from '../theme';
import { Link } from 'react-router-dom';
import store from '../Store';

const shareContent = (
  <div>
    <p><a href="https://www.douban.com">豆瓣</a></p>
    <p><a href="https://weibo.com">微博</a></p>
  </div>
);

export default class HeadNav extends Component {
  static contextType = ThemeContext;

    onChangeTheme = async (evt) => {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("changeTheme"), 3000);
      });
      store.dispatch({
        type: "changeTheme",
      });
      const result = await promise;
      store.dispatch({
        type: result,
      });
    }

  state = {
    current: 'home',
    isLoading: true,
  };
  handleClick = (e) => {
    this.setState(Object.assign(this.state, {current: e.key},));
  };

  render() {
    store.subscribe(() => this.setState(
      Object.assign({}, this.state, store.getState().logoIsLoading)
    ));

    return (
      <div id="HeadNav">
        <ThemeContext.Consumer>
          {theme => (
            <div className="nav-wrap">
              <div className="nav-logo-wrap">
                <Icon type={store.getState().theme} 
                  className="nav-logo"
                  onClick={this.onChangeTheme}
                >
                </Icon>
              </div>
              <div className="nav-list-wrap">
                <Menu
                  selectedKeys={[this.state.current]}
                  mode="horizontal"
                  onClick={this.handleClick}
                >
                  <Menu.Item key="home">
                    <Link to="/home">
                      <Icon type="home" />首页
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="aboutme">
                    <Link to="/home/video">
                      <Icon type="video-camera" />视频
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="share">
                    <Link to="/home/">
                      <Icon type="share-alt" />
                      <Popover content={shareContent}
                        title="SNS" trigger="hover"
                      >
                        <Button ghost type="primary">分享</Button>
                      </Popover>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="contribute">
                    <Link to="/home/contribute">
                      <Icon type="money-collect" />
                      贡献
                    </Link>
                  </Menu.Item>
                </Menu>
              </div>
            </div>
          )}
        </ThemeContext.Consumer>
      </div>
    )
  }
}