import Config from './Config';

const Apis = {
	// 文章详情
	getArticle: `${Config.pimcore.url}/webservice/common/content`,
	// 我的收藏列表
	getMyFavorite: `${Config.parse.url}/v1/functions/getmyfavorite`,
	//发送反馈
	getFeedback: `${Config.parse.url}/v1/functions/addfeedback`,
	//登录
	login: `${Config.parse.url}/v1/functions/login`,
}

export default Apis;
