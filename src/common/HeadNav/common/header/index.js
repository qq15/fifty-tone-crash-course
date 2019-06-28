import React , {Component} from 'react';
import {HeaderWrapper , Logo , Nav,NavItem,NavSeach , Addition , Button,SeearchWrapper} from "./style";
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

class Header extends Component{

  constructor(props) {
    super(props);
    this.state = {
        focused: false
    };

    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }


  render() {
    return(
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className={'left active'}><Link to="/home" style={{color: "#333"}}>首页</Link></NavItem>
          <NavItem className={'left'}><Link to="/video/av1" style={{color: "#333"}}>视频</Link></NavItem>
          <NavItem className={'left'}><Link to="/home/tests" style={{color: "#333"}}>自我评价</Link></NavItem>
          <NavItem className={'right'}>已登陆</NavItem>
          <NavItem className={'right'}>
              <span className="iconfont">&#xe601;</span>
          </NavItem>
          <SeearchWrapper>
              <CSSTransition
                  in={this.state.focused}
                  timeout={200}
                  classNames="slide"
              >
                  <NavSeach
                      className={this.state.focused ? 'focused': ''}
                      onFocus={this.handleInputFocus}
                      onBlur={this.handleInputBlur}
                  ></NavSeach>
              </CSSTransition>
                  <span className={this.state.focused ? 'focused iconfont': 'iconfont'}>
                  &#xe600;
                  </span>


          </SeearchWrapper>
        </Nav>
        <Addition>
            <Button className={'writting'}>
                <span className="iconfont">&#xe616;</span>
                  <Link to="/home/contribute" style={{color: 'white'}}>贡献</Link>
            </Button>
            <Button className={'reg'}>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  handleInputFocus(){
    this.setState({
      focused: true
    })
  }

  handleInputBlur(){
    this.setState({
        focused: false
    })
  }

}

export default Header;