import { combineReducers } from 'redux';

import count from './count';
import { name } from './name'

const reducers = combineReducers({
  count,
  name
});

export default reducers;
