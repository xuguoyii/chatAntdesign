import React from 'react';
import { connect } from 'react-redux';

export default class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	// 判断是否需要更新
	tabClick(index, isFocus) {
		if (!isFocus) {
			this.props.updateTotal({ focus: index });
		}
	}

	// 渲染底部内容
	renderFooter() {
		const footer = [
			{
				iconfont: 'icon-jianyuede',
				title: '主页'
			},
			{
				iconfont: 'icon-zhinengyouhua',
				title: '扎堆'
			},
			{
				iconfont: 'icon-tixing',
				title: '提醒'
			},
			{
				iconfont: 'icon-shezhi',
				title: '我的'
			}
		];
		const { focus } = this.props;
		const { show } = this.props;
		const list = footer.map((item, index) => {
			const isFocus = (index === focus);
			return (
				<a onClick={() => { this.tabClick(index, isFocus); }} className={isFocus ? 'footer-item-on' : 'footer-item'} key={index}>
					<i className={'iconfont' + ' ' + item.iconfont}></i>
					<span>{item.title}</span>
				</a>
			);
		});
		return (
			<nav className='footer-bar'>
				{list}
			</nav>
		);
	}

	render() {
		return (
			<div className='footer'>
				{this.renderFooter()}
			</div>
		);
	}
}