import axios from 'axios';
import Apis from './Apis';
import Config from './Config';

export default class Service {

	/**
	 * 获取文章内容
	 *
	 * @static
	 * @param {any} payload
	 * @returns
	 * @memberof Service
	 */
	static getArticle(payload) {
		return axios.get(Apis.getArticle, {
			params: {
				cid: payload.cid,
				id: payload.id
			}
		});
	}

	/**
	 * 获取我的收藏列表
	 *
	 * @static
	 * @param {any} payload
	 * @returns
	 * @memberof Service
	 */
	static getMyFavorite(payload) {
		console.log(payload);
		return axios({
			url: 'http://route.showapi.com/341-2?showapi_appid=50376&showapi_sign=96bfeae417114d38bea92c8bf2b0ecd5',
			method: 'post',
			dataType: 'jsonp',
			data: {

				page:payload.page,
				maxResult:'20',
			}
		})
	}

	/**
	 * 发送反馈
	 *
	 * @static
	 * @param {any} payload
	 * @returns
	 * @memberof Service
	 */
	static getFeedback(payload) {
		return axios({
			url: Apis.getFeedback,
			method: 'post',
			headers: {
				'X-Parse-Application-Id': Config.parse.appid,
				'X-Parse-REST-API-Key': Config.parse.apikey,
				'Content-Type': 'application/json'
			},
			data: {
				token: payload.token,
				content: payload.content,
			}
		})
	};


	/**
	 * 登录
	 *
	 * @static
	 * @param {any} payload
	 * @returns
	 * @memberof Service
	 */
	static login(payload) {
		return axios({
			url: Apis.login,
			method: 'post',
			headers: {
				'X-Parse-Application-Id': Config.parse.appid,
				'X-Parse-REST-API-Key': Config.parse.apikey,
				'Content-Type': 'application/json'
			},
			data: {
				mobile: payload.mobile,
				password: payload.password,
			}
		})
	};

}
