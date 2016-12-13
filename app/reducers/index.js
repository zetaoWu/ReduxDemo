/**
 * Created by poype on 16/8/25.
 */

'use strict';

import {combineReducers} from 'redux';
import counter from './counter'
import todo from './todo'

let reducerIndex = combineReducers({
    counter,
    todo
});

export default reducerIndex;