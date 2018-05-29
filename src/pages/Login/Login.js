import React from 'react';
import ListItem from '../../components/ListItem';
import { Form, Icon, Input, Button, message,Checkbox } from 'antd';
import Logo from '../../assets/image/Home/logo.png';
import Utils from '../../utils';
import Service from '../../apis/Service';
import { loginCall } from '../../sagas/apiCalls';
import { put } from 'redux-saga/effects';

const FormItem = Form.Item;

const socket = require('socket.io-client')('127.0.0.1:3000');


class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			head: '聊天室'
		}

	}

	componentDidMount() {
		socket.on('loginSuccess',(data)=>{
			this.props.updateUserGroup(data);
			this.beginChat(data);
		});
		socket.on('usernameErr',(data)=>{
			message.error(data.err)
		});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.user.data.errcode === 0) {
			Utils.redirect(this, '', {});
		}
	}


	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
    
			if (!err) {
				socket.emit('login',{username: values.mobile});
				
			}
		});
	};
	beginChat = (data) => {
		console.log(data)
		Utils.redirect(this, '', {});
	}
	

	renderHead() {
		return (
			<div className='headlittle'>
				{this.state.head}
				<span className='register'>注册</span>
			</div>
		)
	}

	renderLogo() {
		return (
			<div className='logo'>
				<img src={Logo} />
			</div>
		)
	}
	renderForm() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			labelCol: {
			  xs: { span: 24 },
			  sm: { span: 4 },
			},
			wrapperCol: {
			  xs: { span: 24 },
			  sm: { span: 15 },
			},
		  };
		return (
			<Form onSubmit={this.handleSubmit} className='login-form'>
				<FormItem
					{...formItemLayout}
					label="用户名"
				>
					{getFieldDecorator('mobile', {
						rules: [{ required: true, message: '请输入手机号' }],
					})(
						<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)',fontSize: 13 }} />} placeholder='请输入用户名' />
						)}
				</FormItem>
				<FormItem
					{...formItemLayout}
					label="密码"
				>
					{getFieldDecorator('password', {
						rules: [{ required: true, message: '请输入密码' }],
					})(
						<Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)',fontSize: 13 }} />} type='password' placeholder='请输入密码' />
						)}
					<a className='login-form-code' href=''>验证码登录</a>
				</FormItem>
				<FormItem
					{...formItemLayout}
					label=" "
					colon={false}
				>
					{getFieldDecorator('remember', {
						valuePropName: 'checked',
						initialValue: true,
					})(
						<Checkbox>记住我</Checkbox>
					)}
					<a className="login-form-forgot" href="">忘记密码？</a>
					<Button type="primary" htmlType="submit" className="login-form-button">
						登陆
					</Button>
					Or <a href="">立即注册</a>
				</FormItem>
				<FormItem
					{...formItemLayout}
					label=" "
					colon={false}
				>
					<div className='login-other'>
						<i className='iconfont icon-weixin1'></i>
						<span>微信登录</span>
					</div>
				</FormItem>
			</Form>
		)
	};

	render() {
		return (
			<div className='content'>
				<div className='center'>
					<div className='main'>
						<div className='form-content'>
							{this.renderForm()}
						</div>

					</div>
				</div>
			</div>
		);
	}
}
Login = Form.create()(Login);
export default Login;
