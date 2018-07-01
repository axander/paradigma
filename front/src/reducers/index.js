import { combineReducers } from 'redux';
import { showPhones } from './phones'

const rootReducer = combineReducers({
  phone: showPhones
});

export default rootReducer;
