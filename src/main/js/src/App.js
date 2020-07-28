
import React from 'react';
import './App.css';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem'

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