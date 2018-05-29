import React from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Main from './main/Main';
import Social from './social/Social';
import Notice from './notice/Notice';
import Mine from './mine/Mine';

export default class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {


	}

	componentDidMount() {
		
		this.props.getMyFavorite({
			page: '1',
		});


	}

	// componentWillReceiveProps(nextProps) {
	// 	if (this.props.login.data.userinfo.token !== nextProps.login.data.userinfo.token) {
	// 		const { token } = nextProps.login.data.userinfo;
	// 		this.props.getMyFavorite({
	// 			token: token
	// 		});
	// 	}
	// }

	render() {
		const { focus } = this.props;
		return (
			<div>
				<Main {...this.props} />
				<Social {...this.props} />
				<Notice {...this.props} />
				<Mine {...this.props} />
			</div>
		);
	}
}
