/**
 * Created by poype on 16/8/9.
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import {add,sub} from '../actions/counterAction'
import TwoView from './twoView'

class OneView extends Component {

    constructor() {
        super();
        this.number = 0;
    }

    _handleNextPress(nextRoute) {
        this.props.navigator.push(nextRoute);
    }

    handleChange(text) {
        console.log(this.number);
        this.number = text -0;
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.jump} onPress={() => this._handleNextPress({component:TwoView})}>
                    <Text>点我跳转</Text>
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <Text>{this.props.num}</Text>
                </View>
                <View style={styles.opcontainer}>
                    <TouchableOpacity style={styles.button} onPress={this.props.subButtonClick.bind(this)}>
                        <Text>减</Text>
                    </TouchableOpacity>
                    <View>
                        <TextInput style={styles.input} keyboardType="numeric" onChangeText={this.handleChange.bind(this)} ref="input"/>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={this.props.addButtonClick.bind(this)}>
                        <Text>加</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        num: state.counter.num
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addButtonClick() {
            dispatch(add(this.number))
        },
        subButtonClick() {
            dispatch(sub(this.number))
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    opcontainer: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:130
    },
    button: {
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'grey'
    },
    input: {
        width:100,
        height:50,
        borderWidth:1,
        borderColor:'black'

    },
    textContainer: {
        width:100,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:50,
        borderWidth:1,
        borderColor:'black'
    },
    jump: {
        width:200,
        height:50,
        borderColor:'black',
        borderWidth:1,
        marginBottom:30,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(OneView);


