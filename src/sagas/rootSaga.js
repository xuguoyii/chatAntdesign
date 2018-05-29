import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getArticle, getMyFavorite, getFeedback, login } from './mainSaga';

export default function* rootSaga() {
	yield takeLatest('GET_ARTICLE_START', getArticle);
	yield takeLatest('GET_MYFAVORITE_START', getMyFavorite);
	yield takeLatest('LOGIN_COMPLETE', getMyFavorite);
	yield takeLatest('GET_FEEDBACK_START', getFeedback);
	yield takeLatest('LOGIN_START', login);
}
