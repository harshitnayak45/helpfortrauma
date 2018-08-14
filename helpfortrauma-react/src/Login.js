import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import axios from 'axios';
import AuthService from './AuthService';
import withAuth from './withAuth';




const Auth = new AuthService();
const Url='http://localhost:3300';
class Login extends Component {

  constructor(props){
    super(props);
    this.state={
    	username:'',
    	password:'',
       message: '',
      fields: {},
      errors: {}
    };
    this.LoginMe=this.LoginMe.bind(this);
  }

  handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

       
        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }

        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
       }  

         if(!fields["pass"]){
           formIsValid = false;
           errors["pass"] = "Cannot be empty";
        }

       


       this.setState({errors: errors});
       return formIsValid;
   }

  componentWillMount() {
   
   if(Auth.loggedIn())
   this.props.history.replace('/Home');
  
  }
   
  LoginMe(){
   // e.preventDefault();
        Auth.login(this.refs.email.value,this.refs.pass.value)
            .then(res =>{
              console.log(res);
              this.props.history.replace('/Home');
            })
            .catch(err =>{
                alert(err);
            })

             if(this.handleValidation()){
               this.setState({ message: 'Form submitted' });
          
        }else{
           this.setState({ message: 'Form has errors' });
          
        }
  }

  handleChange(field, e){  
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }
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
     <div className="result">{ this.state.message }</div>

      <h3 className="account-body-title">Welcome back to Target Admin.</h3>

      <h5 className="account-body-subtitle">Please sign in to get access.</h5>

      <form className="form account-form" method="POST" action="./index.html">

        <div className="form-group">
          <label htmlFor="login-username" className="placeholder-hidden">Username</label>
          <input type="text" className="form-control" ref="email" name="email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} placeholder="Email" tabIndex="1" />
           <span style={{color: "red"}}>{this.state.errors["email"]}</span>
        </div>

        <div className="form-group">
          <label htmlFor="login-password" className="placeholder-hidden">Password</label>
          <input type="password" className="form-control" name="pass" id="pass" ref="pass" placeholder="Password" tabIndex="2" />
          <span style={{color: "red"}}>{this.state.errors["pass"]}</span>
        </div> 

        <div className="form-group clearfix">
          <div className="pull-left">         
            <label className="checkbox-inline">
            <input type="checkbox" className="" value="" tabIndex="3" />Remember me
            </label>
          </div>

          <div className="pull-right">
            <a href="./account-forgot.html">Forgot Password?</a>
          </div>
        </div> 

        <div className="form-group">
          <button type="button" onClick={this.LoginMe} className="btn btn-primary btn-block btn-lg" tabIndex="4">
            Signin &nbsp; <i className="fa fa-play-circle"></i>
          </button>
        </div> 

      </form>


    </div>

    <div className="account-footer">
      <p>
      Don't have an account? &nbsp;
     
      <Link to={'/'}> Create an Account!</Link>
      </p>
    </div> 

  </div> 
      
      </div>
    );
  }
}

export default Login;