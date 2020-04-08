import React,{Component} from 'react';
import {Button,AppRegistry,View,ScrollView,StyleSheet} from 'react-native';
// import RNTingyunApp from 'react-native-tingyunApp';
// const newlensClient=new RNTingyunApp();
import { NBSAppAgent } from 'react-native-tingyunApp'
const newlensClient = new NBSAppAgent();

// import{Newlens,} from 'hopezjy';
// const newlensClient = new Newlens();

// var key_ea = "";
// var key_saas = "";
// const newlensClient = new Newlens("",key_ea,true);

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
let testMsg = "2020-2-18:"
console.log(longMsg.length);
export  class DemoButton extends Component {
    render(){
        return(
            <ScrollView style={styles.container}>
                    <CustomButton title="meta data special charactor" onPress={()=>{try{
                        throw new ValidationError("ValidationError test msg")
                      }catch(e){
                          //newlensClient.reportError(testMsg,e,{'key':'a123_！#￥……*（）keyValue_@&#%_\n_\\'});
                        }}} />
                    <CustomButton title="exception no stack" style={styles.button} onPress={()=>{try{
                        throw new MyError()
                      }catch(e){
                        console.log(e.name+":"+e.message)
                        console.log(e.stack)
                        newlensClient.reportError(testMsg,e,meta)
                      }}} />
                    <CustomButton title="meta value=this.props.title" onPress={()=>{
                        newlensClient.reportError(testMsg,e,{"key":this.props.title});
                        }} />
                    <CustomButton title="meta={}" onPress={()=>{
                        newlensClient.reportError(testMsg,e,null);
                        }} />
                    <CustomButton title="long message" onPress={()=>{
                        newlensClient.reportError(longMsg,new Error(testMsg),meta);
                    }} />
                    <CustomButton title="meta value null" onPress={()=>{
                        newlensClient.reportError(testMsg,e,{"key":null});
                    }} />
                    <CustomButton title="uncaught exception?" 
                    
                     onPress={()=>{
                         try{
                             console.log(abc)
                         }catch(ee){
                             newlensClient.reportError(testMsg,ee,meta);
                            }
                        } }/>
                    <CustomButton title="large meta string" onPress={()=>{
                        newlensClient.reportError(testMsg,e,{"key":largeMeta});
                    }} />
                    <CustomButton title="100 errors" onPress={()=>{
                        for(let j=0;j<100;j++){
                            newlensClient.reportError(testMsg,e,meta);
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