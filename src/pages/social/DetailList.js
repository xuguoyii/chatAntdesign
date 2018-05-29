import React from 'react';
import ListItem from '../../components/ListItem'

export default class Detaillist extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			head: '课件'
		}
	}

	renderList() {
		const detailList =
			[{
				headerLeft: '实物抵押抵税问题稽查案例',
				headerRight: '税收筹划堆',
				content: '大家一致认为，习近平总书记发表的重要讲话，科学分析了当前国际国内形势，深刻阐述了党的十八大以来党和国家事业发生的历史性变革，深刻阐述了新的历史条件下坚持和发展中国特色社会主义的一系列重大理论和实践问题，提出了一系列新的重要思想、重要观点、重大判断、重大举措，具有很强的思想性、战略性、前瞻性、指导性，具有重大而深远的政治意义、理论意义、实践意义，为党和国家各项事业发展提供了理论指导、思想指引和行动指南。',
				footerLeft: '88 元',
				footerMiddle: 'ELX',
				footerRight: '2017-08-08',
				format: 'elx',
				num: 3,
			},
			{
				headerLeft: '实物抵押抵税问题稽查案例',
				headerRight: '税收筹划堆',
				content: '大家一致认为，习近平总书记发表的重要讲话，科学分析了当前国际国内形势，深刻阐述了党的十八大以来党和国家事业发生的历史性变革，深刻阐述了新的历史条件下坚持和发展中国特色社会主义的一系列重大理论和实践问题，提出了一系列新的重要思想、重要观点、重大判断、重大举措，具有很强的思想性、战略性、前瞻性、指导性，具有重大而深远的政治意义、理论意义、实践意义，为党和国家各项事业发展提供了理论指导、思想指引和行动指南。',
				footerLeft: '88 元',
				footerMiddle: 'PDF',
				footerRight: '2017-08-08',
				format: 'one',
				num: 3,
			},
			{
				headerLeft: '实物抵押抵税问题稽查案例',
				headerRight: '税收筹划堆',
				content: '大家一致认为，习近平总书记发表的重要讲话，科学分析了当前国际国内形势，深刻阐述了党的十八大以来党和国家事业发生的历史性变革，深刻阐述了新的历史条件下坚持和发展中国特色社会主义的一系列重大理论和实践问题，提出了一系列新的重要思想、重要观点、重大判断、重大举措，具有很强的思想性、战略性、前瞻性、指导性，具有重大而深远的政治意义、理论意义、实践意义，为党和国家各项事业发展提供了理论指导、思想指引和行动指南。',
				footerLeft: '88 元',
				footerMiddle: 'DOC',
				footerRight: '2017-08-08',
				format: 'doc',
				num: 3,
			},
			{
				headerLeft: '实物抵押抵税问题稽查案例',
				headerRight: '税收筹划堆',
				content: '大家一致认为，习近平总书记发表的重要讲话，科学分析了当前国际国内形势，深刻阐述了党的十八大以来党和国家事业发生的历史性变革，深刻阐述了新的历史条件下坚持和发展中国特色社会主义的一系列重大理论和实践问题，提出了一系列新的重要思想、重要观点、重大判断、重大举措，具有很强的思想性、战略性、前瞻性、指导性，具有重大而深远的政治意义、理论意义、实践意义，为党和国家各项事业发展提供了理论指导、思想指引和行动指南。',
				footerLeft: '88 元',
				footerMiddle: 'TXT',
				footerRight: '2017-08-08',
				format: 'txt',
				num: 3,
			}
			];
		return (
			<div className='detail-list-content'>
				<div className='headlittle'>{this.state.head}</div>
				<div className='detail-head'>我关注的</div>
				{detailList.map((item, index) => {
					return <ListItem {...item} key={index} type='one' />
				})}
				<div className='detail-head'>其他</div>
				{detailList.map((item, index) => {
					return <ListItem {...item} key={index} type='one' />
				})}


			</div>
		);
	}

	render() {
		return (
			<div className='content'>
				<div className='center'>
					{this.renderList()}
				</div>
			</div>
		);
	}
}
