import React from 'react';
import { connect } from 'react-redux';
import UserScore from '../components/user_score';
import Navbr from '../components/navbr'

class LeaderBoard extends React.Component {
	render() {
		return (
			<div>
				<Navbr/>
				{this.props.userIDs.map((id) => (
					<div style={{margin:"0 0 0 20%"}}>
						<UserScore key={id} id={id}  />
					</div>
				))}
			</div>
		);
	}
}

function mapStateToProps({ users }) {
	const sortedUsers = Object.keys(users).sort((id1, id2) => {
		const score1 =
			Object.keys(users[id1].answers).length + users[id1].questions.length;
		const score2 =
			Object.keys(users[id2].answers).length + users[id2].questions.length;

		return score2 - score1;
	});

	return {
		userIDs: sortedUsers
	};
}

export default connect(mapStateToProps)(LeaderBoard);
