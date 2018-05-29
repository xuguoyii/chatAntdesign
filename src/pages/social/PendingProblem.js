import React from 'react';
import Problem from '../../components/Problem';
import Utils from '../../utils';

export default class Pendingproblem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			head: '待解决问题',
		}
	}

	renderProblemlist() {
		const problemData = [
			{
				text: '上市公司如何进行税收筹划合理避税？',
				price: '88',
				time: '剩余20分30秒',
				type: '税收筹划'
			},
			{
				text: '父母把一套房产给名下没房的子女，赠与还是买卖，现在的政策怎样最省钱？',
				price: '88',
				time: '剩余20分30秒',
				type: '房产税'
			},
			{
				text: '上市公司如何进行税收筹划合理避税？',
				price: '88',
				time: '剩余20分30秒',
				type: '税收筹划'
			}
		];
		return (

			<div className='problem-content'>
				{problemData.map((item, index) => {
					return <Problem {...item} key={index} />
				})}
			</div>

		)

	}
	render() {
		const { title } = Utils.getRedirect(this);
		console.log(Utils.getRedirect(this).title)
		return (
			<div className='content'>
				<div className='center'>
					<div className='headlittle'>{title}</div>
					{this.renderProblemlist()}
				</div>
			</div>
		)
	}

}
