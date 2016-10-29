import {combineReducers} from 'redux';
import {TOGGLE_SERVICE} from '../actions/actions_types';
import * as actions from '../actions/';
// import {toggleService} from '../actions/action_types';
import {Map} from 'immutable';

/**
 *
 */
 export function serviceReducer(state = Map(), action) {
  switch (action.type) {
    case TOGGLE_SERVICE:
      return toggleService(state);
  }
  return state;
}
