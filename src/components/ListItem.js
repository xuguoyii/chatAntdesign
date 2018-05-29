import React from 'react';
import { Avatar } from 'antd';

export default class ListItem extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	// 卡片头部一num=2为头部带有标题和收藏图标或者编号；num=3为头部带有推荐的堆；num=4为回复信息头部
	headerOne() {
		const { headerLeft, headerRight, num, headIcon, numbers, name, time } = this.props;
		switch (num) {
			case 2:
				return (
					<div className='item-header header-two'>
						<div className='item-left'>
							<span>{headerLeft}</span>
						</div>
						<div className='item-middle'></div>
						<div className='item-right'>
							{headIcon ? <i className={'iconfont' + ' ' + headIcon}></i> : <span style={{ color: '#281f1d' }}>{numbers}</span>}

						</div>
					</div>
				);
			case 3:
				return (
					<div className='item-header'>
						<div className='item-left'>
							<span>{headerLeft}</span>
						</div>
						<div className='item-middle'></div>
						<div className='item-right'>
							<span>{headerRight}</span>
						</div>
					</div>
				);
			case 4:
				return (
					<div className='item-header' style={{ justifyContent: 'flex-start' }}>
						<div className='item-left' style={{ display: 'flex', alignItems: 'center' }}>
							<Avatar icon='user' style={{ marginRight: '0.5rem' }} />
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<div>
									{name}
								</div>
								<div>
									{time}
								</div>
							</div>
						</div>
					</div>
				);
			default:
				null;
		}
	}

	// 卡片内容一
	contentOne() {
		const { content, cost, num } = this.props;
		return (
			<div className='item-content'>
				<span style={{ color: num == 1 ? '#281f1d' : '', fontWeight: num == 1 ? 'bold' : '' }}>{content}</span>
			</div>
		);
	}
	// 卡片内容二交易记录
	contentTwo() {
		const { content, cost } = this.props;
		return (
			<div className='item-content'>
				<span>{content}</span>
				<div className='const'>{cost}</div>
			</div>
		);
	}
	// 卡片内容三回复信息

	contentThree() {
		const { content, cost, reply } = this.props;
		return (
			<div className='item-content'>
				<div style={{ overflow: ' hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', }}>回复您：{reply}</div>
				<div style={{ overflow: ' hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', backgroundColor: '#ddd', height: '40px', lineHeight: '40px', padding: '0 0.5rem', borderRadius: '5px', fontSize: '0.85rem' }}>{content}</div>
			</div>
		);
	}


	// 卡片尾部一num=1、2为左侧堆名和右侧日期；num=3为底部显示文件类型；num=4为回复消息

	footerOne() {
		const { footerLeft, footerMiddle, footerRight, format, num, icon } = this.props;
		switch (num) {
			case 1:
				return (
					<div className='item-footer footer-two'>
						<div className='item-left'>
							<i className={'iconfont' + ' ' + icon}></i>
							<span>{footerLeft}</span>
						</div>

						<div className='item-right'>
							<i className='iconfont icon-riqi'></i>
							<span>{footerRight}</span>
						</div>
					</div>
				);
			case 2:
				return (
					<div className='item-footer footer-two'>
						<div className='item-left'>
							<i className={'iconfont' + ' ' + icon}></i>
							<span>{footerLeft}</span>
						</div>

						<div className='item-right'>
							<i className='iconfont icon-riqi'></i>
							<span>{footerRight}</span>
						</div>
					</div>
				);
			case 3:
				return (
					<div className='item-footer'>
						<div className='item-left'>
							<i className='iconfont icon-qian'></i>
							<span>{footerLeft}</span>
						</div>
						<div className={'item-middle' + ' ' + format}>
							<i className='iconfont icon-DOC'></i>
							<span>{footerMiddle}</span>
						</div>
						<div className='item-right'>
							<i className='iconfont icon-riqi'></i>
							<span>{footerRight}</span>
						</div>
					</div>
				);
			case 4:
				return (
					<div className='item-footer footer-two'>
						<div className='item-left'>
							<i className={'iconfont' + ' ' + icon}></i>
							<span>{footerLeft}</span>
						</div>

						<div className='item-right'>
							<i className='iconfont icon-pinglun2'></i>
							<span>回复</span>
						</div>
					</div>
				);
			default:
				null;
		}

	}



	// 渲染卡片
	renderCard() {
		const { type } = this.props;
		switch (type) {
			case 'one':
				return (
					<div className='list-item'>
						{this.headerOne()}
						{this.contentOne()}
						{this.footerOne()}
					</div>
				);
			case 'two':
				return (
					<div className='list-item'>
						{this.headerOne()}
						{this.contentTwo()}
						{this.footerOne()}
					</div>
				);
			case 'three':
				return (
					<div className='list-item'>
						{this.headerOne()}
						{this.contentThree()}
						{this.footerOne()}
					</div>
				);
			default:
				return null;
		}


	}

	render() {
		return this.renderCard();
	}
}
