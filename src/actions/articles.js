/* eslint-disable import/prefer-default-export */

import {
  PENDING_REQUEST, METHODS, FETCH_ALL_ARTICLES,
  FAILED_REQUEST, CREATED_ARTICLE, FETCH_ONE_ARTICLE,
  FETCH_ONE_COMMENT,
} from './actionTypes/articles';
import { GetRequest, PostRequest } from './utils/requests';
import SERVER_REQUEST from './routes/index';

export const fetchAllArticles = () => async dispatch => {
  dispatch({ type: PENDING_REQUEST });
  const response = await GetRequest(METHODS.get, SERVER_REQUEST.FETCH_ALL_ARTICLES_ROUTE);
  if (response?.data) {
    dispatch({ type: FETCH_ALL_ARTICLES, payload: response?.data });
  } else { dispatch({ type: FAILED_REQUEST, payload: response?.message }); }
};

export const createArticle = data => async dispatch => {
  const result = { ...data, user_id: 3 };
  dispatch({ type: PENDING_REQUEST });
  const response = await PostRequest(
    METHODS.post,
    `${SERVER_REQUEST.FETCH_ALL_ARTICLES_ROUTE}`,
    result,
  );
  if (response?.data) {
    dispatch({ type: CREATED_ARTICLE, payload: response?.data });
  } else { dispatch({ type: FAILED_REQUEST, payload: response?.message }); }
};

export const fetchOneArticle = id => async dispatch => {
  dispatch({ type: PENDING_REQUEST });
  const response = await GetRequest(METHODS.get, `${SERVER_REQUEST.FETCH_ALL_ARTICLES_ROUTE}/${id}`);
  if (response?.data) {
    dispatch({ type: FETCH_ONE_ARTICLE, payload: response?.data });
  } else { dispatch({ type: FAILED_REQUEST, payload: response?.message }); }
};

export const createComment = data => async dispatch => {
  console.log(data, 'inside');
  dispatch({ type: PENDING_REQUEST });
  const response = await PostRequest(METHODS.post, `${SERVER_REQUEST.FETCH_ALL_COMMENTS_ROUTE}`, data);
  if (response?.data) {
    console.log(response?.data, 'response');
    dispatch({ type: FETCH_ONE_COMMENT, payload: response?.data });
  } else { dispatch({ type: FAILED_REQUEST, payload: response?.message }); }
};
