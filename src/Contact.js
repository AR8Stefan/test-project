import React from 'react';
import {
	// Navbar,
	// Nav,
	// NavItem,
	// NavDropdown,
	// MenuItem,
	// Grid,
	// Row,
	Col,
	Form,
	FormGroup,
	// FieldGroup,
	ControlLabel,
	// Checkbox,
	Button,
	FormControl
} from 'react-bootstrap'
import './contact.css';

const Contact = () => {
	return <div className="contact-form">
		<h1>Contact Us.</h1>

		<div className="test">
			<Form horizontal>
			    <FormGroup controlId="formHorizontalEmail">
			      	<Col componentClass={ControlLabel} sm={2}><p>Email</p>
			      	</Col>
			      	<Col sm={10}>
			        	<FormControl className="inputField" type="email" placeholder="Email" />
			      	</Col>
			    	</FormGroup>

			    	<FormGroup controlId="formHorizontalQuery">
			      	<Col componentClass={ControlLabel} sm={2}><p>Submit Your Query</p>
			      	</Col>
			      	<Col sm={10}>

			        <FormControl className="inputField" type="text" placeholder="Submit Your Query" />
			      	</Col>
			    	</FormGroup>

			    	<FormGroup>
			      		<Col smOffset={2} sm={10}>
			        		<Button type="submit" className="button">
			          		Submit
			        		</Button>
			      		</Col>
			    	</FormGroup>
			  	</Form>
			</div>
	</div>
}

export default Contact;