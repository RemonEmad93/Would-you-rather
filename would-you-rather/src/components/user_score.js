import React from 'react';
import { connect } from 'react-redux';
import {Card} from 'react-bootstrap';


class UserScore extends React.Component {
	render() {
		return (
			<Card bg="light" className="m-3" style={{width:"70%"}}>
				<Card.Header style={{backgroundColor:"skyblue"}} className="text-center"  >
					<Card.Img style={{width:"10%" ,height:'10%', borderRadius:'100%'}} src={this.props.user.avatarURL} />
					<br/>
					{this.props.user.name}
				</Card.Header>
				
				<Card.Body className="d-flex justify-content-center">
					<div className="text-center" >
						Answered Questions: {Object.keys(this.props.user.answers).length}
						<br/>
						Created Questions: {this.props.user.questions.length}
						<br/>
						<span style={{color:"blue", fontWeight:"bold"}}>Score: {Object.keys(this.props.user.answers).length + this.props.user.questions.length}</span>
					</div>
				</Card.Body>
			</Card>
		);
	}
}

function mapStateToProps({ users }, { id }) {
	return {
		user: users[id]
	};
}

export default connect(mapStateToProps)(UserScore);
