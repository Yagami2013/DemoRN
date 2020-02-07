import React,{Component} from 'react';
import {Button,View} from 'react-native';
import{Newlens,} from 'hopezjy';
var key_ea = "017f459cfc3a487e9bdc0264cb8ba511";
var key_saas = "094e27493fb54536bee392598b1a4544";
const newlensClient = new Newlens(key_ea);

class CustomButton extends Button {
    render(){
        return (
            <View style={{alignItems: 'center', marginTop: 50}}>
                <Button
                title={this.props.title}
                onPress={()=>{
                newlensClient.notify(new Error("an error"),{"button_id":this.props.title})}}/>
            </View>
        );
    }
}
export default class DemoButton extends Component {
    render(){
        return(
            <View style={{alignItems: 'center'}}>
                    <CustomButton title='6666' />
                    <CustomButton title='Jaina' />
                    <CustomButton title='Valeera' />
            </View>
        );
    }
}