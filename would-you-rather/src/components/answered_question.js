import React from 'react';
import { connect } from 'react-redux';
import {Card, ProgressBar} from 'react-bootstrap';

class AnsweredQuestion extends React.Component {
	render() {
		const Score = this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length;
		const optionOnePer = Math.round((this.props.question.optionOne.votes.length / Score) * 100);
		const optionTwoPer = Math.round((this.props.question.optionTwo.votes.length / Score) * 100);

		return (
			<Card bg="light" className="m-5" style={{width:"70%"}}>
				<Card.Header style={{backgroundColor:"skyblue"}} className="text-center">
					<Card.Img style={{width:"10%" ,height:'10%', borderRadius:'100%'}} src={this.props.author.avatarURL} />
					<br/>
					{this.props.author.name} asks:
				</Card.Header>

				<Card.Body >
					<div>
						<h5>Results:</h5>
						<br/>

						{this.props.question.optionOne.votes.includes(this.props.authedUser) ? 
							<div style={{color:"blue"}}> Would You Rather {this.props.question.optionOne.text} ?</div>
							:<div >Would You Rather {this.props.question.optionOne.text} ?</div> 
						}
						<ProgressBar now={optionOnePer} label={`${optionOnePer}%`} />
						<Card.Text >
							{this.props.question.optionOne.votes.length} out of {Score}{' '}votes
						</Card.Text>
						<br/>

						{this.props.question.optionTwo.votes.includes(this.props.authedUser) ? 
							<div style={{color:"blue"}}> Would You Rather {this.props.question.optionTwo.text} ?</div>
							:<div> Would You Rather {this.props.question.optionTwo.text} ?</div> 
						}
						<ProgressBar now={optionTwoPer} label={`${optionTwoPer}%`}/>
						<Card.Text >
							{this.props.question.optionTwo.votes.length} out of {Score}{' '}votes
						</Card.Text>
					</div>	
				</Card.Body>
			</Card>
		);
	}
}

function mapStateToProps({ questions, users, authedUser }, { id }) {

	return {
		question: questions[id] ? questions[id] : null,
		author: questions[id] ? users[questions[id].author] : null,
		authedUser
	};
}

export default connect(mapStateToProps)(AnsweredQuestion);
