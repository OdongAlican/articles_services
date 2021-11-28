/* eslint-disable default-param-last */

import { FETCH_ALL_USERS, CREATED_USER, DELETED_USER } from '../actions/actionTypes/user';

const initialState = {
  users: [],
  error: '',
  loading: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return {
        ...state,
        loading: true,
        users: action.payload,
      };
    case CREATED_USER:
      return {
        ...state,
        loading: false,
        error: '',
        users: [...state.users, action.payload],
      };
    case DELETED_USER:
      return {
        ...state,
        loading: false,
        error: '',
        users: [...state.users.filter(user => user.id !== action.payload)],
      };
    default:
      return state;
  }
};

export default usersReducer;
