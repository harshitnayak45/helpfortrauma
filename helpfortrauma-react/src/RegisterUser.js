import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const Url='http://localhost:3300';

class RegisterUser extends Component {

	constructor(props){
    super(props);
    this.state={
    	users:[]
    };
    //this.RegisterMe=this.RegisterMe.bind(this);
  }
   componentDidMount() {
   axios.get(Url+'/register/user/all')
      .then(res => {
        
      	this.state=res.data.body;
      		this.setState({data1: res.data.body});
      		

      	 this.setState({ users: res.data.body });
        console.log(this.state.users);
      });
  }
 
 
  render() {
    return (
      <div>

       <table className="table table-stripe">
              <thead>
                <tr>
                 <th>#</th>
                  <th>Name </th>
                  <th>Email</th>
                   <th>Username</th>
                   <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user,index) =>
                  <tr  key={index}>
                   <td>{index+1}</td> 
                    <td>{user.fName} {user.lName}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.address},{user.address2},{user.city},{user.states},{user.zip}</td>
                  </tr>
                )}
              </tbody>
            </table>

     

      </div>
    );
  }
}

export default RegisterUser;