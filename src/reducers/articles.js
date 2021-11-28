/* eslint-disable default-param-last */

import {
  FETCH_ALL_ARTICLES, CREATED_ARTICLE,
} from '../actions/actionTypes/articles';

const initialState = {
  articles: [],
  error: '',
  loading: false,
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_ARTICLES:
      return {
        ...state,
        loading: true,
        articles: action.payload,
      };
    case CREATED_ARTICLE:
      return {
        ...state,
        loading: false,
        error: '',
        articles: [...state.articles, action.payload],
      };
    default:
      return state;
  }
};

export default articlesReducer;
