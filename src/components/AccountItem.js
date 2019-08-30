import React from 'react';

const AccountItem = ({ accountList, getTransaction }) => {
  return (
    <li onClick={() => getTransaction(accountList.account_number)} style={{cursor:'pointer'}}>{accountList.account_number}</li>
  )
}
export default AccountItem;