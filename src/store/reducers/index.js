import { NomeReducer } from './clickReducer';
import { combineReducers } from 'redux';

const Reducers = combineReducers({
  NomeLogin: NomeReducer,
})

export default Reducers