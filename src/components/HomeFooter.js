import React, { Component } from 'react';
class HomeFooter extends Component {
  render(){
    return (
      <footer>
        <div className="container-home homeFooter">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12 text-center" style={{width:'100%', textAlign:'center'}}>
                Copyright © 2019 Banka Application All rights reserved
            </div> 
         </div>
        </div>
    </footer>
    )
  }
}
export default HomeFooter;