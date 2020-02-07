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
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Linking,
  Text,
  StatusBar,
  Alert,
} from 'react-native';
import{Newlens,} from 'hopezjy';
//var key_ea = "017f459cfc3a487e9bdc0264cb8ba511";
//var key_saas = "094e27493fb54536bee392598b1a4544";
//const newlensClient = new Newlens(key_saas);

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function testMe(){
    try{
        console.log(abc)
    }catch(e){
        newlensClient.notify(e,{"key":"aaa"})
        alert(e)
    }
}
function testError(){
    var e = new Error("6666")
    newlensClient.notify(e,{"mError":"！@#￥%……&*（）"})
}

const url="http://www.meituan.com";
const e = new Error("test type value");
const eMessage=new Error("touchableHandlePress@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false:52833:47\ntouchableHandlePress@[native code]\n_performSideEffectsForTransition@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false:52355:36\n_performSideEffectsForTransition@[native code]\n_receiveSignal@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false:52281:46\n_receiveSignal@[native code]\ntouchableHandleResponderRelease@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false:52160:26\ntouchableHandleResponderRelease@[native code]\ninvokeGuardedCallbackImpl@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false:9049:21\ninvokeGuardedCallback@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false:9145:42\ninvokeGuardedCallbackAndCatchFirstError@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false:9149:36");
export default class TestCustomError extends Component {

    render(){
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
<Button title="test message长度" color="#841009" onPress={()=>{newlensClient.notify(eMessage,{"key":"long message"})}}/>
<Button title="test exception with null message" color="#123456" onPress={()=>{newlensClient.notify(new Error(null),{"key":null})}}/>
<Button title="test message" color="#bbbbbb" onPress={()=>{newlensClient.notify("meeeeesage",e,{"key":null})}}/>
<Button title="test metaData value null" onPress={()=>{newlensClient.notify(e,{"key":null})}}/>
<Button title="test metaData null" color="#777777" onPress={()=>{newlensClient.notify(e,null)}}/>
<Button title="test exception null" color="#888888" onPress={()=>{newlensClient.notify("",{"key":"value"})}}/>
                <DemoButton/>
            </View>

        );
    }
}

