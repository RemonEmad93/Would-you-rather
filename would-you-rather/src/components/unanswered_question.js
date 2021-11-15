import React from 'react';
import { connect } from 'react-redux';
import {Card, Form, Button} from 'react-bootstrap'
import { handleAddAnswer } from '../redux/actions/questions';



class UnansweredQuestion extends React.Component {
	
	input = (id, e) => {
		const answer = this.form.answer.value;
		const { dispatch } = this.props;

		e.preventDefault();
		dispatch(handleAddAnswer(id, answer));
	};

	render() {
		return (
			<Card bg="light" className="m-3 " style={{width:"70%"}}>
				<Card.Header style={{backgroundColor:"skyblue"}} className="text-center">
					<Card.Img style={{width:"10%" ,height:'10%', borderRadius:'100%'}} src={this.props.author.avatarURL} /> 
					<br/>
					{this.props.author.name} asks:
				</Card.Header>

				<Card.Body className="d-flex justify-content-center ">
					<Form onSubmit={(e) => this.input(this.props.question.id, e)} ref={(f) => (this.form = f)} >
						<Form.Check type="radio"  value="optionOne" name="answer" label={this.props.question.optionOne.text}  required/>

						<Form.Check type="radio" value="optionTwo" name="answer"  label={this.props.question.optionTwo.text} required/>
						
						<Button type="submit" variant="primary"className="mt-3" >Submit</Button>
					</Form>
				</Card.Body>
			</Card>
		);
	}
}

function mapStateToProps({ questions, users }, { id }) {

	return {
		question: questions[id] ? questions[id] : null,
		author: questions[id] ? users[questions[id].author] : null
	};
}

export default connect(mapStateToProps)(UnansweredQuestion);
