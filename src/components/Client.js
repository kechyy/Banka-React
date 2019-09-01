import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import '../assets/css/main.css';
import Profile from './Profile';
import CreateAccount from './CreateAccount';
import Transactions from './Transactions';
import AccountItem from './AccountItem';
import { getTransactionAction } from '../store/modules/transaction/actions'
import { logoutAction } from '../store/modules/logout/actions'
import { profileAction } from '../store/modules/userProfile/actions' ;
import { accountAction, getAccountAction } from '../store/modules/bankAccount/actions'

class Client extends Component {
  constructor() {
    super();
    this.state = {page: 'profile', title: 'Profile Details', status:true, topMenu:true}
    this.setPage = this.setPage.bind(this);
    this.getPage = this.getPage.bind(this);
    this.acctToggle = this.acctToggle.bind(this)
    this.toggletopMenu = this.toggletopMenu.bind(this)
    this.getTransaction = this.getTransaction.bind(this)
  }
  componentDidMount() {
    const { profileAction } = this.props;
    document.body.className = 'main-body';
    profileAction();
  }
  componentWillMount() {
    this.props.getAccountAction();
  }
  setPage(e) {
    
    const { page, title, acctNo} = e.currentTarget.dataset;
    this.setState({ page, title });
    
  }
  getPage(page) {
    const { userProfile } = this.props;
    switch(page) {
      case 'profile': return <Profile userProfile={userProfile} />
      break;
      case 'account': return <CreateAccount {...this.props} />
      break;
      case 'transaction': return <Transactions {...this.props} />
      break;
      default : return <Profile userProfile = {userProfile} />
    }
  }
  acctToggle() {
    this.setState(prevState => ({
      status: !prevState.status
    }))
  }
  toggletopMenu() {
    this.setState(prevState => ({
      topMenu: !prevState.topMenu
    }))
  }
  
  getTransaction(acctNumber) {
    this.props.getTransactionAction(acctNumber);
    this.setState({ page: 'transaction', title: 'Transaction Details' });
  }

  render() {
    const changeState = this.state.status?'none':'block';
    const menuToggle = this.state.topMenu?'none':'block'
    const { page } = this.state;
    return (
      <div>
        <header className="mainHeader">
          <div className="wrapper">
            <div className="container topHeader">
              <div className="row" style={{justifyContent: 'flex-end'}}>
                <Link to='/' className="logout btn btn-pink" id="logout" onClick={this.props.logoutAction}>LOGOUT</Link>
                
                <button className="topMenu btn btn-red" style={{padding:'10px'}} onClick={this.toggletopMenu}>Menu</button>
                    <ul className="dropDown" style={{display:menuToggle}}>
                      <li className="userProfiles">
                        <a data-page="profile" data-title="Profile Details" onClick={this.setPage}>Profile</a>
                      </li>
                      <li className="accountForms"><span className="fa fa-book" /> 
                        <a data-page="account" data-title="Create Account" onClick={this.setPage}>Create Bank Account</a>
                      </li>
                    </ul>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="wrapper ">
            <div className="left mainSideBar">
              <div className="row">
                <div className="col-8-lg sideBar">
                  <aside>
                    <div><img src="../images/logo2.png" alt className="logo" /></div>   
                    <div className="sideBarTitle">Client User</div>
                    <ul className="sideMenu">
                      <li className="userProfiles">
                        - &nbsp; 
                        <a data-page="profile" data-title="Profile Details" onClick={this.setPage}>Profile</a>
                      </li>
                      <li className="accountForms"><span className="fa fa-book" /> 
                        <a data-page="account" data-title="Create Account" onClick={this.setPage}>Create Bank Account</a>
                      </li>
                      <li className="transact">- &nbsp; 
                      <a onClick={this.acctToggle} >Transaction History</a>
                        <ul className="sideBarDropDown" style={{display:changeState}}>
                          { this.props.account.map(accounts => {
                            return <AccountItem accountList={accounts} getTransaction={this.getTransaction} />
                          }) }
                        </ul> 
                      </li>
                    </ul>     
                  </aside>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="row">
                <div className="col-12-lg mainContent">
                  <h2 id="contentMainTitle" >User Client Page</h2>
                  <header className="mainTitle">
                    <div className="row ">
                      <div className="col-12-md">
                        <h3 id="contentSubTitle" >{this.state.title}</h3>
                      </div>
                    </div>
                  </header>
                  <aside className="rightSideBar">
                    <div className="row" id="userMain">
                      {this.getPage(page)}
                    </div>
                  </aside>
                </div>
              </div> 
            </div>
          </div>
        </main>
        <footer className="footer">
          <p>Copyright © Kecyy Banka Application all 2019 rights reserved</p>
        </footer>
      </div>
    )
  }
} 
const mapStateToProps = state => ({
  userProfile: state.profileReducer.profile,
  account: state.accountReducer.account,
  transaction: state.transactionReducer.transaction
});

const mapDispatchToProps = {
  profileAction, accountAction, getAccountAction,
  logoutAction, getTransactionAction
}
export default connect(mapStateToProps, mapDispatchToProps)(Client);