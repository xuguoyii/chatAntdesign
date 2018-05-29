import React from 'react';

export default class List extends React.PureComponent {
	constructor(props) {
		super(props)
	}

	renderList() {
		const { title, icon, index, data } = this.props;
		return (

			< div className='list-item' key={index} onClick={
				() => { this.changeOpen(index, title) }
			}>
				<div className='item-left'>
					<i className={'iconfont' + ' ' + icon}></i>
					<span>{title}</span>
				</div>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<span style={{ display: 'inline-block', height: '28px', lineHeight: '25px' }}>{data ? data : ''}</span>
					<i className='iconfont icon-iconfontyoujiantou'></i>
				</div>
			</div >

		)
	};

	changeOpen(index, title) {
		if (this.props.drawer) {
			this.props.drawer(index);
		}

	}

	render() {
		return (
			<div className='list-contain'>
				{this.renderList()}
			</div>
		)
	}
}
