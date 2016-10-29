/**
 * make our imports
 */
// import axios from 'axios';
import {TOGGLE_SERVICE} from './actions_types'

/**
 * define our root api route
 */
const API_URL = 'http://localhost:3000/api';

export function toggleService() {
  console.log("toggleComplete de action_creators");
  return {
    type: TOGGLE_SERVICE
  }
}


/**
 * our test action
 */
// export function testAction() {
//   return function(dispatch) {
//     axios.get(`${API_URL}/helloworld`)
//     .then(response => {
//       dispatch({
//         type: TEST_ACTION,
//         payload: response.data
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     })
//   }
// }
