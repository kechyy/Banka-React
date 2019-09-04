import React from 'react';
import {Link} from 'react-router-dom';

const AccountItem = ({ accountList, getTransaction }) => {
  return (
    <li style={{cursor:'pointer'}}><Link to='/account-transactions'>{accountList.account_number}</Link></li>
  )
}
export default AccountItem;