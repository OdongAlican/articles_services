/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */

import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const GetRequest = async (method, path) => {
  const response = await axios[method](`${baseUrl}/${path}`)
    .then(list => list)
    .catch(error => { if (error.response) return error.response; });
  return response;
};

export const PostRequest = async (method, path, data) => {
  const response = await axios[method](`${baseUrl}/${path}`, data)
    .then(data => data)
    .catch(error => { if (error.response) return error.response; });
  return response;
};

export const DeleteRequest = async (method, path) => {
  const response = await axios[method](`${baseUrl}/${path}`)
    .then(data => data)
    .catch(error => { if (error.response) return error.response; });
  return response;
};
