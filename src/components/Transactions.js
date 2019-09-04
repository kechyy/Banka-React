import React, {Component} from 'react';
import {connect} from 'react-redux';
import SideBar from './SideBar';
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';

class Transactions extends Component {
  constructor() {
    super();
    this.state = {title: 'Account Transaction'}
  }
  componentDidMount () {
    document.body.className = 'main-body';
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
                    <h2 id="contentMainTitle" >Account Transaction Page</h2>
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
                          <div className="row" >
                              <div className="col-12-xs col-12-md table">
                                <table cellPadding={0} cellSpacing={0}>
                                  <thead>,
                                    <tr>
                                      <th>Date</th>
                                      <th>Transaction ID</th>
                                      <th>Transaction type</th>
                                      <th>Transaction amount</th>
                                      <th>Old Balance</th>
                                      <th>New Balance</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="text-red" style={{textAlign: 'center'}} colSpan="14">No transaction found</td></tr> 
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
          <MainFooter/>
        </div>
    )
  }
}
const mapStateToProps = state => ({
  transaction: state.transactionReducer.transaction
});
export default connect(mapStateToProps, null)(Transactions);