import React,{Component} from 'react';
import {Button,AppRegistry,View,ScrollView,StyleSheet} from 'react-native';
import RNTingyunApp from 'react-native-tingyunApp';
const newlensClient=new RNTingyunApp();

//const newlensClient = new NBSAppAgent();

// import{Newlens,} from 'hopezjy';
// const newlensClient = new Newlens();

// var key_ea = "017f459cfc3a487e9bdc0264cb8ba511";
// var key_saas = "094e27493fb54536bee392598b1a4544";
// const newlensClient = new Newlens("192.168.2.100:8081",key_ea,true);

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
            <View style={{marginTop: 5, width: 300}}>
                <Button
                title={this.props.title}
                onPress={this.props.onPress}/>
            </View>
        );
    }
}
let e = new Error("common msg");
let meta = {"key":"123"};
function createString(l){
    let m='';
    for(let i=0;i<l-1;i++){
        m=m+'*';
    }
    return m+'e';
}
let longMsg = createString(1023);
let largeMeta = createString(128*1024);
let eMessage = Error(longMsg);
console.log(longMsg.length);
export default class DemoButton extends Component {
    render(){
        return(
            <ScrollView style={styles.container}>
                    <CustomButton title="meta data special charactor" onPress={()=>{try{
                        throw new ValidationError("ValidationError test msg")
                      }catch(e){
                          newlensClient.reportError("2020-2-17:test msg",e,{'key':'a123_！#￥……*（）keyValue_@&#%_\n_\\'});
                        }}} />
                    <CustomButton title="exception no stack" style={styles.button} onPress={()=>{try{
                        throw new MyError()
                      }catch(e){
                        console.log(e.name+":"+e.message)
                        console.log(e.stack)
                        //newlensClient.notify(e,meta)
                      }}} />
                    <CustomButton title="meta value=this.props.title" onPress={()=>{
                        //newlensClient.notify(e,{"key":this.props.title});
                        }} />
                    <CustomButton title="meta={}" onPress={()=>{
                        //newlensClient.notify(e,{});
                        }} />
                    <CustomButton title="long message" onPress={()=>{
                        //newlensClient.notify(eMessage,meta);
                    }} />
                    <CustomButton title="meta value null" onPress={()=>{
                        //newlensClient.notify(e,{"key":null});
                    }} />
                    <CustomButton title="uncaught exception?" 
                     onPress={()=>{
                         try{
                             console.log(abc)
                         }catch(ee){
                             //newlensClient.notify(ee,meta);
                            }
                        } }/>
                    <CustomButton title="large meta string" onPress={()=>{
                        //newlensClient.notify(e,{"key":largeMeta});
                    }} />
                    <CustomButton title="100 errors" onPress={()=>{
                        for(let j=0;j<100;j++){
                            //newlensClient.notify(e,meta)
                        }
                    }
                       } />

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      //alignItems: 'center'
    }
  });