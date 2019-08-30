import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { modalToggle, modalToggle2, closeModal } from '../store/modules/modals/actions';
import { authAction } from '../store/modules/auth/actions';
import checkUserType from '../utils/checkUserType'

class SignInModal extends Component {
  constructor() {
    super();
    this.handleInputFieldChange = this.handleInputFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isLoading = false;
    this.state = {
      submittting: false,
      email: '',
      password: '',
      errors: {
        email: '',
        password: ''
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const { authAction: loginAction } = this.props;
    const errors = {};
    if (!email) errors.email = 'Email cannot be empty';
    if (!password) errors.password = 'Password cannot be empty';
  
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
    const url = checkUserType();
    loginAction({ userData: { email, password, }, history, url });
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
      errors: { email: emailError, password: passwordError }
    } = this.state;
    const { signinDisplay, closeModal, modalToggle2 } = this.props
    return (
      <div className="modal" style={{display: signinDisplay}}>
        <div className="modal-content">
          <header>
            <a href="javascript:;" title="Close" className="modal-close" onClick={closeModal}>&times;</a>
            <h1>LOGIN HERE</h1>
            <p>Enter your login credentials to access this application</p>
          </header>
          <form onSubmit={this.handleSubmit}>
            <div className="modal-body">
              <div className="row loginForm">
                <label>Email Address</label>
                <div style={{width:'100%'}} >
                  <input type="email" className="input-block" name="email" required 
                  id="email" placeholder="Enter email address" onChange={this.handleInputFieldChange}/>
                  {!!emailError && (
                    <span className="text-red-600 text-xs">{emailError}</span>
                  )}
                </div>
                <label>Password</label>
                <div>
                  <input type="password" className="input-block" minLength="6" required name="password"
                   id="password" placeholder="Enter password" onChange={this.handleInputFieldChange} />
                </div>
                <div className="col-12-xs col-12-lg col-12-sm"><button className="btn btn-pink btn-full btnHover" type="submit">Sign in</button><br/><br/>
                  <a href="javascript:;" className="sign" onClick={modalToggle2}>Don't have an account? <span  className="btn-yellow-test">[SIGN UP]</span></a>
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
  signinDisplay: state.modalStatus.signinDisplay,
  page: state.modalStatus.page
});
const mapDispatchToProps = {
  modalToggle, modalToggle2, closeModal, authAction
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInModal));