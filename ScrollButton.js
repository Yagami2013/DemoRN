import React, {Component} from 'react';
import {ScrollView,View,Text,Button, TouchableHighlight,StyleSheet} from "react-native";

export default class ScrollButton extends Component{
    _test1(){
        console.log("test when will it show me");
        //result:code run on page load,not onPress
    }
    render(){
        return(
            <ScrollView style={styles.container}>
                <TouchableHighlight onPress={this._test1()}  underlayColor="#123456" >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._test1()}  underlayColor="black" >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._test1()}  underlayColor="black" >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._test1()}  underlayColor="black" >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      //alignItems: 'center'
    },
    button: {
      marginBottom: 5,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#2196F3'
    },
    buttonText: {
      textAlign: 'center',
      padding: 10,
      color: 'white'
    }
  })