import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { modalToggle, modalToggle2, closeModal} from '../store/modules/modals/actions';
import { authAction } from '../store/modules/auth/actions';
import checkUserType from '../utils/checkUserType'

class SignUpModal extends Component {
  constructor() {
    super();
    this.handleInputFieldChange = this.handleInputFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isLoading = false;
    this.state = {
      submittting: false,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      cPassword: '',
      errors: {
        firstNmae: '',
        lastName: '',
        email: '',
        password: '',
        cpassword: ''
      }
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    const { firstName, lastName, email, password, cpassword } = this.state;

    const { authAction: signinAction } = this.props;
    const errors = {};
    if (!firstName) errors.firstName = 'Firstname cannot be empty';
    if (!lastName) errors.lastName = 'Lastname cannot be empty';
    if (!email) errors.email = 'Email cannot be empty';
    if (!password) errors.password = 'Password cannot be empty';
    if (!cpassword) errors. cpassword = 'Comfirm password cannot be empty';
    if (Object.keys(errors).length) {
      this.setState(prevState => ({
        ...prevState,
        errors: {
          ...errors
        }
      }));
      return;
    }
    const {
      history
    } = this.props;
    const  url = checkUserType();
    // this.setState({ submittting: true });
    signinAction({ userData: { firstName, lastName, email, password, cpassword }, history, url });
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
    const {
      errors: { firstName: firstNameError, lastName: lastNameError,
        email: emailError, password: passwordError , cpassword: cpasswordError }
    } = this.state;
    const {closeModal, signupDisplay, page, modalToggle, modalToggle2 } = this.props;
    
    return (
      <div className="modal" style={{display: signupDisplay}}>
        <div className="modal-content">
          <header>
            <a href="javascript:;" title="Close" className="modal-close" onClick={closeModal}>&times;</a>
            <h1>USER SIGN UP PAGE</h1>
            <p>Enter Your Sign-Up Details To Create An Account</p>
          </header>
          <form onSubmit={this.handleSubmit}>
          <div className="modal-body">
            <div className="row loginForm">
              <label>First Name</label>
              <div className="col-xs-12 col-sm-12 col-lg-12">
                <input type="text" className="input-block" name="firstName"
                 id="firstName" placeholder="Enter first name" required onChange={this.handleInputFieldChange} />
                {!!firstNameError && (
                  <span className="text-red-600 text-xs">{firstNameError}</span>
                )}
              </div>
              <label>Last Name</label>
              <div className="col-xs-12 col-sm-12 col-lg-12">
                <input type="text" className="input-block"  name="lastName"
                id="lastName" placeholder="Enter Last name" required onChange={this.handleInputFieldChange} />
                {!!lastNameError && (
                  <span className="text-red-600 text-xs">{lastNameError}</span>
                )}
              </div>
              <label>Email Address</label>
              <div className="col-xs-12 col-sm-12">
                <input type="email" className="input-block" name="email" 
                 id="email" placeholder="Enter email address" required onChange={this.handleInputFieldChange} />
                {!!emailError && (
                  <span className="text-red-600 text-xs">{emailError}</span>
                )}
              </div>
              <label>Password</label>
              <div className="col-xs-12 col-sm-12 col-lg-12">
                <input type="password" className="input-block" required name="password"
                 id="password" placeholder="Enter password" onChange={this.handleInputFieldChange} />
                 {!!passwordError && (
                  <span className="text-red-600 text-xs">{passwordError}</span>
                )}
                </div>
                <label>Confirm Password</label>
                <div className="col-sx-12 col-sm-12 col-lg-12">
                  <input type="password" className="input-block" required name="cpassword"
                  id="cpassword" placeholder="Enter password" onChange={this.handleInputFieldChange} />
                  {!!cpasswordError && (
                    <span className="text-red-600 text-xs">{cpasswordError}</span>
                  )}
                </div>
                <div className="col-xs-12 col-sm-12 col-lg-12">
                <button className="btn btn-pink btn-full"  type="submit" >Sign Up</button><br/>
                <br/>
                <a href="javascript:;" className="sign" onClick={modalToggle}>Don't have an account? <span  className="btn-yellow-test">[SIGN IN]</span></a>
              </div>
            </div>
          </div> 
          </form> 
        </div>
      </div>
    )
  }
}
  
const mapStateToProps = state => ({
  signupDisplay: state.modalStatus.signupDisplay,
  page: state.modalStatus.page
});
const mapDispatchToProps = {
  modalToggle, modalToggle2, closeModal, authAction
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpModal));