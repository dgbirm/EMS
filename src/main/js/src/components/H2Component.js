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
			this.setState({ employees: response.data})
        });
		H2Service.getDepartments().then((response) => {
            this.setState({ departments: response.data});
        })
	}

	render() {
		return (
			<div>
				<h1 className = "text-center">Employee List</h1>
				<EmployeeList employees={this.state.employees}/>

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
                        <th>ID</th>
						<th>Full Name</th>
						<th>Department ID</th>
						<th>Salary</th>
                        <th>Job Title</th>
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
		const renderDepartments = this.props.departments.map(d =>
			<Department key={d.dep_ID} department={d}/>
		);
		return (
			<table className = "table table-striped">
				<thead>
					<tr>
                        <th>ID</th>
						<th>Name</th>
						<th>Head ID</th>
					</tr>
				</thead>
				<tbody>
					{renderDepartments}
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
				<td>{this.props.employee.empID}</td>
				<td>{this.props.employee.fullName}</td>
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
                <td>{this.props.department.dep_ID}</td>
                <td>{this.props.department.depName}</td>
                <td>{this.props.department.depHead}</td>
            </tr>
        )
    }
}

export default H2Component