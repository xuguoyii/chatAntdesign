import React from 'react';
import List from '../../components/List';
import Sidebar from 'react-sidebar';
import PropTypes from 'prop-types';
import SidebarContent from '../../components/SidebarContent';

export default class Warn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
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
		this.menuButtonClick = this.menuButtonClick.bind(this);
	};

	static contextTypes = {
		router: PropTypes.object
	};
	redirectDetail(path) {
		this.context.router.history.push('/' + path);
	};
	onSetOpen(open) {
		this.setState({ open: open });
	};

	menuButtonClick(ev) {
		ev.preventDefault();
		this.onSetOpen(!this.state.open);
	};
	open(index) {
		this.setState({
			open: !this.state.open,
			index: index,
		});
	};
	render() {
		const warnList = [
			{ icon: 'icon-sixinxiaoxi', title: '私信提醒' },
			{ icon: 'icon-dingyue-copy', title: '订阅' },
			{ icon: 'icon-xitongxiaoxi', title: '系统消息' },
			{ icon: 'icon-jiaoyixiaoxi', title: '交易提醒' },
			{ icon: 'icon-like', title: '关注提醒' },
			{ icon: 'icon-shejiao', title: '堆的提醒' },
			{ icon: 'icon-huifu', title: '回复消息' },
		];
		const { focus } = this.props;
		const sidebar = <SidebarContent index={this.state.index} />;
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
			<div className='content-footer' style={{ display: (focus === 2) ? 'block' : 'none' }}>
				<div className='center'>

					<Sidebar {...sidebarProps}>
						<div className="main" style={{ maxWidth: '768px', margin: '0 auto' }}>
							<div className='headlittle'>提醒</div>
							{warnList.map((item, index) => {
								return <List {...item} key={index} drawer={() => { this.open(index + 10) }} open={this.state.open} />
							})}
						</div>
					</Sidebar>
				</div>
			</div>
		)
	}
}