import React, { Component } from 'react';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';
import HomeHeader from './HomeHeader';
import HomeFooter from './HomeFooter';
import HomeContent from './HomeContent';
import { connect } from 'react-redux';
import { modalToggle } from '../store/modules/modals/actions';

const Home = (props) => {
    let modals = props.page === 'signup'? <SignUpModal /> : <SignInModal />
    return (
      <div className="wrapper-home">
        <HomeHeader />
        <HomeContent /> 
        <HomeFooter />
        { modals }
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