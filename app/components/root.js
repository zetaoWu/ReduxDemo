/**
 * Created by poype on 16/8/25.
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {View} from 'react-native';
import store from '../store/configStore';
import OneView from './oneView';
import TwoView from './twoView'
import Navigation from './common/navigation'


class RootView extends Component {
    constructor() {
        super();
        this.state = {store:store}
    }
    render() {
        return (
            <Provider store={this.state.store}>
                <Navigation initialRoute={{component: OneView}}/>
            </Provider>
        );
    }
}

export default RootView;
