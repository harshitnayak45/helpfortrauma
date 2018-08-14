import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Intro from './Intro';
import DashboardMenu from './DashboardMenu';
import Footer from './Footer';


import registerServiceWorker from './registerServiceWorker';
import AuthService from './AuthService';
import withAuth from './withAuth';
const Auth = new AuthService();



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <Footer />
      </div>
    );
  }
}


class Number extends Component {
  componentDidMount() {
    console.log("component did mount here");

  }
  componentWillMount() {
    console.log("component didqq mount here");
    if (!Auth.loggedIn())
      this.props.history.replace('/login');
  }
  componentWillReceiveProps(newProps) {
    console.log("component Will Receive props here");
  }

  render() {
    return (
      <div>
        {this.props.myNumber}

      </div>

    );
  }
}


export default App;
