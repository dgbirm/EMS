import React from 'react';
import ReactDOM from 'react-dom';
import H2Service from '../services/H2Service';

class CreateDialog extends React.Component {

	constructor(props) {
		super(props);
		this.attributes = [
			'fullName',
			'dep',
			'jobTitle',
			'yearlySalary'
		];
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onCreate = H2Service.onCreate.bind(this);
	}

	componentDidMount() {
		
	}

	handleSubmit(e) {
		e.preventDefault(); //stops the event from bubbling further up the hierarchy
		const newEntry = {};
		const EmpDbName = 'employees';
		this.attributes.forEach(attribute => {
			newEntry[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
		});
		this.onCreate(EmpDbName,newEntry);

		// clear out the dialog inputs
		this.attributes.forEach(attribute => {
			ReactDOM.findDOMNode(this.refs[attribute]).value = '';
		});

		// Navigate away from the dialog to hide it.
		window.location = "#";
	}

	render() {
		const inputs = this.attributes.map(attribute =>
			<p key={attribute}>
				<input type="text" placeholder={attribute} ref={attribute} className="field"/>
			</p>
		);

		return (
			<div>
				<a href="#createEmployee">Create</a>

				<div id="createEmployee" className="modalDialog">
					<div>
						<a href="#" title="Close" className="close">X</a>

						<h2>Create new employee</h2>

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

export default CreateDialog;