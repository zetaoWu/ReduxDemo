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
import { add, sub } from '../actions/counterAction'
import { connect } from 'react-redux';
import NavigationBar from './common/navigationBar'
import { todo_add } from '../actions/todoAction'


class TwoView extends Component {

    constructor() {
        super();
        this.text = "";
    }

    handleChange(text) {
        this.text = text;
    }

    render() {
        console.log(this.props.todos);
        return (
            <View style={{ flex: 1 }}>
                <NavigationBar navigator={this.props.navigator} title="第二个页面" />
                <View style={styles.container}>
                    <View style={styles.opContainer}>
                        <TextInput style={styles.input} onChangeText={this.handleChange.bind(this)} />
                        <TouchableOpacity style={styles.button} onPress={this.props.addTodo.bind(this)}>
                            <Text>ADD TODO</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        this.props.todos.map(function (todo) {
                            return (<Text style={styles.item}>{todo}</Text>);
                        })
                    }
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todo.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo() {
            // dispatch(todo_add(this.text));
            dispatch(add(this.text));
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        width: 220,
        height: 50,
        borderWidth: 1,
        borderColor: 'black'
    },
    opContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    button: {
        height: 50,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        width: 50,
        height: 50,
        backgroundColor: 'yellow'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TwoView);


