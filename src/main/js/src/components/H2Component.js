import React from 'react';
import H2Service from '../services/H2Service';

class H2Component extends React.Component {
    constructor(props) {
		super(props);
        this.state = {
            employees: [],
            departments: []
        };
	}

	componentDidMount() {
		H2Service.getEmployees().then(response => {
            this.setState({ employees: response.data});
        });
		H2Service.getDepartments().then((response) => {
            this.setState({ departments: response.data});
        });
	}

	render() {
		return (
			<div>
				<h1 className = "text-center">Employee List</h1>
				<EmployeeList employees={this.state.employees}/>
				{this.state.employees}

				<h1 className = "text-center">Department List</h1>
				<DepartmentList departments={this.state.departments}/>
			</div>
			
		)
	}
}


///// EmployeeList //////////////////////////////

class EmployeeList extends React.Component{
	render() {
		const renderEmployees = this.props.employees.map(e =>
			<Employee key={e.EMP_ID} employee = {e}/>
			);
		return (
			<table className = "table table-striped">
				<thead>
					<tr>
                        <th>EMP_ID</th>
						<th>fullName</th>
						<th>dep</th>
						<th>yearlySalary</th>
                        <th>jobTitle</th>
					</tr>
				</thead>
				<tbody>
					{renderEmployees}
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
				<thead>
					<tr>
                        <th>DEP_ID</th>
						<th>depName</th>
						<th>depHead</th>
					</tr>
				</thead>
				<tbody>
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

export default H2Component