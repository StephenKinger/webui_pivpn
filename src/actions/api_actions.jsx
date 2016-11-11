import axios from 'axios';
import {API_GET_USERS, API_POST_USERS} from './actions_types';

const API_URL = 'http://192.168.1.23:3000/api';

export function apiStatus() {
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
