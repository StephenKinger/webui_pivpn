import {combineReducers} from 'redux';
import {TOGGLE_SERVICE, SET_STATE, API_STATUS} from '../actions/actions_types';
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
  }
  return state;
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
