import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modalToggle, modalToggle2 } from '../store/modules/modals/actions';

const HomeContent = (props)  => {
    return (
    <div className="container-home">
      <div className="row pull-right" style={{justifyContent:'flex-end'}}>
        <div className="col-lg-6 col-sm-6 col-xs-12 frontTitle pad-top newLook">
          <h1>Banking Application</h1>
          <p className="titleTop">Banka is a light-weight core banking 
            application that powers banking operations like account creation, customer deposit and withdrawals.</p>
          <button className="btn btn-full btn-blue " id="sign_in" onClick={props.modalToggle.bind(this)}>SIGN-IN</button>
        </div>
      </div>
    </div>
    )
  }
const mapStateToProps = state => ({
  signinDisplay: state.modalStatus.signinDisplay
});
const mapDispatchToProps = {
  modalToggle, modalToggle2
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContent);