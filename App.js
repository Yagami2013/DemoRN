/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{ Component } from 'react';
import DemoButton from './CustomButton';


import {
  View
} from 'react-native';

export default class TestCustomError extends Component {

    render(){
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <DemoButton/>
            </View>

        );
    }
}

