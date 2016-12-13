/**
 * Created by poype on 16/8/11.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Navigator,
    Text,
    TouchableOpacity,
    Image,
    View,
    StatusBar
} from 'react-native';


class Navigation extends Component {
    render() {
        return (
            <Navigator
                initialRoute={this.props.initialRoute}
                renderScene={(route, navigator) =>
                    React.createElement(route.component,{navigator:navigator})
                }
                sceneStyle={styles.sceneStyle}
            />
        );
    }
}
var styles = StyleSheet.create({
    sceneStyle: {
        shadowColor: '#000000',
        shadowOpacity: .5,
        shadowOffset: {
            height: 1,
            width: 0
        },
        overflow: 'visible',
        flex: 1,
        backgroundColor: '#ffffff'
    }
});

export default Navigation;