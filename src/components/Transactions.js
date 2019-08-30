import React from 'react';
const Transactions = ({transaction}) => {
  return (
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
          </thead><tbody>
          {transaction.length > 0?
            <tr>
              <td className="responsiveTitle">Date</td>
              <td>t.data.transaction_date</td>
              <td>Previous Balance</td>
              <td className="responsiveTitle">Transaction ID</td>
              <td>t.data.transaction_id</td>
              <td className="responsiveTitle">Transaction type</td>
              <td>t.data.transaction_type</td>
              <td className="responsiveTitle">Transaction amount</td>
              <td>t.data.amount</td>
              <td className="responsiveTitle">Old Balance</td>
              <td>t.data.old_balance</td>
              <td className="responsiveTitle">Old Balance</td>
              <td>t.data.new_balance</td>
            </tr>
            : <tr><td className="text-red" style={{textAlign: 'center'}} colSpan="14">No transaction found</td></tr> }
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Transactions;