import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import AccountItem from './AccountItem';
import { getTransactionAction } from '../store/modules/transaction/actions';

class SideBar extends Component {
  constructor() {
    super();
    this.state= { status:true, topMenu:true }
    this.acctToggle = this.acctToggle.bind(this);
    this.getTransaction = this.getTransaction.bind(this);
  }
  acctToggle() {
    this.setState(prevState => ({
      status: !prevState.status
    }))
  }
  getTransaction(acctNumber) {
    this.props.getTransactionAction(acctNumber);
  }
  render() {

    const changeState = this.state.status?'none':'block';
    const menuToggle = this.state.topMenu?'none':'block';
    return (
      <div className="left mainSideBar">
              <div className="row">
                <div className="col-8-lg sideBar">
                  <aside>
                    <div><img src="../images/logo2.png" alt="" className="logo" /></div>   
                    <div className="sideBarTitle">Client User</div>
                    <ul className="sideMenu">
                      <li className="userProfiles">
                        - &nbsp; 
                        <Link to='/user-profile' data-title="Profile Details" >Profile</Link>
                      </li>
                      <li className="accountForms"><span className="fa fa-book" /> 
                        <Link to='/create-account' data-title="Create Account" >Create Bank Account</Link>
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
    )
  }
}
const mapStateToProps = state => ({
  userProfile: state.profileReducer.profile,
  account: state.accountReducer.account
});

const mapDispatchToProps = {
  getTransactionAction
}
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);