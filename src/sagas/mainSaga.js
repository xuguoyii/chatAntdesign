import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getArticleCall, getMyFavoriteCall, getFeedbackCall, loginCall } from './apiCalls';
import Utils from '../utils';
export function* getArticle(action) {
	try {
		const payload = yield call(getArticleCall, action.payload);
		yield put({
			type: 'GET_ARTICLE_SUCCESS',
			payload: payload
		});
	}
	catch (error) {
		yield put({
			type: 'GET_ARTICLE_FAILURE',
			payload: error.message
		});
	}
};

export function* getMyFavorite(action) {
	try {
		const payload = yield call(getMyFavoriteCall, action.payload);
		yield put({
			type: 'GET_MYFAVORITE_SUCCESS',
			payload: payload
		});

	}
	catch (error) {
		yield put({
			type: 'GET_MYFAVORITE_FAILURE',
			payload: error.message
		});
	}
};

export function* getFeedback(action) {
	try {
		const payload = yield call(getFeedbackCall, action.payload);
		yield put({
			type: 'GET_FEEDBACK_SUCCESS',
			payload: payload
		});
	}
	catch (error) {
		yield put({
			type: 'GET_FEEDBACK_FAILURE',
			payload: error.message
		});

	}
};

export function* login(action) {
	try {
		const payload = yield call(loginCall, action.payload);
		yield put({
			type: 'LOGIN_SUCCESS',
			payload: payload
		});
		Utils.parseCheck(this, payload);
	}
	catch (error) {
		yield put({
			type: 'LOGIN_FAILURE',
			payload: error.message
		});
		Utils.parseError(this, error)
	}
};
