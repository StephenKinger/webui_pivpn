import axios from 'axios';
import {API_STATUS} from './actions_types';

const API_URL = 'http://127.0.0.1:3000/api';

export function apiStatus() {
  return ( (dispatch) => {
    axios.get(`${API_URL}/users`)
      .then(response => {
        dispatch({
        type: API_STATUS,
        payload: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  })
}
