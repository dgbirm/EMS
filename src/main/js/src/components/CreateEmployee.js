import React from 'react';
import ReactDOM from 'react-dom';
import H2Service from '../services/H2Service';

class CreateEmployee extends React.Component {

	constructor(props) {
		super(props);
		this.attributes = {
			'fullName': 'Full Name',
			'dep': 'Department ID',
			'jobTitle': 'Job Title',
			'yearlySalary': 'Salary'
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onCreate = H2Service.onCreate.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault(); //stops the event from bubbling further up the hierarchy
		const newEntry = {};
		const DbName = 'employees';
		Object.keys(this.attributes).forEach(attribute => {
			newEntry[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
		});
		this.onCreate(DbName,newEntry);

		// clear out the dialog inputs
		Object.keys(this.attributes).forEach(attribute => {
			ReactDOM.findDOMNode(this.refs[attribute]).value = '';
		});

		// Navigate away from the dialog to hide it.
		window.location = "#";
	}

	render() {

		const inputs = Object.keys(this.attributes).map(attribute=>
			<p key={attribute}>
				<input type="text" placeholder={this.attributes[attribute]} ref={attribute} className="field"/>
			</p>
		);

		return (
			<div>
				<a href="#CreateEmployee">Create Employee</a>

				<div id="CreateEmployee" className="modalDialog">
					<div>
						<a href="#" title="Close" className="close">[X]</a>

						<h2>Create New Employee</h2>

						<form>
							{inputs}
							<button onClick={this.handleSubmit}>Create</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default CreateEmployee;