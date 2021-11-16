import React from 'react';
import { connect } from 'react-redux';
import {Card, Form, Row, Col, Button} from 'react-bootstrap';
import { handleAddQuestion } from '../redux/actions/questions';
import { Redirect } from 'react-router-dom';


class CreateQuestion extends React.Component {
	state = {
		optionOne: '',
		optionTwo: '',
		toHome: false
	};
	
	inputs = (e) => {
		const { optionOne, optionTwo } = this.state;
		const { dispatch } = this.props;

		e.preventDefault();

		this.setState(
			{
				optionOne: '',
				optionTwo: '',
				toHome: true
			},
			() => dispatch(handleAddQuestion(optionOne, optionTwo)),
		);
		
	};

	inputChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			[name]: value
		});
	};
	
	render() {
		const { optionOne, optionTwo,toHome } = this.state;
		if (toHome === true)
		{
			return <Redirect to="/" />
		} 

		return (
			<div>
				<Row className="justify-content-center">
					<Col xs={12} md={6}>
						<Card bg="light" className="m-3 text-center">

							<Card.Header style={{backgroundColor:"skyblue"}} className="text-center"> 
								<h3 >Create New Question</h3>
							</Card.Header>	

							<Card.Body>
								<h5 >Would You Rather...!</h5>

								<Form onSubmit={this.inputs} >
									<Form.Control type="text" name="optionOne" placeholder="Enter Option One Text here" value={optionOne} onChange={this.inputChange} required/>
									
									<h5>OR</h5>

									<Form.Control type="text" name="optionTwo" placeholder="Enter Option Two Text here"	value={optionTwo} onChange={this.inputChange} required/>

									<Button	type="submit" variant="primary"	className="mt-3">Submit</Button>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default connect()(CreateQuestion);
