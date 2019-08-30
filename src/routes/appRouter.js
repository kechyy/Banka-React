import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Client from '../components/Client';


const App = (props) => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/client" exact component={Client} />
    </Switch>
  </Router>
);

export default App;
