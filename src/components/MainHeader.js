import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { logoutAction } from '../store/modules/logout/actions';
import { profileAction } from '../store/modules/userProfile/actions' ;

class MainHeader extends Component {
  constructor() {
    super();
    this.state = { status:true, topMenu:true }
    this.toggletopMenu = this.toggletopMenu.bind(this)
  }
  toggletopMenu() {
    this.setState(prevState => ({
      topMenu: !prevState.topMenu
    }))
  }
  render() {
    const changeState = this.state.status?'none':'block';
    const menuToggle = this.state.topMenu?'none':'block';
    return (
      <header className="mainHeader">
          <div className="wrapper">
            <div className="container topHeader">
              <div className="row" style={{justifyContent: 'flex-end'}}>
                <Link to='/signin' className="logout btn btn-pink" id="logout" onClick={this.props.logoutAction}>LOGOUT</Link>
                <button className="topMenu btn btn-red" style={{padding:'10px'}} onClick={this.toggletopMenu}>Menu</button>
                    <ul className="dropDown" style={{display:menuToggle}}>
                      <li className="userProfiles">
                        <a data-page="profile" data-title="Profile Details" >Profile</a>
                      </li>
                      <li className="accountForms"><span className="fa fa-book" /> 
                        <a data-page="account" data-title="Create Account" >Create Bank Account</a>
                      </li>
                    </ul>
              </div>
            </div>
          </div>
        </header>
    )
  }
}
const mapDispatchToProps = {
  logoutAction, profileAction
}
export default connect(null, mapDispatchToProps)(MainHeader);