import { combineReducers } from 'redux';
import { total, article, favorite, feedback, login, updateUserGroup } from './mainReducer';

const rootReducer = combineReducers({
	total: total,
	article: article,
	favorite: favorite,
	feedback: feedback,
	login: login,
	updateUserGroup:updateUserGroup
});

export default rootReducer;
