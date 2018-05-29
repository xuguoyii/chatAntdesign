import React from 'react';
import { Input, Avatar, Button, Icon} from 'antd';
const { Search } = Input;
import ListItem from '../../components/ListItem';
import userImg from '../../assets/image/main/userImg.png';

import Utils from '../../utils';

const socket = require('socket.io-client')('127.0.0.1:3000');

export default class Main extends React.Component {

	constructor(props) {
		super(props);
		this.state={
			chatBoxTitle: '聊天群组',
			chatItemTitle: '',
			showItem: '聊天群组',
			chatArr: [
				{type: 'left'},
				{type: 'right'}
			],
			userGroup: [],
			user: {},
			chatInput: '',
			chatWithName: '',
			messageArr: [],
			chatBoxArr: [
				{
					name:'聊天群组',
					messageArr: []
				}
			],
			visible: false
		}
	}
	componentWillMount() {
		if(!this.props.userGroup||!this.props.user){
			Utils.redirect(this, 'login', {});
		}
	}


	componentDidMount() {
		console.log(this.props);
		this.setState({
			user: this.props.user,
			userGroup: this.props.userGroup
		})
		socket.on('receiveMessage',(data)=> {
			console.log("可以显示信息",data);
			let message = data.message;
			this.showMessage(message,data.username,data.imgUrl,false);
		});
		socket.on('SendToOneSuccess',(data)=>{
			console.warn('send',data)
			this.setState({
				visible: true,
			  });
			this.showMessage(data.message,data.username,data.imgUrl,true,data.to);
		});
		socket.on("receiveSendToOne",(data)=>{
			console.warn('receive',data)
			this.showMessage(data.message,data.username,data.imgUrl,true,data.to);
		})
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
		if (nextProps.userGroup){
			this.setState({
				userGroup: nextProps.userGroup
			})
		}
	}


	getInputValue = (e) => {
		console.log(e.target.value)
		this.setState({
			chatInput: e.target.value
		})
	}

	sendMessage = () => {
        const message = this.state.chatInput;
		const userName = this.state.user.username;
        if(message&&this.state.chatWithName ==='') {
            socket.emit('sendMessage',{message: message, username: userName});
            console.log(message);
        } else {
			console.log(2312)
			socket.emit('sendToOne',{message: message, username: userName, to: this.state.chatWithName});
		}
	};
	
	showMessage = (message,username,imgUrl,chatWithOthers,toName) => {
		const _username = this.state.user.username;
		this.setState({
			chatInput: ''
		})
		console.log('显示')
		if(chatWithOthers){
			if(username === _username) {
				let newMessage = [];
				let messageItem = {};
				messageItem.message = message;
				messageItem.type = 'sender';
				messageItem.username = username;
				this.state.chatBoxArr.map((item)=>{
					if(item.name===toName){
						item.messageArr.push(messageItem)
					}
					newMessage.push(item)
				})
				console.log(newMessage)
				this.setState({
					messageArr: newMessage
				})
			} else {
				let newMessage = this.state.messageArr;
				let messageItem = {};
				messageItem.message = message;
				messageItem.type = 'receiver';
				messageItem.username = toName;
				this.state.chatBoxArr.map((item)=>{
					if(item.name===toName){
						item.messageArr.push(messageItem)
					}
					newMessage.push(item)
				})
				this.setState({
					messageArr: newMessage
				})
			}
		} else {
			if(username === _username) {
				let newMessage = [];
				let messageItem = {};
				messageItem.message = message;
				messageItem.type = 'sender';
				messageItem.username = username;
				this.state.chatBoxArr.map((item)=>{
					if(item.name===this.state.chatBoxTitle){
						item.messageArr.push(messageItem)
					}
					newMessage.push(item)
				})
				this.setState({
					messageArr: newMessage
				})
			} else {
				let newMessage = this.state.messageArr;
				let messageItem = {};
				messageItem.message = message;
				messageItem.type = 'receiver';
				messageItem.username = username;
				this.state.chatBoxArr.map((item)=>{
					if(item.name===this.state.chatBoxTitle){
						item.messageArr.push(messageItem)
					}
					newMessage.push(item)
				})
				this.setState({
					messageArr: newMessage
				})
			}
		}
		console.log(this.state)
        
	};
	
