import Link from 'next/link'
import styled from 'styled-components'
import React from "react";
import HamburgerMenu from 'react-hamburger-menu'
import HeaderNavPC from './HeaderNavPC'

const Head = styled.header `  
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  
  .inner {
    display: flex;
  }
  
  .open.inner {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  //ホーム   
  .header__home {
    font-family: 'Avenir';
    position: fixed;
    top: 36px;
    left: 30px;
    z-index: 10000;
  }
  
  .header__home a {
    margin: 0;
    font-size: 26px;
    font-weight: bold;
  }
 
  //ハンバーガーメニュー   
  .hamburgerMenu {
    display: none;
    z-index: 10000;
    position: fixed;
    top: 27px;
    right: 20px;
  }
  
  //ハンバーガーメニューコンテンツ
  .hamburgerMenuCont.open {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.5s;
    z-index: 1500;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .hamburgerMenuCont.close {
    opacity: 0;
    visibility: hidden;
    width: 100%;
    height: 100%;
    position: fixed;
    display: table;
    background: #fff;
    transition: 0.5s;
  }
  
  /*コンテンツ*/
  .hamburgerMenuCont nav {
    color: #fff;
    font-weight: bold;
    width: 100%;
  }
  
  .hamburgerMenuCont.close nav {
    display: none;
  }
  
  .hamburgerMenuCont.open nav {
    display: block;
  }
  
  .hamburgerMenuCont a,
  .hamburgerMenuCont p {
    display: block;
    color: #000000;
    font-size: 30px;
    padding: 20px;
    text-align: center;
  }
  

  @media (max-width: 767px) {
    background: rgba(255, 255, 255, 0.4);
    height: 66px;
    
    .header__home {
      position: fixed;
      top: 20px;
      left: 20px;
    }
    
    .header__home a {
      font-size: 22px;
    }
    
    .hamburgerMenu {
      display: block;
    }
  }
`;


export default class Header extends React.Component {
  state = {
    isMenuOpen: false,
  };

  closeMenu = () => {
    this.setState({isMenuOpen: !this.state.isMenuOpen})
  };

  render() {
    return (
      <Head >
        <div className={this.state.isMenuOpen ? 'inner open' : 'inner'}>
          <div className="header__home">
          <Link href="/index">Sugu Mizuno</Link>
          </div>

          {/* PC */}
          <HeaderNavPC page={this.props.page}/>

          {/* Mobile */}
          <div className="hamburgerMenu">
            <HamburgerMenu
              isOpen={this.state.isMenuOpen}
              menuClicked={this.closeMenu}
              width={18}
              height={15}
              strokeWidth={1}
              rotate={0}
              color={this.state.isMenuOpen ? 'black' : 'black'}
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>

          <div className={this.state.isMenuOpen ? 'hamburgerMenuCont open' : 'hamburgerMenuCont close'}>
            <nav>
                { this.props.page == 'index' ? (
                  <p onClick={this.closeMenu}>WORK</p>
                  ) : (
                    <Link href="/index"><p>WORK</p></Link>
                  )
                }

              { this.props.page == 'about' ? (
                <p onClick={this.closeMenu}>ABOUT</p>
              ) : (
                <Link href="/about"><p onClick={this.closeMenu}>ABOUT</p></Link>
              )
              }
              <a href="https://drive.google.com/file/d/1YJ_eICop4KHvrZxQ86Yu-Rxlnc4OtDmj/view?usp=sharing" target="_blank">RESUME</a>
            </nav>
          </div>
        </div>

      </Head>
    )
  }
}
