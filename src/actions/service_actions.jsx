/**
 * make our imports
 */
// import axios from 'axios';
import {TOGGLE_SERVICE, FILTER_USERS, ADD_USER} from './actions_types'


export function toggleService() {
  return {
    type: TOGGLE_SERVICE
  }
}

export function filter_users(selectedFilter) {
  return {
    type: FILTER_USERS,
    filter_state: selectedFilter
  }
}

export function addUser() {
  return {
    type: ADD_USER
  }
}
