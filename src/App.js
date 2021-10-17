// import logo from './logo.svg';
import './App.css';


import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



export default class App extends Component {
//  c = 'You will live like a King'

  render() {
    return (
      <div>
        <Router>
        {/* My First Class based component {this.c} */}
        <Navbar/>
        
        <Switch>
          <Route exact path="/"><News key="general" pageSize={6} country='' category='general' language='en'/></Route>
          <Route exact path="/business"><News key="business" pageSize={6} country='' category='business' language='en'/></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={6} country='' category='entertainment' language='en'/></Route>
          <Route exact path="/health"><News key="health" pageSize={6} country='' category='health' language='en'/></Route>
          <Route exact path="/science"><News key="science" pageSize={6} country='' category='science' language='en'/></Route>
          <Route exact path="/sports"><News key="sports" pageSize={6} country='' category='sports' language='en'/></Route>
          <Route exact path="/technology"><News key="technology" pageSize={6} country='' category='technology' language='en'/></Route>
          <Route exact path="/about"><About/></Route>
        </Switch>
        </Router>
        </div>
    )
  }
}




// 6fea94ab7084404cb7d93464ebd77842