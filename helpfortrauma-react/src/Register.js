import React, { Component } from 'react';  
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import $ from 'jquery'; 
import axios from 'axios';
const Url='http://localhost:3300';
class Register extends Component {

	

	constructor(props){
    super(props);
    this.state={
    	_id:'',
    	fName:'',
    	lName:'',
    	email:'',
    	cell:'',
    	profession:'',
    	address:'',
    	address2:'',
    	city:'',
    	state:'',
    	zip:'',
    	username:'',
    	pass:'',
      message: '',
      fields: {},
      errors: {}
    };
    this.RegisterMe=this.RegisterMe.bind(this);
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

         if(!fields["fName"]){
           formIsValid = false;
           errors["fName"] = "Cannot be empty firstname";
        }
         if(!fields["lName"]){
           formIsValid = false;
           errors["lName"] = "Cannot be empty lastname";
        }
         if(!fields["cell"]){
           formIsValid = false;
           errors["cell"] = "Cannot be empty mobile";
        }
        if(!fields["username"]){
           formIsValid = false;
           errors["username"] = "Cannot be empty username";
        }
        if(!fields["pass"]){
           formIsValid = false;
           errors["pass"] = "Cannot be empty password";
        }

       


       this.setState({errors: errors});
       return formIsValid;
   }
  
  componentDidMount() {
   
  }

  RegisterMe(e){
    e.preventDefault();

    if(this.handleValidation()){
               this.setState({ message: 'Form submitted' });
                this.props.history.push("/login")
          
        }else{
           this.setState({ message: 'Form has errors' });


          
        }
  

	 const userInfoVo = {  
	 	_id:'',
        'fName': this.refs.fName.value,  
        'lName':this.refs.lName.value,
        'email':this.refs.email.value,  
        'cell':this.refs.cell.value,  
        'profession':this.refs.profession.value,
        'address': this.refs.address.value,  
        'address2':this.refs.address2.value,
        'city':this.refs.city.value,  
        'state':this.refs.state.value,  
        'zip':this.refs.zip.value,
        'created':'',
         'username':this.refs.username.value,  
        'pass':this.refs.pass.value 
    } 

    axios.post(Url+'/register/user', userInfoVo)
      .then((result) => {
       
      }).catch(err =>{
                alert(err);
            }); 

    //console.log(userInfoVo);

     
     


  }
   handleChange(field, e){  
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
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
 <div className="result">{ this.state.message }</div>

    <div className="account-body">

      <h3 className="account-body-title">Get Started with a Free Account.</h3>

      <h5 className="account-body-subtitle">Sign up in 30 seconds. No credit card required.</h5>

      <form className="form account-form"  action="#">
      	 <div className="form-group">
          <label htmlFor="fName" className="placeholder-hidden">Your Firstname</label>
          <input type="text" className="form-control" id="fName" ref="fName" placeholder="Your FirstName" name="fName" onChange={this.handleChange.bind(this, "fName")} value={this.state.fields["fName"]} tabIndex="1" />
           <span style={{color: "red"}}>{this.state.errors["fName"]}</span>
        </div>
        <div className="form-group">
          <label htmlFor="lName" className="placeholder-hidden">Your Lastname</label>
          <input type="text" className="form-control" id="lName" ref="lName" placeholder="Your LastName" name="lName" onChange={this.handleChange.bind(this, "lName")} value={this.state.fields["lName"]} tabIndex="2" />
          <span style={{color: "red"}}>{this.state.errors["lName"]}</span>
        </div> 

        <div className="form-group">
          <label htmlFor="email" className="placeholder-hidden">Email Address</label>
          <input type="text" className="form-control" id="email" placeholder="Your Email" ref="email" name="email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} tabIndex="3" />
         <span style={{color: "red"}}>{this.state.errors["email"]}</span>
        </div> 

        <div className="form-group">
          <label htmlFor="cell" className="placeholder-hidden">Your PhoneNumber</label>
          <input type="text" className="form-control" id="cell" ref="cell" placeholder="Your PhoneNumber" name="cell" onChange={this.handleChange.bind(this, "cell")} value={this.state.fields["cell"]} tabIndex="4" />
          <span style={{color: "red"}}>{this.state.errors["cell"]}</span>
        </div>

        <div className="form-group">
          <label htmlFor="Profession" className="placeholder-hidden">Your Profession</label>
          <select className="form-control" id="profession" ref="profession" tabIndex="5">
          	<option value="Medicine">Medicine</option>
          	<option value="Nursing">Nursing</option>
          	<option value="Social Work">Social Work</option>
            <option value="Therapy">Therapy</option>
          </select>
          </div> 

        <div className="form-group">
          <label htmlFor="Address" className="placeholder-hidden">Address</label>
          <input type="text" className="form-control" id="address" ref="address" placeholder="Address 1" tabIndex="6" />
        </div> 
         <div className="form-group">
          <label htmlFor="Address2" className="placeholder-hidden">Address 2</label>
          <input type="text" className="form-control" id="address2" ref="address2" placeholder="Address 2" tabIndex="7" />
        </div>
         <div className="form-group">
          <label htmlFor="City" className="placeholder-hidden">City</label>
          <input type="text" className="form-control" id="city" ref="city" placeholder="City" tabIndex="8" />
        </div>
         <div className="form-group">
          <label htmlFor="State" className="placeholder-hidden">State</label>
          <input type="text" className="form-control" id="state" ref="state" placeholder="State" tabIndex="9" />
        </div>
         <div className="form-group">
          <label htmlFor="Zip" className="placeholder-hidden">Zip</label>
          <input type="text" className="form-control" id="zip" ref="zip" placeholder="Zip" tabIndex="10" />
        </div>

        <div className="form-group">
          <label htmlFor="username" className="placeholder-hidden">Username</label>
          <input type="text" className="form-control" id="username" ref="username" placeholder="Username" tabIndex="11" />
        </div> 

        <div className="form-group">
          <label htmlFor="pass" className="placeholder-hidden">Password</label>
          <input type="password" className="form-control" id="pass" ref="pass" placeholder="Password" tabIndex="12" />
        </div> 

        <div className="form-group">
          <label className="checkbox-inline">
          <input type="checkbox" className="" ref="agree" value="1" tabIndex="5" /> I agree to the <a href="#" target="_blank">Terms of Service</a> &amp; <a href="javascript:;" target="_blank">Privacy Policy</a>
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
      <Link to={'/login'}> <i className="fa fa-unlock"></i> Login to your Account!</Link>
      </p>
    </div> 

  </div>
      
      </div>
    );
  }
}

export default Register;