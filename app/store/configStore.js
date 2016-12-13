/**
 * Created by poype on 16/8/25.
 */

import { createStore } from 'redux';
import reducerIndex from '../reducers';

let store = createStore(reducerIndex);

export default store;