	chatWithOthors = (e) =>{
		let name = e.currentTarget.getAttribute("data-name");
		let chatBoxArr =this.state.chatBoxArr;
		let newItem = false;
		chatBoxArr.map((item)=>{
			if (item.name === name) {
				newItem =true;
			} 
		})
		if (newItem) {
			if(name === '聊天群组') {
				console.log('群组');
				this.setState({
					chatBoxTitle: name,
					chatWithName: '',
					chatItemTitle: '聊天群组',
					showItem: name
				})
			} else {
				console.log('用户')
				this.setState({
					chatBoxTitle: name,
					chatWithName: name,
					chatItemTitle: name,
					showItem: name
				})
			}
		} else {
			chatBoxArr.push({name:name,messageArr: []});
			console.log('wei用户')
			this.setState({
				chatBoxTitle: name,
				chatBoxArr: chatBoxArr,
				chatWithName: name,
				chatItemTitle: name,
				showItem: name
			})
		}
	}
	/**
	 * 渲染聊天界面
	 *
	 * @returns
	 * @memberof Main
	 */
	renderChatBox = () => {
		return (
			<div className='chat-content'>
				<div className='user-info'>
					<img src={userImg} />
				</div>
				<div className='user-list'>
					<div className='list-head'>
						<div className='head-search'>
							<Search size="large" placeholder='搜索群主／用户'/>
						</div>
						<div className='head-add'>
							<Button size='large' shape="circle" icon="plus" />
						</div>
					</div>
					<div className='list'>
						<div className='list-item' data-name='聊天群组' 
							onClick={this.chatWithOthors}>
							<div className='item-img'>
								<img src={userImg} />
							</div>
							<div className='item-detail'>
								<div className='item-chat'>
									<div className='user-name'>
										聊天群组
									</div>
									<div className='user-chat'>
										你在干什么？
									</div>
								</div>
								<div className='item-time'>
									{Utils.moment(new Date()).format('HH:mm') }
								</div>
							</div>
						</div>
						{this.state.userGroup.length>0?this.state.userGroup.map((item)=>{
							return(
								<div className='list-item' key={item.id} data-name={item.username} 
								onClick={this.chatWithOthors}>
									<div className='item-img'>
										<img src={userImg} />
									</div>
									<div className='item-detail'>
										<div className='item-chat'>
											<div className='user-name'>
												{item.username}
											</div>
											<div className='user-chat'>
												你在干什么？
											</div>
										</div>
										<div className='item-time'>
											{Utils.moment(new Date(item.loginTime)).format('HH:mm') }
										</div>
									</div>
								</div>
							)
						}):''}
					</div>
				</div>
				<div className='chatbox'>
					<div className='chatbox-head'>
						<div>
							<h2>
								{this.state.chatBoxTitle}
							</h2>
						</div>
						<div>
							<Button size='large' type='primary' shape="circle" icon="appstore-o" />
						</div>
					</div>
					{this.state.chatBoxArr.map((item)=>{
						if(this.state.chatBoxTitle===item.name){
							return (
								<div style={{display: this.state.chatBoxTitle===this.state.showItem? 'block' : 'none'}} className='chatbox-contain'>
									{item.messageArr.map((item)=>{
										if (item.type=='sender'){
											return(
												<div className="sender">
													<div className='chat-img fr'>
														<img src={userImg} />
													</div>
													<div className='chat-detail fr'>
														<div className="right_triangle"></div>
														<div className='chater-name-right'>
															{item.username}  12:09
														</div>
														<div className='message right'>
															{item.message}
														</div>
														
													</div>										
												</div>
											)
										} else {
											return (
												<div className="receiver">
													<div className='chat-img fl'>
														<img src={userImg} />
													</div>
													<div className='chat-detail fl'>
														<div className="left_triangle"></div>
														<div className='chater-name-left'>
															{item.username}  12:09
														</div>
														<div className='message left'>
															{item.message}
														</div>
													</div>
												</div>
											)
										}
									})}
								</div>
							)
						}

					})}
					
					<div className='chatbox-bottom'>
						<Icon type="smile-o" />
						<Icon type="appstore" />
						<Input size='large' placeholder='请畅所欲言把～' value={this.state.chatInput} onChange={this.getInputValue}/>
						<Icon type="export" onClick={this.sendMessage}/>
					</div>
				</div>
			</div>
		);
	}

	renderModal = () => {
		return(
			<Modal
				title="Basic Modal"
				visible={this.state.visible}
				onOk={this.handleOk}
				onCancel={this.handleCancel}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		)
	}

	/**
	 * 根据当前焦点确定是否显示或者重新渲染
	 *
	 * @param {any} nextProps
	 * @param {any} nextState
	 * @returns
	 * @memberof Main
	 */
	shouldComponentUpdate(nextProps, nextState) {
		return (this.props.focus === 0) || (nextProps.focus === 0);
	}

	render() {
		const { focus } = this.props;
		return (
			<div className='content-footer' style={{ display: (focus === 0) ? 'block' : 'none' }}>
				<div className='center'>
					{this.renderChatBox()}
				</div>
			</div>
		);
	}
}
