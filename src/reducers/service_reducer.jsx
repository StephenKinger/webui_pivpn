import {combineReducers} from 'redux';
import {TOGGLE_SERVICE, SET_STATE, API_STATUS, FILTER_USERS} from '../actions/actions_types';
import * as actions from '../actions/';
// import {toggleService} from '../actions/action_types';
import {Map} from 'immutable';



/**
 *
 */
 export function serviceReducer(state = Map(), action) {
  switch (action.type) {
    case SET_STATE:
      return setState(state, action.state);
    case TOGGLE_SERVICE:
      return toggleService(state);
    case API_STATUS:
      return update_status(state, action.payload);
    case FILTER_USERS:
      return update_filter(state, action.filter_state);
  }
  return state;
}

function update_filter(state, newFilter) {
  return  state.update('filter_state', (filter_state) => filter_state = newFilter);
}

function setState(state, newState){
  return state.merge(newState);
}

function toggleService(state){
  let serviceState = state.get('serviceState');
  let newServiceState = false;
  if (serviceState == false) {
    newServiceState = true;
  }
  return state.update('serviceState', currentServiceState => currentServiceState = newServiceState);
}

function update_status(state, payload) {
  return state.update('users', (users) => {
    var newUsers = [];
    payload.forEach(item => {newUsers.push(Map(item));});
    return newUsers;
  });
}
