import React from 'react';
import { connect } from 'react-redux';
import Home from '../pages/Home';

class HomeContainer extends React.Component {
	render() {
		return (
			<Home {...this.props} />
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const { total, favorite, login, updateUserGroup } = state;
	console.log(updateUserGroup)
	return {
		focus: total.focus || 0,
		favorite: favorite || [],
		login: login || [],
		user: {username: updateUserGroup.username},
		userGroup: updateUserGroup.userGroup
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateTotal: (payload) => {
			return dispatch({
				type: 'UPDATE_TOTAL',
				payload: payload
			});
		},
		getMyFavorite: (payload) => {
			return dispatch({
				type: 'GET_MYFAVORITE_START',
				payload: payload
			});
		},
		getFeedback: (payload) => {
			console.log(payload);
			return dispatch({
				type: 'GET_FEEDBACK_START',
				payload: payload
			});
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
