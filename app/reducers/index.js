import { combineReducers } from 'redux';

import currencies from './currencies';
import themes from './themes';

const rootReducer = combineReducers({
  currencies,
  themes,
});

export default rootReducer;
