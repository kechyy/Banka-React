import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import {withRouter} from 'react-router-dom';
import AccountList from './AccountList';
import { getAccountAction, accountAction } from '../store/modules/bankAccount/actions';
import { profileAction } from '../store/modules/userProfile/actions';
import SideBar from './SideBar';
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';

class CreateAccount extends Component  {
  constructor() {
    super();
    this.state = {
      title: 'Bank Account',
      type: '',
      errors: {
        type: '',
      }
    } 
    this.createNewAccount = this.createNewAccount.bind(this)
    this.handleInputFieldChange = this.handleInputFieldChange.bind(this )
  }

  createNewAccount(e) {
    e.preventDefault();
    const { type } = this.state;
    const { accountAction } = this.props;
    const errors = {};
    if (!type) errors.type = 'Account type cannot be empty';
    if (Object.keys(errors).length) {
      this.setState(prevState => ({
        ...prevState,
        errors: {
          ...errors
        }
      }));
      return;
    }
    accountAction({ type });
  }
  componentDidMount () {
    document.body.className = 'main-body';
    this.props.getAccountAction();
    this.props.profileAction(); 
  }

  handleInputFieldChange(event) {
    const {
      target: { name, value }
    } = event;
    this.setState(prevState => ({
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: ''
      }
    }));
  }
 
  

  render() {
    
     const {userProfile} = this.props;
    return (
      <div>
        <MainHeader />
        <main>
          <div className="wrapper ">
            <SideBar />
            <div className="right">
              <div className="row">
                <div className="col-12-lg mainContent">
                  <h2 id="contentMainTitle" >User Account Page</h2>
                  <header className="mainTitle">
                    <div className="row ">
                      <div className="col-12-md">
                        <h3 id="contentSubTitle" >{this.state.title}</h3>
                      </div>
                    </div>
                  </header>
                  <aside className="rightSideBar">
                    <div className="row" id="userMain">
                    <div style={{'width':'100%'}} >
                      <div className="col-8-md acctDetails">
                      <form onSubmit={this.createNewAccount}>
                        <div className="row createAcct">
                          <div className="col-6-md col-12-xs">
                            <label htmlFor="true">First Name</label>
                            <input type="text" className="input-block" defaultValue={userProfile.firstname} disabled />
                          </div>
                          <div className="col-6-md col-12-xs">
                            <label htmlFor="true">Last Name</label>
                            <input type="text" className="input-block" defaultValue={userProfile.lastname} disabled />
                          </div>
                          <div className="col-6-md col-12-xs">
                            <label htmlFor="true">Email Address</label>
                            <input type="email" className="input-block" defaultValue={userProfile.email} disabled />
                          </div>
                          <div className="col-6-md col-12-xs">
                            <label htmlFor="accountType" className="required">Account type <span>*</span></label>
                            <select className="input-block" required id="type" name="type" onChange={this.handleInputFieldChange}>
                              <option value="">--Select Account Type--</option>
                              <option value="savings">Savings</option>
                              <option value="current">Current</option>
                            </select>
                          </div>
                          <div className="col-6-md col-12-xs">
                            <input type="submit" className="btn btn-blue createAccountBtn" id="createAccountBtn" defaultValue="Create Account" />
                          </div>
                        </div>
                      </form>
                      <div className="row ">
                          <div className="col-12-xs col-12-md table">
                            <table cellPadding={0} cellSpacing={0}>
                              <thead>
                                <tr>
                                  <th>S/N</th>
                                  <th>Account Number</th>
                                  <th>Account type</th>
                                  <th>Account Balance</th>
                                  <th>Account Status</th>
                                  <th>Created Date</th>
                                </tr>
                              </thead>
                              <tbody>
                                { this.props.account.map((acct, y) => {
                                    return <AccountList accounts={acct} i={y}  />
                                })}
                              </tbody>
                            </table>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              </div> 
            </div>
          </div>
        </main>
       <MainFooter />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  account: state.accountReducer.account,
  userProfile: state.profileReducer.profile
});
const mapDispatchToProps = {
  getAccountAction,  profileAction, accountAction
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateAccount));