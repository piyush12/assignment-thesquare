import { combineReducers } from 'redux';

import apartementReducer from './apartmentReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  errors: errorReducer,
  apartements: apartementReducer,
});
