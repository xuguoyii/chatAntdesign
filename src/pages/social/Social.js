import React from 'react';
import { Input, Tag } from 'antd';
import Utils from '../../utils';
const { Search } = Input;

export default class Social extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			focusData: [
				{ img: `${require('../../assets/image/Home/logo.png')}`, title: '纳税申报堆', text: '超2000人专业服务团队，一对一专业顾问服务，解决您申请中遇到的问题。', focus: false, focusText: '关注' },
				{ img: `${require('../../assets/image/Home/logo.png')}`, title: '纳税申报堆', text: '超2000人专业服务团队，一对一专业顾问服务，解决您申请中遇到的问题。超2000人专业服务团队，一对一专业顾问服务，解决您申请中遇到的问题。', focus: true, focusText: '取消关注' },
			]
		}
	}

	renderSearchbar() {
		const searchBar =
			<div className='search-bar'>
				<span className='city'>
					<i className='iconfont icon-insta360logo13'></i>
					北京
				</span>
				<Search
					size='large'
					placeholder='请输入您想搜索的内容'
					onSearch={(value) => { console.log(value); }}
					onPressEnter={(e) => { console.log(e.target.value); }}
				/>
			</div >
		return (
			<div>
				{searchBar}
			</div>
		)
	}

	renderFuntionlist() {
		const listData = [
			{ icon: 'icon-anli', title: '案例' },
			{ icon: 'icon-kejian', title: '课件' },
			{ icon: 'icon-tubiaozhizuomoban', title: '待解决问题' },
		];

		const list = listData.map((item, index) => {
			let title = item.title;
			return (
				<div className='depot-item' onClick={index == 2 ? () => { Utils.redirect(this, 'pendingPromblem', [title]) } : () => { Utils.redirect(this, 'detailList', [title]) }} style={{ border: 'none' }} key={index}>
					<i className={'iconfont' + ' ' + item.icon}></i>
					<span>{item.title}</span>
				</div>
			);
		})


		return (
			<div className='depot'>
				<div className='depot-block'>
					{list}
				</div>

			</div>
		);
	}

	renderLocalrecommend() {
		const tagData = [
			'代理记账', '汇算清缴', '代开发票',
			'税务认证', '税收筹划', '培训课件',
			'政策答疑', '疑难业务', '疑难业务',
			'疑难业务',
		]

		const tagList = tagData.map((item, index) => {
			return (
				<div key={'1' + index}>
					<Tag key={index}>{item}</Tag>
				</div>
			)
		})
		return (
			<div className='tag-main'>
				<div className='tag-head'>
					本地推荐的堆
				</div>
				<div className='tag-content'>
					{tagList}
				</div>

			</div>
		)
	}

	renderIndustryrecommend() {
		const tagData = [
			'房地产', '建筑', '银行',
			'科技', '服务业', '电力',
			'运输', '制作业', '运输', '制作业',
		]

		const tagList = tagData.map((item, index) => {
			return (
				<div key={'2' + index}>
					<Tag key={index}>{item}</Tag>
				</div>
			)
		})
		return (
			<div className='tag-main' style={{ borderTop: 'none', paddingTop: '-0.5rem' }}>
				<div className='tag-head'>
					行业推荐的堆
				</div>
				<div className='tag-content'>
					{tagList}
				</div>

			</div>
		)
	}

	renderMyfocus() {
		const focusData = [
			{ img: `${require('../../assets/image/Home/logo.png')}`, title: '纳税申报堆', text: '超2000人专业服务团队，一对一专业顾问服务，解决您申请中遇到的问题。', focus: false, focusText: '关注' },
			{ img: `${require('../../assets/image/Home/logo.png')}`, title: '纳税申报堆', text: '超2000人专业服务团队，一对一专业顾问服务，解决您申请中遇到的问题。超2000人专业服务团队，一对一专业顾问服务，解决您申请中遇到的问题。', focus: true, focusText: '取消关注' },
		];
		const card =
			<div className='card-content'>
				{this.state.focusData.map((item, index) => {
					return (
						<div className='card-contain' key={index}>
							<div className='card-img'>
								<img src={item.img} />
							</div>
							<div className='card-main'>
								<div className='card-title'>
									{item.title}
								</div>
								<div className='card-text'>
									{item.text}
								</div>
							</div>
							<div className='card-tag'>
								<div onClick={() => { this.change(index) }} className={item.focus ? 'follow' : 'unfollow'}>
									{item.focus ? '取消关注' : '关注'}
								</div>
							</div>
						</div >
					)
				})
				}
			</div>;


		const focusList = <div>
			<div className='social-head'>
				我关注的堆
			</div>

			{card}
		</div>;
		return (
			<div className='social-content'>
				{focusList}

			</div>

		)
	}

	renderMycreat() {
		const listData = [
			{ img: `${require('../../assets/image/Home/logo.png')}`, title: '税收筹划堆', text: '税收筹划实在法律许可的范围内进行的，是纳税人在遵守国家法律及税收筹划实在法律许可的范围内进行的，是纳税人在遵守国家法律及...' },
			{ img: `${require('../../assets/image/Home/logo.png')}`, title: '进出口堆', text: '提供进出口税收解决方案。' },
		];
		const cardList =
			<div className='cardlist-content'>
				{listData.map((item, index) => {
					return (
						<div className='card-contain' key={index}>
							<div className='card-img'>
								<img src={item.img} />
							</div>
							<div className='card-main'>
								<div className='card-title'>
									{item.title}
								</div>
								<div className='card-text'>
									{item.text}
								</div>
							</div>
							<div className='card-tag'>
								<i className='iconfont icon-iconfontyoujiantou'></i>
							</div>
						</div >
					)
				})}

			</div>
		const creatList = <div>
			<div className='social-head'>
				我创建的堆
			</div>
			<div className='cardlist-content'>
				{cardList}
			</div>
		</div>;
		return (
			<div className='social-content'>
				{creatList}

			</div>

		)
	}

	change(index) {
		this.state.focusData[index].focus = !this.state.focusData[index].focus
		this.setState({
			focusData: this.state.focusData,
		})
	}

	render() {
		const { focus } = this.props;
		return (
			<div className='content-footer' style={{ display: (focus === 1) ? 'block' : 'none' }}>
				<div className='center'>
					{this.renderSearchbar()}
					{this.renderFuntionlist()}
					{this.renderLocalrecommend()}
					{this.renderIndustryrecommend()}
					{this.renderMyfocus()}
					{this.renderMycreat()}
				</div>
			</div>
		)
	}
}
