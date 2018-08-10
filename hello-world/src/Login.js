import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Login extends Component {
 
 
  render() {
    return (
      <div>

      <h1>Login</h1>
      <hr className="account-header-divider" />

<div className="account-wrapper">

  <div className="account-logo">
    <img src="./img/logo-login.png" alt="Target Admin" />
  </div>

    <div className="account-body">

      <h3 className="account-body-title">Welcome back to Target Admin.</h3>

      <h5 className="account-body-subtitle">Please sign in to get access.</h5>

      <form className="form account-form" method="POST" action="./index.html">

        <div className="form-group">
          <label for="login-username" className="placeholder-hidden">Username</label>
          <input type="text" className="form-control" id="login-username" placeholder="Username" tabindex="1" />

        </div>

        <div className="form-group">
          <label for="login-password" className="placeholder-hidden">Password</label>
          <input type="password" className="form-control" id="login-password" placeholder="Password" tabindex="2" />
        </div> 

        <div className="form-group clearfix">
          <div className="pull-left">         
            <label className="checkbox-inline">
            <input type="checkbox" className="" value="" tabindex="3" />Remember me
            </label>
          </div>

          <div className="pull-right">
            <a href="./account-forgot.html">Forgot Password?</a>
          </div>
        </div> 

        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block btn-lg" tabindex="4">
            Signin &nbsp; <i className="fa fa-play-circle"></i>
          </button>
        </div> 

      </form>


    </div>

    <div className="account-footer">
      <p>
      Don't have an account? &nbsp;
      <a href="./account-signup.html" className="">Create an Account!</a>
      </p>
    </div> 

  </div> 
      
      </div>
    );
  }
}

export default Login;