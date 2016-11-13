import axios from 'axios';
import {API_GET_USERS, API_POST_USERS, API_GET_USER_FILE, API_PUT_REVOKE_USER, API_POST_AUTHENTICATE} from './actions_types';

import config from '../config';
import cookie from 'react-cookie';

export function apiStatus() {
  console.log(config.API_URL);
  console.log(cookie.load('token'));
  return ( (dispatch) => {
    axios.get(`${config.API_URL}/users`, {
      headers: { 'x-access-token': cookie.load('token') }
      })
      .then(response => {
        console.log("response");
        dispatch({
        type: API_GET_USERS,
        payload: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  })
}

export function apiCreateUser(data) {
  console.log("apiCreateUser");
  console.log(data);
  return ( (dispatch) => {
    axios.post(`${config.API_URL}/users`, data, {
      headers: { 'x-access-token': cookie.load('token') }
      })
      .then(response => {
        dispatch({
        type: API_POST_USERS,
        payload: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  })
}

export function apiRevokeUser(data) {
  console.log("apiRevokeUser");
  console.log(data);
  return ( (dispatch) => {
    axios.put(`${config.API_URL}/users/${data}`, {
      headers: { 'x-access-token': cookie.load('token') }
      })
      .then(response => {
        dispatch({
        type: API_PUT_REVOKE_USER,
        payload: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  })
}

export function apiAuthenticate(data) {
  console.log("apiAuthenticate");
  console.log(data);
  return ( (dispatch) => {
    axios.post(`${config.API_URL}/authenticate`, data)
      .then(response => {
        console.log("response");
        dispatch({
        type: API_POST_AUTHENTICATE,
        payload: response.data
        })
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      })
  })
}

export function disconnect() {
  cookie.remove('token');
  return {
    type: DISCONNECT
  }
}
