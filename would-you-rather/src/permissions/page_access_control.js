import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../views/home';
import AddQuestion from '../views/add_question';
import Question from '../views/question';
import LeaderBoard from '../views/leader_board';
import Page404 from '../views/page_404';

class PageAccessControl extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/add" component={AddQuestion} />
					<Route path="/leaderboard" component={LeaderBoard} />
					<Route path="/questions/:id" component={Question} />
					<Route component={Page404} />
				</Switch>
			</Router>
		);
	}
}

export default PageAccessControl;
