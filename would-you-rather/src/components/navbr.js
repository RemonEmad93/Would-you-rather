import React from "react";
import { connect } from 'react-redux';
import { NavLink} from 'react-router-dom';
import { Navbar,Button, Nav,Container } from "react-bootstrap";
import { reSetAuthedUser } from '../redux/actions/authedUser';


class Navbr extends React.Component{
    render(){
        const {dispatch } = this.props;

        const logout = () => {
            dispatch(reSetAuthedUser());
        };

        return(
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={NavLink} to="/" exact>Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/add">New Question</Nav.Link>
                            <Nav.Link as={NavLink} to="/leaderboard">LeaderBoard</Nav.Link>
                        </Nav>
                        <Nav>
                            <Navbar.Text>
                                {this.props.user.name}
                            </Navbar.Text>
                            <Button variant="primary" onClick={logout}>logout</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
 
        )
    }
}

function mapStateToProps({ users, authedUser }) {
	return {
		user: users[authedUser]
	};
}

export default connect(mapStateToProps)(Navbr)