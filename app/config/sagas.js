import { takeEvery, select, call, put } from 'redux-saga/effects';
import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION,
  CONVERSION_ERROR,
  CONVERSION_RESULT,
} from '../actions/currencies';

const getLatestRate = currency => fetch(`http://api.fixer.io/latest?base=${currency}`);

function* getLatestConvertionRates(action) {
  // you can access the action passed down from the rootSaga
  try {
    let { currency } = action;
    if (currency === undefined) {
      currency = yield select(state => state.currencies.baseCurrency);
    }
    const response = yield call(getLatestRate, currency);
    const result = yield response.json();

    if (result.erro) {
      yield put({ type: CONVERSION_ERROR, error: result.error });
    } else {
      yield put({ type: CONVERSION_RESULT, result });
    }
  } catch (error) {
    yield put({ type: CONVERSION_ERROR, error: e.message });
  }
}

export default function* rootSaga() {
  // rootSaga passes the action from takeevery to the parameter
  // of the second argument when called
  yield takeEvery(GET_INITIAL_CONVERSION, getLatestConvertionRates);
  yield takeEvery(SWAP_CURRENCY, getLatestConvertionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, getLatestConvertionRates);
}
