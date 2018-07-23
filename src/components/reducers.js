
/**
 * @desc Reducer's of Dashboard
 */
import Mics from './containers/mics/reducer';

/**
 * @desc
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

/**
 * @desc
 */
export const Reducers = combineReducers({

    /* @ */
    Mics,

    /* @ */
    routing: routerReducer

});