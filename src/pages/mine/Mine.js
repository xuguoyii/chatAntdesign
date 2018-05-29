import React from 'react';
import List from '../../components/List';
import Sidebar from 'react-sidebar';
import PropTypes from 'prop-types';
import SidebarContent from '../../components/SidebarContent';
import Background from '../../assets/image/Mine/userBack.jpg';

export default class Mine extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listData: [
				{ icon: 'icon-vip-copy', title: '会员中心', data: '2017-10-08' },
				{ icon: 'icon-shoucang1', title: '我的收藏' },
				{ icon: 'icon-jilu', title: '交易记录' },
				{ icon: 'icon-dingdan1', title: '我的发单' },
				{ icon: 'icon-zhinengyouhua', title: '我的扎堆' },
				{ icon: 'icon-shezhi', title: '设置' },
			],

			img: `${require('../../assets/image/Home/logo.png')}`,
			name: '中税答疑',
			synopsis: '专业的税收筹划平台',
			show: false,
			index: 1,

			docked: false,
			open: false,
			transitions: true,
			touch: true,
			shadow: false,
			pullRight: false,
			touchHandleWidth: 20,
			dragToggleDistance: 30,

		};

		this.onSetOpen = this.onSetOpen.bind(this);
	};

	/**
	 * 渲染当前用户
	 *
	 * @returns
	 * @memberof Mine
	 */
	renderUser() {
		const { show } = this.props;
		return (
			<div className='user-contain' style={{ background: `url(${Background}) no-repeat`, backgroundSize: 'cover', }}>
				<i className='iconfont icon-zhuxiao1'></i>
				<div className='user-img'>
					<img src={this.state.img} />
				</div>
				<div className='user-name'>
					{this.state.name}
				</div>
				<div className='user-synopsis'>
					{this.state.synopsis}
				</div>
			</div>
		)
	};

	/**
	 * sidbar相关方法
	 *
	 * @param {any} open
	 * @memberof Mine
	 */
	onSetOpen(open) {
		this.setState({ open: open });
	};

	open(index) {
		this.setState({
			open: !this.state.open,
			index: index,
		});
	};

	render() {
		const { focus } = this.props;
		const sidebar = <SidebarContent index={this.state.index} {...this.props} />;
		const sidebarProps = {
			sidebar: sidebar,
			docked: this.state.docked,
			sidebarClassName: 'custom-sidebar-class',
			open: this.state.open,
			touch: this.state.touch,
			shadow: this.state.shadow,
			pullRight: this.state.pullRight,
			touchHandleWidth: this.state.touchHandleWidth,
			dragToggleDistance: this.state.dragToggleDistance,
			transitions: this.state.transitions,
			onSetOpen: this.onSetOpen,
		};


		return (

			<div className='content-footer' style={{ display: (focus === 3) ? 'block' : 'none' }}>
				<div className='center'>
					<div>

						<Sidebar {...sidebarProps}>

							<div className='main' style={{ maxWidth: '768px', margin: '0 auto', marginBottom: '3.6rem' }}>
								{this.renderUser()}

								{this.state.listData.map((item, index) => {
									return <List key={index} {...item} drawer={() => { this.open(index + 1) }} open={this.state.open} />
								})}
							</div>
						</Sidebar>

					</div>

				</div>
			</div>
		)
	}
}
