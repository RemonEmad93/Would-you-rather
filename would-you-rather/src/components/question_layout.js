import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button} from "react-bootstrap";



class QuestionLayout extends React.Component {
	render() {
		return (
			<Card bg="light" className="m-3 " style={{width:"70%"}}>
				<Card.Header  style={{backgroundColor:"skyblue"}} className="text-center" >
					<Card.Img style={{width:"10%" ,height:'10%', borderRadius:'100%'}} src={this.props.author.avatarURL} />
					<br/>
					{this.props.author.name} asks:
				</Card.Header>

				<Card.Body className="text-center">
					<Card.Text>...{this.props.question.optionOne.text}...</Card.Text>
					<Link to={`/questions/${this.props.question.id}`}>
						<Button variant="outline-primary">View Poll</Button>
					</Link>
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

export default connect(mapStateToProps)(QuestionLayout);
