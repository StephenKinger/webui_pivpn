import axios from 'axios';
import {API_GET_USERS, API_POST_USERS, API_GET_USER_FILE, API_PUT_REVOKE_USER,
  API_POST_AUTHENTICATE, DISCONNECT} from './actions_types';

import config from '../config';
import cookie from 'react-cookie';

export function apiGetUsers() {
  return ( (dispatch) => {
    axios.get(`${config.API_URL}/users`, {
      headers: { 'x-access-token': cookie.load('token') }
      })
      .then(response => {
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
  console.log('try to revoke'+data)
  return ( (dispatch) => {
    axios.put(`${config.API_URL}/users/${data}`, {command: 'revoke'}, {
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
  return ( (dispatch) => {
    axios.post(`${config.API_URL}/authenticate`, data)
      .then(response => {
        dispatch({
        type: API_POST_AUTHENTICATE,
        payload: response.data
        })
      })
      .catch((error) => {
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
