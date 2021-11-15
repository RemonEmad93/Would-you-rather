import React from 'react';
import { connect } from 'react-redux';
import UnansweredQuestion from '../components/unanswered_question';
import AnsweredQuestion from '../components/answered_question';
import Navbr from '../components/navbr'

class Question extends React.Component {
	render() {
		const answer = this.props.autherUserAnswer.hasOwnProperty(this.props.match.params.id) ? true : false;

		return (
			<div>
				<Navbr/>
				{answer ? 
				<div style={{margin:"0 0 0 20%"}}> 
				<AnsweredQuestion id={this.props.match.params.id}/> 
				</div>
				: 
				<div style={{margin:"0 0 0 20%"}}> 
				<UnansweredQuestion id={this.props.match.params.id}/> 
				</div>
				}
			</div>
		);
	}
}

function mapStateToProps({ authedUser, users }) {
	const autherUserAnswer = users[authedUser].answers;

	return {
		autherUserAnswer
	};
}

export default connect(mapStateToProps)(Question);
