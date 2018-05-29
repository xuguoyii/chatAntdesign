import React from 'react';
import { connect } from 'react-redux';
import Login from '../pages/Login/Login';

class LoginContainer extends React.Component {
	render() {
		return (
			<Login {...this.props} />
		);
	}
}

const mapStateToProps = (state, ownProps) => {

	return {
		user: state.login,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		login: (payload) => {
			return dispatch({
				type: 'LOGIN_START',
				payload: payload
			});
		},
		updateUserGroup: (payload) => {
			return dispatch({
				type: 'UPDATEUSERGROUP',
				payload: payload
			});
		},

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
