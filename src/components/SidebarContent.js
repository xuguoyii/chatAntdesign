import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import List from './List';
import { Select, Input, Button, Upload, Collapse, Icon, Form, Tag } from 'antd';
import { Cascader } from 'antd';
import { Avatar } from 'antd';
import Background from '../assets/image/Mine/userBack.jpg';
const Panel = Collapse.Panel;
const Option = Select.Option;
const { TextArea } = Input;
const FormItem = Form.Item;
let _this = this;

class SidebarContent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			show: true,
			head: '我的扎堆',
			count: '获取验证码',
			timer: true,
			password: '',
			content: '',
			subscribeList: [
				{
					head: '法规库',
					edit: true,
					data: [{ text: '增值税', select: true }, { text: '个人所得税', select: false }, { text: '营改增', select: true }, { text: '税收征管', select: true }, { text: '增值税1', select: true }, { text: '个人所得税1', select: false }, { text: '营改增1', select: true }, { text: '税收征管1', select: true }]
				},
				{
					head: '答疑库',
					edit: true,
					data: [{ text: '税务总局答疑', select: true }, { text: '各地答疑', select: false }]
				},
				{
					head: '案例库',
					edit: true,
					data: [{ text: '税收征贷', select: true }, { text: '税种', select: false }, { text: '发票', select: true }, { text: '法院判决', select: true },]
				}
			],

		}
	};

	creatSocial() {
		this.setState({
			show: false,
			head: '创建堆',
		})
	};
	backList() {
		this.setState({
			show: true,
			head: '我的扎堆',
		})
	};
	time() {
		let count = 60;
		clearInterval();
		let timer = setInterval(() => {
			if (count > 0) {
				this.setState(
					{
						count: count + 's',
						timer: false,
					}
				);
				count = --count;

			} else {
				clearInterval(timer);
				this.setState(
					{
						count: '请重新获取验证码',
						timer: true,
					}
				)
			}
		}, 1000)

	};

	renderMember() {
		const memberData = [
			{ icon: 'icon-vip-copy', title: '会员中心', data: '2017-10-08' },
			{ icon: 'icon-qianbao', title: '钱包', data: '0.2元' },

		];
		return (
			<div>
				<div className='head'>会员中心</div>
				<div className='sidebar-content'>
					{memberData.map((item, index) => {
						return <List key={index} {...item} />
					})}
					<div className='user-contain' >
						<img src={Background} width='100%' />
					</div>
				</div>
			</div>
		);
	};

	renderCollection() {
		const collectionlList =
			[{
				headerLeft: '实物抵押抵税问题稽查案例',
				headerRight: '税收筹划堆',
				content: '大家一致认为，习近平总书记发表的重要讲话，科学分析了当前国际国内形势，深刻阐述了党的十八大以来党和国家事业发生的历史性变革，深刻阐述了新的历史条件下坚持和发展中国特色社会主义的一系列重大理论和实践问题，提出了一系列新的重要思想、重要观点、重大判断、重大举措，具有很强的思想性、战略性、前瞻性、指导性，具有重大而深远的政治意义、理论意义、实践意义，为党和国家各项事业发展提供了理论指导、思想指引和行动指南。',
				footerLeft: '税收筹划堆',
				footerRight: '2017-08-08',
				num: 2,
				icon: 'icon-iconmultiplyresource',
				headIcon: 'icon-like_fill',
			},
			{
				headerLeft: '实物抵押抵税问题稽查案例',
				headerRight: '税收筹划堆',
				content: '大家一致认为，习近平总书记发表的重要讲话，科学分析了当前国际国内形势，深刻阐述了党的十八大以来党和国家事业发生的历史性变革，深刻阐述了新的历史条件下坚持和发展中国特色社会主义的一系列重大理论和实践问题，提出了一系列新的重要思想、重要观点、重大判断、重大举措，具有很强的思想性、战略性、前瞻性、指导性，具有重大而深远的政治意义、理论意义、实践意义，为党和国家各项事业发展提供了理论指导、思想指引和行动指南。',
				footerLeft: '税收筹划堆',
				footerRight: '2017-08-08',
				num: 2,
				icon: 'icon-iconmultiplyresource',
				headIcon: 'icon-like_fill',
			},
			];
		return (
			<div>
				<div className='head'>我的收藏</div>
				<div className='sidebar-content'>
					{collectionlList.map((item, index) => {
						return <ListItem {...item} key={index} type='one' />
					})}
				</div>
			</div>
		);

	};

	renderTransaction() {
		const transactionList = [{
			headerLeft: '问答消费',
			content: '测试数据',
			footerLeft: '微信支付',
			cost: '-20',
			footerRight: '2017-08-08',
			numbers: 'No.1',
			num: 2,
			icon: 'icon-weixinzhifu',
		},
		{
			headerLeft: '问答消费',
			content: '测试数据',
			footerLeft: '支付宝支付',
			cost: '+20',
			footerRight: '2017-08-08',
			numbers: 'No.1',
			num: 2,
			icon: 'icon-zhifubao',
		},];
		return (
			<div>
				<div className='head'>交易记录</div>
				<div className='sidebar-content'>
					{transactionList.map((item, index) => {
						return <ListItem {...item} key={index} type='two' />
					})}
				</div>
			</div>
		);
	};

	renderOrder() {
		const orderList = [{
			content: '测试数据',
			footerRight: '2017-08-08',
			numbers: 'No.1',
			num: 2,
		},
		{
			content: '测试数据',
			footerRight: '2017-08-08',
			numbers: 'No.1',
			num: 2,
		},];
		return (
			<div>
				<div className='head'>我的发单</div>
				<div className='sidebar-content'>
					{orderList.map((item, index) => {
						return <ListItem {...item} key={index} type='one' />
					})}
				</div>
			</div>
		);
	};

	renderSocial() {
		const options = [{
			value: '北京',
			label: '北京',
			children: [{
				value: '北京市',
				label: '北京市',
				children: [{
					value: '东城区',
					label: '东城区',
				},
				{
					value: '西城区',
					label: '西城区',
				}],
			}],
		}, {
			value: '黑龙江',
			label: '黑龙江',
			children: [{
				value: '哈尔滨',
				label: '哈尔滨',
				children: [{
					value: '香坊区',
					label: '香坊区',
				}],
			}],
		}];
		const { form } = this.props;
		const { getFieldDecorator } = form;
		return (
			<div>
				<div className='head' style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '0.5rem' }}>
					<i style={{ display: this.state.show ? 'none' : 'block', cursor: 'pointer' }} className='iconfont icon-fanhui2' onClick={() => { this.backList() }}></i>
					{this.state.head}
					<i style={{ display: this.state.show ? 'block' : 'none', cursor: 'pointer' }} className='iconfont icon-jiahao' onClick={() => { this.creatSocial() }}></i>
					<span style={{ display: this.state.show ? 'none' : 'block', cursor: 'pointer' }}>创建</span>
				</div>
				<div className='sidebar-content'>
					<div style={{ display: this.state.show ? 'block' : 'none' }}></div>
					<div style={{ display: this.state.show ? 'none' : 'block', padding: '0.5rem', backgroundColor: '#fff' }} className='creat-form'>
						<Form
							layout='vertical'
						>
							<FormItem

								label='名称'
								hasFeedback
							>{getFieldDecorator('name', {
								validateTrigger: 'onBlur',
								rules: [
									{

										message: '请输入新昵称',
										type: 'string',

									}, {
										validator(rule, value, callback) {
											if (value.length > 10) {
												callback(`名称长度应小于10位`)
											} else if (value == '') {
												callback(`请输入堆得名称 `)
											}
											else {
												callback();
											}
										}
									}
								],
							})(
								<Input placeholder='请输入名称' className='creat-input' />
								)}
							</FormItem>
							<FormItem

								label='分类'
								hasFeedback
							>
								<Select defaultValue='分类1' className='creat-select'>
									<Option value='分类1'>分类1</Option>
									<Option value='分类2'>分类2</Option>
								</Select>
							</FormItem>
							<FormItem

								label='行业'
								hasFeedback
							>
								<Select defaultValue='行业1' className='creat-select'>
									<Option value='行业1'>行业1</Option>
									<Option value='行业2'>行业2</Option>
								</Select>
							</FormItem>
							<FormItem

								label='地区'
								hasFeedback
							>
								<Cascader className='creat-select' defaultValue={['北京', '北京市', '东城区']} options={options} />
							</FormItem>
							<FormItem

								label='简介'
								hasFeedback
							>
								<TextArea rows={4} className='textarea' />
							</FormItem>
							<FormItem

								label='案例收费'
								hasFeedback
							>
								<Select defaultValue='按年收费' className='creat-select'>
									<Option value='分类1'>按年收费</Option>
									<Option value='分类2'>按月收费</Option>
								</Select>
							</FormItem>
							<FormItem

								label='课件收费'
								hasFeedback
							>
								<Select defaultValue='按年收费' className='creat-select'>
									<Option value='分类1'>按年收费</Option>
									<Option value='分类2'>按月收费</Option>
								</Select>
							</FormItem>
						</Form>

					</div>

				</div>
			</div>
		);
	};
	renderSetting() {

		const that = this;

		const upload = {
			action: '',
			listType: 'picture',
		};
		const settingData = [
			{ icon: 'icon-touxiang', title: '个人资料' },
			{ icon: 'icon-zhanghu', title: '账户设置' },
			{ icon: 'icon-dingyue', title: '订阅设置' },
			{ icon: 'icon-guanyu', title: '关于我们' },
			{ icon: 'icon-yijian', title: '意见反馈' },
		];
		const codeAfter = (
			<span style={{ cursor: 'pointer' }} onClick={() => { this.state.timer ? this.time() : null }} >{this.state.count}</span>
		);
		const { form } = this.props;
		const { getFieldDecorator } = form;
		const { token } = this.props.login.data.userinfo;
		return (
			<div>
				<div className='head'>设置</div>
				<div className='sidebar-content'>
					<Collapse>
						{settingData.map((item, index) => {
							switch (index) {
								case 0:
									return (<Panel header={item.title} key={index}>
										<Form
											layout='vertical'
										>
											<FormItem

												label='头像'
												hasFeedback
											>
												<Upload {...upload}>
													<Button>
														<Icon type='upload' /> upload
     														</Button>

												</Upload>
											</FormItem>
											<FormItem

												label='昵称'
												hasFeedback
											>
												{getFieldDecorator('name', {
													rules: [
														{

															message: '请输入新昵称',
															type: 'string',

														}, {
															validator(rule, value, callback) {
																if (value.length > 5) {
																	callback(`昵称长度小于5位`)
																} else {
																	callback();
																}
															}
														}
													],
												})(
													<Input placeholder='请输入新昵称' />
													)}

											</FormItem>
											<FormItem

												label='签名'
												hasFeedback
											>
												<TextArea placeholder='请输入新签名' />

											</FormItem>
											<div className='btn-group'>
												<Button type='normal' size='small'>取消</Button>
												<Button type='primary' size='small'>确定</Button>

											</div>
										</Form>
									</Panel>);
								case 1:
									return (<Panel header={item.title} key={index}>
										<Form layout='vertical'>
											<div style={{ padding: '0 0 8px', fontSize: '12px' }}>修改手机号</div>
											<FormItem
												label='原手机号'
												hasFeedback
												style={{ padding: '0 0.5rem' }}
											>{getFieldDecorator('phone', {
												validateTrigger: 'onBlur',
												rules: [
													{

														message: '请输入正确的手机号',
														type: 'string',
														pattern: /^1[34578]\d{9}$/,
													}]
											})(
												<Input placeholder='请输入原手机号' />
												)}
											</FormItem>
											<FormItem
												label='新手机号'
												hasFeedback
												style={{ padding: '0 0.5rem' }}
											>{getFieldDecorator('newPhone', {
												validateTrigger: 'onBlur',
												rules: [
													{

														message: '请输入正确的手机号',
														type: 'string',
														pattern: /^1[34578]\d{9}$/,
													}]
											})(
												<Input placeholder='请输入新手机号' />
												)}
											</FormItem>
											<FormItem
												label='验证码'
												hasFeedback
												style={{ padding: '0 0.5rem' }}
											>
												{getFieldDecorator('code', {
													rules: [
														{
															message: '请输入正确的验证码',
															type: 'string',

														}]
												})(
													<Input placeholder='请输入验证码' addonAfter={codeAfter} />
													)}
											</FormItem>
											<div className='btn-group'>
												<Button type='normal' size='small'>取消</Button>
												<Button type='primary' size='small' >确定</Button>
											</div>
										</Form>
										<Form layout='vertical'>
											<div style={{ padding: '0 0 8px', fontSize: '12px' }}>修改微信号</div>
											<FormItem
												label='原微信号'
												hasFeedback
												style={{ padding: '0 0.5rem' }}
											>{getFieldDecorator('weichat', {
												rules: [
													{
														message: '请输入正确的验证码',
														type: 'string',

													}]
											})(
												<Input placeholder='请输入原微信号' />
												)}
											</FormItem>
											<FormItem
												label='新微信号'
												hasFeedback
												style={{ padding: '0 0.5rem' }}
											>{getFieldDecorator('newWeichat', {
												rules: [
													{
														message: '请输入正确的验证码',
														type: 'string',

													}]
											})(
												<Input placeholder='请输入新微信号' />
												)}
											</FormItem>
											<div className='btn-group'>
												<Button type='normal' size='small'>取消</Button>
												<Button type='primary' size='small' >确定</Button>
											</div>
										</Form>
										<Form layout='vertical'>
											<div style={{ padding: '0 0 8px', fontSize: '12px' }}>修改密码</div>
											<FormItem
												label='原密码'
												hasFeedback
												style={{ padding: '0 0.5rem' }}
											>{getFieldDecorator('password', {
												rules: [
													{
														message: '',
														type: 'string',

													}]
											})(
												<Input placeholder='请输入原密码' />
												)}
											</FormItem>
											<FormItem
												label='新密码'
												hasFeedback
												style={{ padding: '0 0.5rem' }}
											>{getFieldDecorator('newPassword', {
												validateTrigger: 'onBlur',
												rules: [
													{
														message: '密码至少需要12位',
														type: 'string',
														min: 12,
													}]
											})(
												<Input onChange={(event) => { this.setState({ password: event.target.value }) }} placeholder='请输入新密码' />
												)}
											</FormItem>
											<FormItem
												label='确认密码'
												hasFeedback
												style={{ padding: '0 0.5rem' }}
											>{getFieldDecorator('confirmPassword', {
												validateTrigger: 'onBlur',
												rules: [
													{
														message: '',
														type: 'string',

													}, {
														validator(rule, value, callback) {
															if (value === that.state.password) {
																callback()
															} else {
																callback(`两次输入密码不相同`);
															}
														}
													}
												]
											})(
												<Input placeholder='请再次输入新密码' />
												)}
											</FormItem>
											<div className='btn-group'>
												<Button type='normal' size='small'>取消</Button>
												<Button type='primary' size='small' >确定</Button>
											</div>
										</Form>
									</Panel>);
								case 2:
									return <Panel header={item.title} key={index}>
										{this.state.subscribeList.map((item, index) => {
											let indexout = index;
											return (
												<div key={index}>
													<div className='tag-head'>
														<span>{item.head}</span>
														<span onClick={() => { this.changeEdit(indexout) }} style={{ cursor: 'pointer' }}>
															{item.edit ? '编辑' : '完成'}
														</span>
													</div>
													<div style={{ display: item.edit ? 'flex' : 'none' }} className='tag-content'>
														{item.data.map((item, index) => {

															return this.renderLibrary(item, indexout, index)
														})}
													</div>
													<div style={{ display: item.edit ? 'none' : 'flex' }} className='tag-content'>
														{item.data.map((item, index) => {

															return this.renderAlllibrary(item, indexout, index)
														})}
													</div>
												</div>
											)
										})}
									</Panel>;
								case 3:
									return <Panel header={item.title} key={index}>

									</Panel>;
								case 4:

									return <Panel header={item.title} key={index}>
										<Form layout='vertical'>
											<FormItem
												label='意见描述'
												hasFeedback
											>
												<TextArea placeholder='请输入您的意见或建议' onBlur={(event) => {
													this.setState({
														content: event.target.value,
													})

												}} />

											</FormItem>
											{<div className='btn-group'>
												<Button type='normal' size='small'>取消</Button>
												<Button type='primary' size='small' onClick={() => {
													this.props.getFeedback({
														token: token,
														content: this.state.content,
													});
												}}>确定</Button>

											</div>}
										</Form>
									</Panel>;
							}
						})}

					</Collapse>
				</div>
			</div>
		);
	};

	renderContent() {
		let index = this.props.index;

		switch (index) {
			case 1:
				return this.renderMember();
			case 2:
				return this.renderCollection();
			case 3:
				return this.renderTransaction();
			case 4:
				return this.renderOrder();
			case 5:
				return this.renderSocial();
			case 6:
				return this.renderSetting();
			//提醒页面抽屉
			case 10:
				let listData = [
					{ name: '昵称', time: '8-7' },
					{ name: '昵称', time: '8-7' },
					{ name: '昵称', time: '8-7' },
				]
				return (
					<div>
						<div className='head'>私信消息</div>
						<div className='sidebar-content'>
							{listData.map((item, index) => {
								return (
									<div key={index} className='letter-content'>
										<div className='usr-info'>
											<Avatar icon='user' style={{ marginRight: '0.5rem' }} />
											{item.name}
										</div>
										{item.time}
									</div>
								)
							})}
						</div>
					</div>
				);
			case 11:
				let followData =
					[{
						headerLeft: '实物抵押抵税问题稽查案例',
						content: '大家一致认为，习近平总书记发表的重要讲话，科学分析了当前国际国内形势，深刻阐述了党的十八大以来党和国家事业发生的历史性变革，深刻阐述了新的历史条件下坚持和发展中国特色社会主义的一系列重大理论和实践问题，提出了一系列新的重要思想、重要观点、重大判断、重大举措，具有很强的思想性、战略性、前瞻性、指导性，具有重大而深远的政治意义、理论意义、实践意义，为党和国家各项事业发展提供了理论指导、思想指引和行动指南。',
						footerLeft: '税收筹划堆',
						footerRight: '2017-08-08',
						num: 2,
						icon: 'icon-iconmultiplyresource',
					},
					{
						headerLeft: '实物抵押抵税问题稽查案例',
						content: '大家一致认为，习近平总书记发表的重要讲话，科学分析了当前国际国内形势，深刻阐述了党的十八大以来党和国家事业发生的历史性变革，深刻阐述了新的历史条件下坚持和发展中国特色社会主义的一系列重大理论和实践问题，提出了一系列新的重要思想、重要观点、重大判断、重大举措，具有很强的思想性、战略性、前瞻性、指导性，具有重大而深远的政治意义、理论意义、实践意义，为党和国家各项事业发展提供了理论指导、思想指引和行动指南。',
						footerLeft: '税收筹划堆',
						footerRight: '2017-08-08',
						num: 2,
						icon: 'icon-iconmultiplyresource',
					},
					];
				return (
					<div>
						<div className='head'>订阅提醒</div>
						<div className='sidebar-content'>
							{followData.map((item, index) => {
								return <ListItem {...item} key={index} type='one' />
							})}
						</div>
					</div>
				);
			case 12:
				let messageData =
					[{
						headerLeft: '标题',
						content: '内容',
						footerRight: '2017-08-08',
						num: 2,
						time: '2017-07-08 08:00',
					},
					{
						headerLeft: '标题',
						content: '内容',
						footerRight: '2017-08-08',
						num: 2,
						time: '2017-07-08 08:00',
					},
					];
				return (
					<div>
						<div className='head'>系统消息</div>
						<div className='sidebar-content'>
							{messageData.map((item, index) => {
								return (
									<div key={index}>
										<div style={{ textAlign: 'center', padding: '0.2rem 0' }}>{item.time}</div>
										<ListItem {...item} type='one' />
									</div>
								)

							})}
						</div>
					</div>
				);
			case 13:
				return (
					<div>
						<div className='head'>交易记录</div>
						<div className='sidebar-content'>
							{transactionList.map((item, index) => {
								return <ListItem {...item} key={index} type='two' />
							})}
						</div>
					</div>
				);
			case 14:
				let likeData =
					[{
						content: '张三关注了你',
						footerLeft: '税收筹划堆',
						footerRight: '2017-08-08',
						num: 1,
						time: '2017-07-08 08:00',
						icon: 'icon-iconmultiplyresource',
					},
					{
						content: '李四关注了你',
						footerLeft: '税收筹划堆',
						footerRight: '2017-08-08',
						num: 1,
						time: '2017-07-08 08:00',
						icon: 'icon-iconmultiplyresource',
					},
					];
				return (
					<div>
						<div className='head'>系统消息</div>
						<div className='sidebar-content'>
							{likeData.map((item, index) => {
								return (
									<div key={index}>
										<div style={{ textAlign: 'center', padding: '0.2rem 0' }}>{item.time}</div>
										<ListItem {...item} type='one' />
									</div>
								)

							})}
						</div>
					</div>
				);
			case 15:
				const payload = [
					{
						headerLeft: '实物抵押抵税问题稽查案例',
						headerRight: '税收筹划堆',
						content: '大家一致认为，习近平总书记发表的重要讲话，科学分析了当前国际国内形势，深刻阐述了党的十八大以来党和国家事业发生的历史性变革，深刻阐述了新的历史条件下坚持和发展中国特色社会主义的一系列重大理论和实践问题，提出了一系列新的重要思想、重要观点、重大判断、重大举措，具有很强的思想性、战略性、前瞻性、指导性，具有重大而深远的政治意义、理论意义、实践意义，为党和国家各项事业发展提供了理论指导、思想指引和行动指南。',
						footerLeft: '88 元',
						footerMiddle: 'PDF',
						footerRight: '2017-08-08',
						num: 3,
						time: '2017-07-08 08:00',
					},
					{
						headerLeft: '实物抵押抵税问题稽查案例',
						headerRight: '税收筹划堆',
						content: '大家一致认为，习近平总书记发表的重要讲话，科学分析了当前国际国内形势，深刻阐述了党的十八大以来党和国家事业发生的历史性变革，深刻阐述了新的历史条件下坚持和发展中国特色社会主义的一系列重大理论和实践问题，提出了一系列新的重要思想、重要观点、重大判断、重大举措，具有很强的思想性、战略性、前瞻性、指导性，具有重大而深远的政治意义、理论意义、实践意义，为党和国家各项事业发展提供了理论指导、思想指引和行动指南。',
						footerLeft: '88 元',
						footerMiddle: 'PDF',
						footerRight: '2017-08-08',
						num: 3,
						time: '2017-07-08 08:00',
					}
				]
				return (
					<div>
						<div className='head'>堆的提醒</div>
						<div className='sidebar-content'>
							{payload.map((item, index) => {
								return (
									<div key={index}>
										<div style={{ textAlign: 'center', padding: '0.2rem 0' }}>{item.time}</div>
										<ListItem {...item} type='one' />
									</div>
								)
							})}


						</div>
					</div>
				);
			case 16:
				let replyData =
					[{
						reply: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
						content: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
						footerLeft: '税收筹划堆',
						num: 4,
						name: '张三',
						time: '20分钟前',
						icon: 'icon-iconmultiplyresource',
					},
					{
						reply: '测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
						content: '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
						footerLeft: '税收筹划堆',
						num: 4,
						name: '张三',
						time: '20分钟前',
						icon: 'icon-iconmultiplyresource',
					},
					];
				return (
					<div>
						<div className='head'>回复消息</div>
						<div className='sidebar-content'>
							{replyData.map((item, index) => {
								return (
									<div key={index}>
										<ListItem {...item} type='three' />
									</div>
								)

							})}
						</div>
					</div>
				);
			default:
				return null;

		};
	};

	changeSelect(indexout, index) {

		this.state.subscribeList[indexout].data[index].select = !this.state.subscribeList[indexout].data[index].select;
		this.setState({
			subscribeList: this.state.subscribeList,
		})
	}

	changeEdit(indexout) {
		this.state.subscribeList[indexout].edit = !this.state.subscribeList[indexout].edit;
		this.setState({
			subscribeList: this.state.subscribeList,
		})
	}

	renderLibrary(item, indexout, index) {
		let list = [];
		if (item.select) {
			return (
				<div key={item.text}>
					<Tag className='library-tag'>{item.text}</Tag>
				</div>
			)
		}

	};
	renderAlllibrary(item, indexout, index) {
		let list = [];
		return (
			<div key={item.text}>
				<Tag className={item.select ? 'library-tag' : 'library-untag'} onClick={() => { this.changeSelect(indexout, index) }}>{item.text}</Tag>
			</div>
		)
	};

	render() {
		return (
			<div>
				{this.renderContent()}
			</div>
		)
	}
}

SidebarContent = Form.create()(SidebarContent);
export default SidebarContent;

