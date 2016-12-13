/**
 * Created by poype on 16/8/18.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Text
} from 'react-native';

class NavigationBar extends Component {

    _leftButtonHandler() {
        this.props.navigator.pop();
    }
    _rightButtonHanler() {
        
    }

    render() {
        return(
            <View>
                <View style={styles.statusBar}/>
                <View style={styles.navBar}>
                    <TouchableOpacity style={{marginLeft:15,justifyContent:'center'}} onPress={() => this._leftButtonHandler()}>
                        <Text>返回</Text>
                    </TouchableOpacity>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    navBarContainer: {
        backgroundColor: '#F8F8F8'
    },
    navBar: {
        height: 44,
        flexDirection: 'row',
        backgroundColor: '#F8F8F8'
    },
    statusBar: {
        height: 20,
        backgroundColor: '#F8F8F8'
    },
    titleContainer: {
        position: 'absolute',
        left: 100,
        right: 100,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 17,
        letterSpacing: 0.5,
        color: '#333',
        fontWeight: '500'
    }
});

export default NavigationBar;