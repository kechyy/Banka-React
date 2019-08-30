import React, { Componet } from 'react';

const Profile = (props) => {
  return(
    <div style={{'width':'100%'}} >
        <div className="col-8-md acctDetails">
            <table>
                <tbody>
                    <tr>
                        <td><strong> First Name</strong></td>
                        <td><strong>{props.userProfile.firstname}</strong></td>
                    </tr>
                    <tr>
                        <td><strong>LastName</strong> </td>
                        <td>{props.userProfile.lastname}</td>
                    </tr>
                    <tr>
                        <td><strong>Email Address</strong> </td>
                        <td>{props.userProfile.email}</td>
                    </tr>
                    <tr>
                        <td><strong>User type</strong> </td>
                        <td>{props.userProfile.usertype}</td>
                    </tr>
                    <tr>
                        <td><strong>Status</strong> </td>
                        <td>{props.userProfile.user_email_status}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    );
  }
  export default Profile
