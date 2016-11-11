import axios from 'axios';
import {API_GET_USERS, API_POST_USERS, API_GET_USER_FILE} from './actions_types';

import {API_URL} from '../config';

export function apiStatus() {
  console.log(API_URL)
  return ( (dispatch) => {
    axios.get(`${API_URL}/users`)
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
  console.log("apiCreateUser");
  console.log(data);
  return ( (dispatch) => {
    axios.post(`${API_URL}/users`, data)
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
