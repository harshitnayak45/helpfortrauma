import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'; 
import axios from 'axios';
class Register extends Component {

	

	constructor(props){
    super(props);
    this.state={
    	_id:'',
    	signupemail:'',
    	signupfullname:'',
    	signupusername:'',
    	loginpassword:'',
    	agree:''
    };
    this.RegisterMe=this.RegisterMe.bind(this);
  }

  RegisterMe(event){

  	console.log('fdf');
	// var signupemail=this.refs.signupemail.value;
	// var signupfullname=this.refs.signupfullname.value;
	// var signupusername=this.refs.signupusername.value;
	// var loginpassword=this.refs.loginpassword.value;
	// var agree=this.refs.agree.value;

	 var studentdata = {  
        'signupemail': this.refs.signupemail.value,  
        'signupfullname':this.refs.signupfullname.value,
        'signupusername':this.refs.signupusername.value,  
        'loginpassword':this.refs.loginpassword.value,  
        'agree':this.refs.agree.value  
          
    }  
var Url="http://localhost:3300/register";
     axios.get(Url)
      .then(res => {
      	console.log(res);
        //this.setState({ books: res.data });
        //console.log(this.state.books);
      });







	// this.setState({
	// 	_id:'',
	// 	signupemail:signupemail,
	// 	signupfullname:signupfullname,
	// 	signupusername:signupusername,
	// 	loginpassword:loginpassword,
	// 	agree:agree
	// }, function(){
	// 	console.log(this.state);
 //    })

  }
 
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

      <form className="form account-form"  action="#">

        <div className="form-group">
          <label htmlFor="signup-email" className="placeholder-hidden">Email Address</label>
          <input type="text" className="form-control" id="signupemail" placeholder="Your Email" ref="signupemail" tabIndex="1" />
        </div> 

        <div className="form-group">
          <label htmlFor="signup-fullname" className="placeholder-hidden">Your Name</label>
          <input type="text" className="form-control" id="signupfullname" ref="signupfullname" placeholder="Your Name" tabIndex="2" />
        </div> 

        <div className="form-group">
          <label htmlFor="signup-username" className="placeholder-hidden">Username</label>
          <input type="text" className="form-control" id="signupusername" ref="signupusername" placeholder="Username" tabIndex="3" />
        </div> 

        <div className="form-group">
          <label htmlFor="login-password" className="placeholder-hidden">Password</label>
          <input type="password" className="form-control" id="login-password" ref="loginpassword" placeholder="Password" tabIndex="4" />
        </div> 

        <div className="form-group">
          <label className="checkbox-inline">
          <input type="checkbox" className="" ref="agree" value="1" tabIndex="5" /> I agree to the <a href="javascript:;" target="_blank">Terms of Service</a> &amp; <a href="javascript:;" target="_blank">Privacy Policy</a>
          </label>
        </div> 

        <div className="form-group">
          <button type="button" onClick={this.RegisterMe}  className="btn btn-secondary btn-block btn-lg" tabIndex="6">
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