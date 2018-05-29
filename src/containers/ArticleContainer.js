import React from 'react';
import { connect } from 'react-redux';
import Article from '../pages/main/Article';

class ArticleContainer extends React.Component {
	render() {
		return (
			<Article {...this.props} />
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const { article } = state;
	return {
		article: article
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
		getArticle: (payload) => {
			return dispatch({
				type: 'GET_ARTICLE_START',
				payload: payload
			});
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);