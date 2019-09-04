import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Client from '../components/Profile';
import SignInModal  from '../components/SignInModal';
import SignUpModal  from '../components/SignUpModal';
import CreateAccount  from '../components/CreateAccount';
import Transactions  from '../components/Transactions';
import PrivateRoute from './PrivateRoute'


const App = (props) => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" exact component={SignInModal} />
      <Route path="/signup" exact component={SignUpModal} />
      <PrivateRoute path="/user-profile" exact component={Client} />
      <PrivateRoute path="/create-account" exact component={CreateAccount} />
      <PrivateRoute path="/account-transactions" exact component={Transactions} />
    </Switch>
  </Router>
);

export default App;
