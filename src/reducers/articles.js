/* eslint-disable default-param-last */

import {
  FETCH_ALL_ARTICLES, CREATED_ARTICLE, FETCH_ONE_ARTICLE,
  FETCH_ONE_COMMENT, DELETED_ARTICLE,
} from '../actions/actionTypes/articles';

const initialState = {
  articles: [],
  error: '',
  loading: false,
  article: {},
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
    case FETCH_ONE_ARTICLE:
      return {
        ...state,
        loading: false,
        article: action.payload,
      };
    case FETCH_ONE_COMMENT:
      return {
        ...state,
        loading: false,
        article: { ...state.article, comments: [...state.article.comments, action.payload] },
      };
    case DELETED_ARTICLE:
      return {
        ...state,
        loading: false,
        error: '',
        articles: [...state.articles.filter(article => article.id !== action.payload)],
      };
    default:
      return state;
  }
};

export default articlesReducer;
