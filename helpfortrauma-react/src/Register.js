import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Register extends Component {
 
 
  render() {
    return (
      <div>

      <h1>Register</h1>
      <hr className="account-header-divider" />

<div className="account-wrapper">



  <div className="account-logo">
    <img src="./img/logo-login.png" alt="Target Admin" />
  </div>


    <div className="account-body">

      <h3 className="account-body-title">Get Started with a Free Account.</h3>

      <h5 className="account-body-subtitle">Sign up in 30 seconds. No credit card required.</h5>

      <form className="form account-form" method="POST" action="./index.html">

        <div className="form-group">
          <label htmlFor="signup-email" className="placeholder-hidden">Email Address</label>
          <input type="text" className="form-control" id="signup-email" placeholder="Your Email" tabIndex="1" />
        </div> 

        <div className="form-group">
          <label htmlFor="signup-fullname" className="placeholder-hidden">Your Name</label>
          <input type="text" className="form-control" id="signup-fullname" placeholder="Your Name" tabIndex="2" />
        </div> 

        <div className="form-group">
          <label htmlFor="signup-username" className="placeholder-hidden">Username</label>
          <input type="text" className="form-control" id="signup-username" placeholder="Username" tabIndex="3" />
        </div> 

        <div className="form-group">
          <label htmlFor="login-password" className="placeholder-hidden">Password</label>
          <input type="password" className="form-control" id="login-password" placeholder="Password" tabIndex="4" />
        </div> 

        <div className="form-group">
          <label className="checkbox-inline">
          <input type="checkbox" className="" value="" tabIndex="5" /> I agree to the <a href="javascript:;" target="_blank">Terms of Service</a> &amp; <a href="javascript:;" target="_blank">Privacy Policy</a>
          </label>
        </div> 

        <div className="form-group">
          <button type="submit" className="btn btn-secondary btn-block btn-lg" tabIndex="6">
          Create My Account &nbsp; <i className="fa fa-play-circle"></i>
          </button>
        </div> 

      </form>

    </div> 

    <div className="account-footer">
      <p>
      Already have an account? &nbsp;
      <a href="./account-login.html" className="">Login to your Account!</a>
      </p>
    </div> 

  </div>
      
      </div>
    );
  }
}

export default Register;