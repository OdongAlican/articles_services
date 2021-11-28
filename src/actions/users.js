/* eslint-disable import/prefer-default-export */

import {
  PENDING_REQUEST, METHODS, FETCH_ALL_USERS, CREATED_USER,
  FAILED_REQUEST, DELETED_USER, UPDATED_USER,
} from './actionTypes/user';
import { GetRequest, PostRequest, DeleteRequest } from './utils/requests';
import SERVER_REQUEST from './routes/index';

export const fetchAllUsers = () => async dispatch => {
  dispatch({ type: PENDING_REQUEST });
  const response = await GetRequest(METHODS.get, SERVER_REQUEST.FETCH_ALL_USERS_ROUTE);
  if (response?.data) {
    dispatch({ type: FETCH_ALL_USERS, payload: response?.data });
  } else { dispatch({ type: FAILED_REQUEST, payload: response?.message }); }
};

export const fetchOneUser = id => async dispatch => {
  dispatch({ type: PENDING_REQUEST });
  const response = await GetRequest(METHODS.get, `${SERVER_REQUEST.FETCH_ALL_USERS_ROUTE}/${id}`);
  if (response?.data) {
    dispatch(response?.data);
  } else { dispatch({ type: FAILED_REQUEST, payload: response?.message }); }
};

export const createUser = data => async dispatch => {
  dispatch({ type: PENDING_REQUEST });
  const response = await PostRequest(METHODS.post, `${SERVER_REQUEST.FETCH_ALL_USERS_ROUTE}`, data);
  if (response?.data) {
    dispatch({ type: CREATED_USER, payload: response?.data });
  } else { dispatch({ type: FAILED_REQUEST, payload: response?.message }); }
};

export const deleteUser = id => async dispatch => {
  dispatch({ type: PENDING_REQUEST });
  const response = await DeleteRequest(METHODS.delete, `${SERVER_REQUEST.FETCH_ALL_USERS_ROUTE}/${id}`);
  if (response?.statusText === 'No Content' && response.status === 204) {
    dispatch({ type: DELETED_USER, payload: id });
  } else { dispatch({ type: FAILED_REQUEST, payload: response?.message }); }
};

export const updateUser = (data, id) => async dispatch => {
  dispatch({ type: PENDING_REQUEST });
  const response = await PostRequest(METHODS.update, `${SERVER_REQUEST.FETCH_ALL_USERS_ROUTE}/${id}`, data);
  if (response?.data) {
    dispatch({ type: UPDATED_USER, payload: response?.data });
  } else { dispatch({ type: FAILED_REQUEST, payload: response?.message }); }
};
