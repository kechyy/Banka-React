import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/App.css';
import '../assets/css/modal.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Routes from '../routes/appRouter'
import store from '../store';
class App extends Component {
  componentWillMount() {
    document.body.className = 'body'
  }
  render() {
    return(
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    )
  }
}


export default App;