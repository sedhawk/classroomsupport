import React from 'react';
import { FormGroup, Form } from 'react-bootstrap';

class Instructions extends React.Component {

	FieldGroup({ id, label, help, ...props }) {
		return (
			<FormGroup controlId={id}>
		  	<ControlLabel>{label}</ControlLabel>
		  	<FormControl {...props} />
		  	{help && <HelpBlock>{help}</HelpBlock>}
			</FormGroup>
	  );
	}	

	const formInstance = (
		<form>	
		 	<FormGroup controlId="formControlsTextarea">
				<ControlLabel>Textarea</ControlLabel>
			  	<FormControl componentClass="textarea" placeholder="textarea" />
		 	</FormGroup>	
		</form>
	);

	render(formInstance);
}

export { Instructions }
