// import logo from './logo.svg';
import './App.css';


import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default class App extends Component {
//  c = 'You will live like a King'

  render() {
    return (
      <div>
        {/* My First Class based component {this.c} */}
        <Navbar/>
        <News pageSize={6} country='' category='general' language='en'/>
      </div>
    )
  }
}




// 6fea94ab7084404cb7d93464ebd77842