
import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import H2Component from './components/H2Component';

///// App ///////////////////////////////////////

function App() {
	return (<Router>
	  <div className="App">
		  <H2Component />
	  </div>
	  </Router>);
  }

export default App;