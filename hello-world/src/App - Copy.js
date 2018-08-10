import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Intro from './Intro';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
       <Intro/>
       <h3>Prop number: {this.props.propNumber}</h3>
       <h3>Prop string: {this.props.propString}</h3>
       <h3>Prop string: {this.props.propObject.obj1}</h3>
       <Parent />
      </div>
    );
  }
}

App.propTypes={
  propObject:PropTypes.object,
  propString:PropTypes.string,
  propNumber:PropTypes.number,
}

App.defaultProps={
  propNumber:3,
  propString:"prop string",
  propObject:{
    obj1:"object1",
    obj2:"object2",
    obj3:"object3"

  }
}




class Parent extends Component {

  constructor(props){
    super(props);
    this.state={
      cars:['s-BMW','s-Audi','s-Spark']
    };
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({cars:this.state.cars.reverse()});

  }
  render() {
    return (
      <div>
       <h2 onClick={this.handleClick}>My parent component</h2>
       <Cars msg="Cars is cool" model="123454" myCars={this.state.cars}/>
      </div>
    );
  }
}

Parent.defaultProps={
  cars:['BMW','Audi','Spark']
}

class Cars extends Component {

  render() {
     console.log(this.props);
    return (
      <div>
       <h2>My Cars component</h2>
       <p>{this.props.msg}</p>
       <p>{this.props.model}</p>
       <div>{this.props.myCars.map((item, i) => {
        return <p key={i}>{item}</p>
       }) }</div>


      </div>
    );
  }
}





export default App;
