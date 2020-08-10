
import React from 'react';
import './App.css';

import CreateEmployee from './components/CreateEmployee';
import EmployeeTable from './components/EmployeeTable';
import DepartmentTable from './components/DepartmentTable';
import CreateDepartment from './components/CreateDepartment';

///// App ///////////////////////////////////////

function App() {
	return (
	  <div className="App">
		  <EmployeeTable />
		  <CreateEmployee />
		  <DepartmentTable />
		  <CreateDepartment />
	  </div>
	  );
  }

export default App;