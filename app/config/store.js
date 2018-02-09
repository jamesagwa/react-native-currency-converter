import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
// you can pass in as many middleware as possible as an array
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  // logger middleware should always be the last middleware you push to the stack
  // logger is for loging your redux state to the console while you work
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);

export default store;
