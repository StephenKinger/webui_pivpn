import {combineReducers} from 'redux';
import {TOGGLE_SERVICE, SET_STATE, API_GET_USERS, FILTER_USERS,
  ADD_USER, API_POST_USERS, API_PUT_REVOKE_USER, API_POST_AUTHENTICATE,
  DISCONNECT} from '../actions/actions_types';

import {Map} from 'immutable';
import cookie from 'react-cookie';


/**
 *
 */
 export function serviceReducer(state = Map(), action) {
  switch (action.type) {
    case SET_STATE:
      return setState(state, action.state);
    case TOGGLE_SERVICE:
      return toggleService(state);
    case API_GET_USERS:
      return update_status(state, action.payload);
    case FILTER_USERS:
      return update_filter(state, action.filter_state);
    case ADD_USER:
      return addingUser(state);
    case API_POST_USERS:
      return updateUserCreate(state, action.payload);
    case API_PUT_REVOKE_USER:
      return update_status(state, action.payload);
    case API_POST_AUTHENTICATE:
      return updateAuth(state, action.payload);
    case DISCONNECT:
      return updateAuthDisconnected(state);
  }
  return state;
}

function updateAuthDisconnected(state) {
  return state.update('authToken', (token) => token = '');
}

function updateAuth(state, payload) {
  console.log(payload);
  cookie.save('token', payload.token, { path: '/' });
  return state.update('authToken', (token) => token = payload.token);
}

function updateUserCreate(state, payload) {
  console.log(payload);
  var newState = update_status(state, payload);
  return addingUser(newState);
}

function addingUser(state) {
  return state.update('addingUser', (addingUser) => addingUser = !addingUser);
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
