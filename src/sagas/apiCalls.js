import Service from '../apis/Service';
import Utils from '../utils';

export const getArticleCall = (payload) => {
	return Service.getArticle(payload).then(res => res);
};

export const getMyFavoriteCall = (payload) => {
	return Service.getMyFavorite(payload).then(res => res);
};



export const getFeedbackCall = (payload) => {
	return Service.getFeedback(payload).then(res => res);
};

export const loginCall = (payload) => {
	return Service.login(payload).then((res) => res);
};
