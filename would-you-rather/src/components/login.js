import React from "react";
import { connect } from 'react-redux';
import { Col, Form, Row, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { setAuthedUser } from '../redux/actions/authedUser';

class Login extends React.Component{
    inputs = (e) => {
		const userID = this.userID.value;
		const { dispatch } = this.props;

		e.preventDefault();

		if (userID !== '') {
			dispatch(setAuthedUser(userID));
		} 
	};

    render(){
        return(
			<Row  className="mt-5 text-center" >
				<Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg" style={{backgroundColor:"skyblue"}}>
					<h3>Would You Rather App!</h3>

					<Form onSubmit={this.inputs}>
						<Form.Control as="select" ref={(id) => (this.userID = id)}>
							<option value="">Select user</option>
							{this.props.userNames.map((item) => (
								<option value={item.value} key={item.value}>
									{item.label}
								</option>
							))}
						</Form.Control>
						
						<Button type="submit" className="mt-3" variant="primary" >Sign in</Button>
					</Form>
				</Col>
			</Row>
        )
    }
}

function mapStateToProps({ users }) {
	return {
		userNames: Object.keys(users).map((id) => ({
			value: id,
			label: users[id].name
		}))
	};
}

export default connect(mapStateToProps)(Login)


