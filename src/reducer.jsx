import { combineReducers } from 'redux';
import {serviceReducer} from './reducers/service_reducer';
import {routerReducer} from 'react-router-redux';

/**
 * combine the reducers
 // */
export default  combineReducers({
   service: serviceReducer,
   routing: routerReducer
 });
