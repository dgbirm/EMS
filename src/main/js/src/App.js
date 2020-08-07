
import React from 'react';
import './App.css';

import H2Component from './components/H2Component';
import CreateDialog from './components/CreateDialog';

///// App ///////////////////////////////////////

function App() {
	return (
	  <div className="App">
		  <H2Component />
		  <CreateDialog />
	  </div>
	  );
  }

export default App;