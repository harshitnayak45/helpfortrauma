import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import axios from 'axios';
import AuthService from './AuthService';
import withAuth from './withAuth';
const Auth = new AuthService();
const Url='http://localhost:3300';
class Home extends Component {

  constructor(props){
    super(props);
    this.state={
    	user:[]
    };
    //this.RegisterMe=this.RegisterMe.bind(this);
  }

  componentDidMount() {
    if(!Auth.loggedIn()) {
      this.props.history.replace('/login');
    } else {
      const profile = Auth.getProfile();
         
   
           
          
    }

    
  }

  handleLogout(){
    Auth.logout()
    this.props.history.replace('/login');
 }
 
  render() {
    return (
      <div>

        <div className="col-md-9">
        <h1>Home</h1>
        <div>WelCome </div>
        
        </div>
        <div className="col-md-3">
        <button type="button" className="btn btn-secondary btn-block pull-right" onClick={this.handleLogout.bind(this)}>Logout</button>
        </div>


     

      
         
     
       
      
      
      </div>
    );
  }
}

export default Home;