import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { Link } from 'react-router-dom';


export default class App extends Component{
render(){
  return (
    <div className="container">
      <h2>Chat Application</h2>
       
       <Sidebar/>
            </div>

       






  );
}
}

