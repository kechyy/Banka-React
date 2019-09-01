import React, { Component } from 'react';
import logo from '../assets/images/logo.png';
class HomeHeader extends Component {
  render(){
    return (
      <header>
          <div className="container-home homeHeader">
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <img src={ logo } />
            </div>
            <div className="col-lg-6 col-sm-6 col-sx-12">
              <nav>
                <ul className="home-menu">
                  <li><a href="">HOME</a></li>
                  <li><a href="">ABOUT</a></li>
                  <li><a href="">SERVICES</a></li>
                  <li><a href="">CONTACT US</a></li>
                </ul>
              </nav>
            </div>
          </div>
      </div>
    </header>
    
    )
  }
}
export default HomeHeader;