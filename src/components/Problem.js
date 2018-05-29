import React from 'react';

export default class Problem extends React.Component {
	constructor(props) {
		super(props)
	}

	renderProblem() {
		const { text, price, time, type } = this.props;
		const head = <div className='problem-head'>{text}</div>;
		const footer =
			<div className='problem-footer'>
				<div className='price'>
					<i className='iconfont icon-qian'></i>
					{price}
				</div>
				<div className='remaining-time btn'>{time}</div>
				<div className='type btn'>{type}</div>
			</div>
		return (
			<div className='problem-contain'>
				{head}
				{footer}
			</div>
		)
	}
	render() {
		return this.renderProblem();
	}

}
