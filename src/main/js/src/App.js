
const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');


///// App ///////////////////////////////////////
class App extends React.Component {

	constructor(props) {
		super(props);
        this.state = {
            employees: [],
            departments: []
        };
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/employees'}).done(response => {
            this.setState({employees: response.entity._embedded.employees});
        })
        client({method: 'GET', path: '/api/departments'}).done(response => {
            this.setState({departments: response.entity._embedded.departments});
        });
	}

	render() {
		return (<li>
                    <EmployeeList employees={this.state.employees}/>
                    <DepartmentList departments={this.state.departments}/>
                </li>
		)
	}
}

///// EmployeeList //////////////////////////////

class EmployeeList extends React.Component{
	render() {
		const employees = this.props.employees.map(employee =>
			<Employee key={employee._links.self.href} employee={employee}/>
		);
		return (
			<table>
				<tbody>
					<tr>
                        <th>EMP_ID</th>
						<th>fullName</th>
						<th>dep</th>
						<th>yearlySalary</th>
                        <th>jobTitle</th>
					</tr>
					{employees}
				</tbody>
			</table>
		)
	}
}

///// DepartmentList ////////////////////////////
class DepartmentList extends React.Component{
	render() {
		const departments = this.props.departments.map(department =>
			<Department key={department._links.self.href} department={department}/>
		);
		return (
			<table>
				<tbody>
					<tr>
                        <th>DEP_ID</th>
						<th>depName</th>
						<th>depHead</th>
					</tr>
					{departments}
				</tbody>
			</table>
		)
	}
}

///// Employee //////////////////////////////////

class Employee extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.employee.EMP_ID}</td>
				<td>{this.props.employee.fullname}</td>
				<td>{this.props.employee.dep}</td>
                <td>{this.props.employee.yearlySalary}</td>
                <td>{this.props.employee.jobTitle}</td>
			</tr>
		)
	}
}

///// Department ////////////////////////////////

class Department extends React.Component{
    render() {
        return (
            <tr>
                <td>{this.props.department.DEP_ID}</td>
                <td>{this.props.department.depName}</td>
                <td>{this.props.department.depHead}</td>
            </tr>
        )
    }
}

export default App;