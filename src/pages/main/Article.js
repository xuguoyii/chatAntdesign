import React from 'react';
import axios from 'axios';

import Utils from '../../utils';

export default class Article extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			article: {}
		}
	}

	componentWillMount() {
		const { cid, id } = Utils.getRedirect(this);
		this.props.getArticle({
			cid: cid,
			id: id
		});
	}

	componentWillReceiveProps(nextProps) {
		const { article } = nextProps;
		if (article.data) {
			this.setState({
				article: article.data.data.data
			});
		}
	}

	renderTitle() {
		const { article } = this.state;
		return (
			<div className='title'>
				<h1>{article.bt}</h1>
				<p>文号：{article.wh}</p>
				<p>
					<span>法规状态：{article.state}</span>
					<span>发布时间：{article.sj}</span>
				</p>
			</div>
		);
	}

	// 渲染富文本
	renderArticle() {
		const { article } = this.state;
		return {
			__html: article.content
		}
	}

	render() {
		const { article } = this.state;
		return (
			<div className='content'>
				<div className='center'>
					{this.renderTitle()}
					<div className='html' dangerouslySetInnerHTML={this.renderArticle()} />
				</div>
			</div>
		);
	}
}
