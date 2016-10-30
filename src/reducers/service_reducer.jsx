import {combineReducers} from 'redux';
import {TOGGLE_SERVICE, SET_STATE} from '../actions/actions_types';
import * as actions from '../actions/';
// import {toggleService} from '../actions/action_types';
import {Map} from 'immutable';



/**
 *
 */
 export function serviceReducer(state = Map(), action) {
   console.log("recuder called");
  switch (action.type) {
    case SET_STATE:
      return setState(state, action.state);
    case TOGGLE_SERVICE:
      return toggleService(state);
  }
  return state;
}

function setState(state, newState){
  return state.merge(newState);
}

function toggle_service(state){
  let serviceState = state.get('serviceState');
  let newServiceState = false;
  if (serviceState == false) {
    newServiceState = true;
  }
  return state.update('serviceState', newServiceState);
}
