import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../assets/css/main.css';
import { profileAction } from '../store/modules/userProfile/actions' ;
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import SideBar from './SideBar';

class Profile extends Component {
  constructor() {
    super();
    this.state = { page: 'profile', title: 'Profile Details', status:true, topMenu:true }
  }
  componentDidMount() {
    const { profileAction } = this.props;
    document.body.className = 'main-body';
    profileAction();
  }
  render() {
    return (
      <div>
        <MainHeader />
        <main>
          <div className="wrapper ">
            <SideBar />
            <div className="right">
              <div className="row">
                <div className="col-12-lg mainContent">
                  <h2 id="contentMainTitle" >User Profile Page</h2>
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
                          <table>
                              <tbody>
                                  <tr>
                                      <td><strong> First Name</strong></td>
                                      <td><strong>{this.props.userProfile.firstname}</strong></td>
                                  </tr>
                                  <tr>
                                      <td><strong>LastName</strong> </td>
                                      <td>{this.props.userProfile.lastname}</td>
                                  </tr>
                                  <tr>
                                      <td><strong>Email Address</strong> </td>
                                      <td>{this.props.userProfile.email}</td>
                                  </tr>
                                  <tr>
                                      <td><strong>User type</strong> </td>
                                      <td>{this.props.userProfile.usertype}</td>
                                  </tr>
                                  <tr>
                                      <td><strong>Status</strong> </td>
                                      <td>{this.props.userProfile.user_email_status}</td>
                                  </tr>
                              </tbody>
                          </table>
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
  userProfile: state.profileReducer.profile
});

const mapDispatchToProps = {
  profileAction
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);