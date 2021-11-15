import React from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs} from "react-bootstrap";
import QuestionLayout from '../components/question_layout';
import Navbr from '../components/navbr'

class Home extends React.Component {
	render() {
		return (
			<div>
				<Navbr/>
				<Tabs className="mt-3 justify-content-md-center">
					<Tab eventKey="unanswered" title="Unanswered Questions" style={{margin:"0 0 0 22%"}} >
                        { this.props.unansweredQuestionIds.map((id) => <QuestionLayout key={id} id={id} />)}
					</Tab>

					<Tab eventKey="answered" title="Answered Questions" style={{margin:"0 0 0 22%"}}>
                    { this.props.answeredQuestionIds.map((id) => <QuestionLayout key={id} id={id} />)}
					</Tab>
				</Tabs>
			</div>
		);
	}
}

function mapStateToProps({ authedUser, questions, users }) {
	const unansweredQuestionIds = Object.keys(questions)
		.filter((id) => !users[authedUser].answers.hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);

	const answeredQuestionIds = Object.keys(questions)
		.filter((id) => users[authedUser].answers.hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);

	
	return {
		unansweredQuestionIds,
		answeredQuestionIds
		
	};
}

export default connect(mapStateToProps)(Home);
