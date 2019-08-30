import React from 'react';

const AccountList = ({ accounts, i, onClick}) => {
  
  return (
    <tr>
      <td>{i+1}</td>
      <td>{accounts.account_number}</td>
      <td>{accounts.account_type}</td>
      <td>{accounts.balance}</td>
      <td>{accounts.account_status}</td>
      <td>{accounts.created_on}</td>
    </tr>
  )
}

export default AccountList;