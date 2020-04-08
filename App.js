/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{ Component } from 'react';
import {View} from 'react-native';
import {DemoButton} from './CustomButton';

import { NBSAppAgent } from 'react-native-tingyunApp'
//const newlensClient = new NBSAppAgent();
const newlensClient = new NBSAppAgent();
//newlensClient.startWithOptions("","192.168.2",true,true);
newlensClient.startWithOptions("","",true,true);

import { GiftedChat } from 'react-native-gifted-chat'

class Example extends React.Component {
  state = {
    messages: [],
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    newlensClient.reportError(messages[0].text,new Error(),{"key":"value"});
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <View style={{flex:1}}>
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
    );
  }
}
export default class ShowMe extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <Example />
        <DemoButton />
      </View>
    );
  }
}