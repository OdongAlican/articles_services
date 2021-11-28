import { combineReducers } from 'redux';
import usersReducer from './users';
import articlesReducer from './articles';

const rootReducer = combineReducers({
  usersReducer,
  articlesReducer,
});

export default rootReducer;
