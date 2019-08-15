import { takeEvery, call, put, all } from 'redux-saga/effects';

import ShopActionTypes from './shop.types.js';

import {
	fetchCollectionsSuccess,
	fetchCollectionsFailure
} from './shop.actions.js';

import {
	firestore,
	convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils.jsx';

export function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection('collections');
		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(
			convertCollectionsSnapshotToMap,
			snapshot
		);

		yield put(fetchCollectionsSuccess(collectionsMap));
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message));
	}
}

export function* fetchCollectionsStart() {
	yield takeEvery(
		ShopActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsAsync
	);
}

export function* shopSagas() {
	yield all([call(fetchCollectionsStart)]);
}
