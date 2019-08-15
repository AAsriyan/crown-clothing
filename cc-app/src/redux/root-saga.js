import { all, call } from 'redux-saga/effects';

import { shopSagas } from './shop/shop.sagas.js';
import { userSagas } from './user/user.sagas.js';
import { cartSagas } from './cart/cart.sagas.js';

export default function* rootSaga() {
	yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
