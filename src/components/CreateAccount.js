import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import {withRouter} from 'react-router-dom';
import AccountList from './AccountList';
import { getAccountAction } from '../store/modules/bankAccount/actions'

const newAccount = () => {

}
class CreateAccount extends Component  {
  constructor() {
    super();
    this.state = {
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
  componentDidMount () {
    this.props.getAccountAction();
  }

  render() {
    
     const {userProfile} = this.props;
    return (
      <div>
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
  )
}
}
const mapStateToProps = state => ({
  account: state.accountReducer.account
});
const mapDispatchToProps = {
  getAccountAction
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateAccount));