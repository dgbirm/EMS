import React from 'react';
import ReactDOM from 'react-dom';
import H2Service from '../services/H2Service';
import { connect } from 'react-redux'
import { Form } from 'react-bootstrap';

class CreateEmployee extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			departmentIDs: []
		};
		this.attributes = {
			'fullName': 'Full Name',
			'dep': 'Department ID',
			'jobTitle': 'Job Title',
			'yearlySalary': 'Salary'
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onCreate = H2Service.onCreate.bind(this);
	}

	componentDidMount() {
		H2Service.getDepartments().then((response) => {
			const data = response.data.content;
			var depIDs = [];
			for (const d in data) {
				depIDs.push(data[d].dep_ID);
			}
			this.setState({
				departmentIDs: depIDs
			})
		})
	}

	handleSubmit(e) {
		e.preventDefault(); //stops the event from bubbling further up the hierarchy
		const newEntry = {};
		const DbName = 'employees';
		Object.keys(this.attributes).forEach(attribute => {
			newEntry[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
		});
		this.onCreate(DbName, newEntry);

		// clear out the dialog inputs
		Object.keys(this.attributes).forEach(attribute => {
			ReactDOM.findDOMNode(this.refs[attribute]).value = '';
		});

		// Navigate away from the dialog to hide it.
		window.location = "#";
	}

	checkDepType(attribute) {
		if ('dep' === attribute.toString()) {
			return {
				as: "select"
			};
		}
		else {
			return {
				as: "input"
			};
		}
	}

	depOptions(attribute) {
		if ('dep' === attribute.toString()) {
			return this.state.departmentIDs.map(depID =>
				<option>{depID}</option>
			);
		}
		else {
			return null;
		}
	}

	render() {
		const inputs = Object.keys(this.attributes).map(attribute =>
				<Form.Group controlId={"formCreateEmployee.".concat(
					attribute)} >
					<Form.Label>{this.attributes[attribute]}</Form.Label>
					<Form.Control ref={attribute} as={this.checkDepType(attribute).as} type="text">
						{this.depOptions(attribute)}
					</Form.Control>
				</Form.Group>
		);

		return (
			<div id="CreateEmployee" className="modalDialog">
				<a href="#" title="Close" className="close">[X]</a>

				<h2>Create New Employee</h2>

				<Form>
					{inputs}
					<button onClick={this.handleSubmit}>Create</button>
				</Form>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	errors: state.errors
});

export default connect(mapStateToProps)(CreateEmployee);