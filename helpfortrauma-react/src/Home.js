import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AuthService from './AuthService';
import withAuth from './withAuth';
const Auth = new AuthService();
const Url = 'http://localhost:3300';
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profile: []
    };
    //this.RegisterMe=this.RegisterMe.bind(this);
  }

  componentDidMount() {
    var profile;
    if (!Auth.loggedIn()) {
      this.props.history.replace('/login');
    } else {
      profile = Auth.getProfile();
    }
    this.setState({ profile: profile });
    console.log(profile);


  }





  render() {
    return (


      <div>

        <div className="col-md-12">
          <h1>Home</h1>
             </div>

        <div className="col-md-12">


          <h2>Welcome, {this.state.profile.fName} {this.state.profile.lName}</h2>

          <ul className="list-group">
            <li className="list-group-item">Email:-<h5>{this.state.profile.email}</h5></li>
            <li className="list-group-item">Mobile:-<h5>{this.state.profile.cell}</h5></li>
            <li className="list-group-item">UserName:-<h5>{this.state.profile.username}</h5></li>
            <li className="list-group-item">Address:-<h5>{this.state.profile.address},{this.state.profile.address2},{this.state.profile.city},{this.state.profile.state},{this.state.profile.zip}</h5></li>
          </ul>


        </div>










      </div>
    );
  }
}

export default Home;