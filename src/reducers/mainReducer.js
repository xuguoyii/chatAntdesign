const initialState = { data: {}, error: '', loading: true };
import { put } from 'redux-saga/effects'

// 全局通用参数
export function total(state = {}, action) {
	switch (action.type) {
		case 'UPDATE_TOTAL':
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export function updateUserGroup(state = {}, action) {
	switch (action.type) {
		case 'UPDATEUSERGROUP':
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export function article(state = initialState, action) {
	switch (action.type) {
		case 'GET_ARTICLE_SUCCESS':
			return { ...state, data: action.payload, loading: false };
		case 'GET_ARTICLE_FAILURE':
			return { ...state, error: action.payload, loading: false };
		default:
			return state;
	}
};

export function favorite(state = initialState, action) {
	console.log(action.payload)
	switch (action.type) {
		case 'GET_MYFAVORITE_SUCCESS':
			return { ...state, data: action.payload, loading: false };
		case 'GET_MYFAVORITE_FAILURE':
			return { ...state, error: action.payload.data.result, loading: false };
		default:
			return state;
	}
};


export function feedback(state = initialState, action) {
	switch (action.type) {
		case 'GET_FEEDBACK_SUCCESS':
			return { ...state, data: action.payload.data.result, loading: false };
		case 'LOGIN_COMPLETE':
			return { ...state, data: action.payload.data.result, loading: false };
		case 'GET_FEEDBACK_FAILURE':
			return { ...state, error: action.payload.data.result, loading: false };
		default:
			return state;
	}
};

export function login(state = initialState, action) {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			return { ...state, data: action.payload.data.result, loading: false };
		case 'LOGIN_FAILURE':
			return { ...state, error: action.payload, loading: false };
		default:
			return state;
	}
}
