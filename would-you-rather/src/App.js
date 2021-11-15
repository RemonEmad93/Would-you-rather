import React from "react"
import { connect } from 'react-redux'
import LoginView from './views/login_view'
import { handleInitialData } from './redux/actions/shared';
import PageAccessControl from './permissions/page_access_control'



class App extends React.Component{
  componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

  render(){
    return(
      <div className="app">
        {!this.props.authedUser ? <LoginView /> : <PageAccessControl />}
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
	return {
		authedUser
	};
}

export default connect(mapStateToProps)(App);
