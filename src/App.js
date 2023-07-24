// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Item from './MyItem';
// import Bindu from './Bindu';

class Starwars extends React.Component{
  constructor(){
    super()
    this.state={
      Name:null,
      Height:null,
      homeworld:null,
      films:{}
    }
    }
  }
  // getNewCharacter(){
  //   alert("welcome to this page ")
  // }
  render(){
    return (
      <div><h1> This is a star Wars</h1>
      <h2>Name</h2>
      <h2>Height</h2>
      <p>homeworld:URL</p>
      <ul>
        <li> Films </li>
      </ul>
      <button 
      type="button" 
      className="btn" 
      onClick={()=>this.getNewCharacter()}
      > 
      Click Here .. 
      </button></div>
      
      
    )
      
    
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Starwars />
        
       
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Item name="MAdhu"/>
        <Item  name ="Srinath"/> */}
        {/* <Bindu name="BinduGowda"/> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
