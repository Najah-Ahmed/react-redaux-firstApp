import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReduces';
export default combineReducers({
  log: logReducer,
  tech: techReducer,
});
