import React,{Component} from 'react';
import {Button,View} from 'react-native';
import{Newlens,} from 'hopezjy';
var key_ea = "017f459cfc3a487e9bdc0264cb8ba511";
var key_saas = "094e27493fb54536bee392598b1a4544";
const newlensClient = new Newlens();

function MyError(msg){
    this.name="MyError";
    this.message = msg || "自定义异常的默认消息";
  }
  MyError.prototype = Object.create(Error.prototype);
  MyError.prototype.constructor = MyError

class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
    
}
  

class CustomButton extends Button {
    render(){
        return (
            <View style={{alignItems: 'center', marginTop: 10}}>
                <Button
                title={this.props.title}
                color="#123321"
                onPress={()=>{
                newlensClient.notify(new Error("an error"),{"button_id":this.props.title})}}/>
            </View>
        );
    }
}
class CRButton extends Button{
    render(){
        return (
            <View style={{alignItems: 'center', marginTop: 10}}>
                <Button
                title="from chenrui"
                color="#876543"
                onPress={()=>{
                    try{
                        throw new MyError()
                      }catch(e){
                        console.log(e.name+":"+e.message)
                        console.log(e.stack)
                        newlensClient.notify(e,{'key':'a123_keyValue_@&#%_\n_\\'})
                      
                      }
                }}/>
            </View>
        );
    }
}
class MButton extends Button{
    render(){
        return (
            <View style={{alignItems: 'center', marginTop: 10}}>
                <Button
                title={this.props.title}
                color="#000543"
                onPress={()=>{
                    try{
                        throw new ValidationError("ValidationError test msg")
                      }catch(e){
                        console.log(e.name+":"+e.message)
                        console.log(e.stack)
                        newlensClient.notify(e,{'key':'a123_keyValue_@&#%_\n_\\'})
                      
                      }
                }}/>
            </View>
        );
    }
}
export default class DemoButton extends Component {
    render(){
        return(
            <View style={{alignItems: 'center'}}>
                    <CustomButton title='6666' />
                    <CRButton />
                    <MButton title="123"/>

            </View>
        );
    }
}