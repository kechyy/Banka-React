import React, { Component } from 'react';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';
import HomeHeader from './HomeHeader';
import HomeFooter from './HomeFooter';
import HomeContent from './HomeContent';
import { connect } from 'react-redux';
import { modalToggle } from '../store/modules/modals/actions';

const Home = (props) => {
    return (
      <div className="wrapper-home">
        <HomeHeader />
        <HomeContent /> 
        <HomeFooter />
      </div>
    )
  }

const mapStateToProps = state => ({
  signinDisplay: state.modalStatus.signinDisplay,
  page: state.modalStatus.page
});
const mapDispatchToProps = {
  modalToggle
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Home);