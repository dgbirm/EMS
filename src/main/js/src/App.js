
import React from 'react';
import './App.css';
import{ createBrowserHistory } from 'history';
import { Router, Link, Switch, Route } from 'react-router-dom';

import NavBar from './utils/NavBar'
import EmployeeTable from './components/EmployeeTable';
import CreateEmployee from './components/CreateEmployee';
import DepartmentTable from './components/DepartmentTable';
import CreateDepartment from './components/CreateDepartment';

export const history = createBrowserHistory();

///// App ///////////////////////////////////////

export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Router history={history}>
					<div>
						<NavBar />
						<Switch>
							<Route exactly component={EmployeeTable} pattern="/EmployeeTable" />
							<Route exactly component={CreateEmployee} pattern="/CreateEmployee" />
							<Route exactly component={DepartmentTable} pattern="/DepartmentTable" />
							<Route exactly component={CreateDepartment} pattern="/CreateDepartment" />
							{/* <Route component={Page404} /> */}
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}