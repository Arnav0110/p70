import color from 'color';
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class WriteStoryScreen extends React.Component {
 
    constructor(){
        super()
        this.state= {text1:'', text2:'',text3:''}
       }

    render() {
        return (
          <SafeAreaProvider>
          <View >
          <Header backgroundColor={'darkblue'} 
          centerComponent={{ text: 'Story Hub', style: { color: 'lightblue', fontSize: 30  } }}>
          </Header>
          
          <View>
          <Text style= {{fontSize:20}}>Title</Text>
        <TextInput
          style={{width:1280, height: 60, backgroundColor: 'lightblue'}}
          onChangeText = {(text1)=>{
            this.setState({text1:text1})
          }}
          value={this.state.text1}
          />
          </View>

         <View>
         <Text style= {{fontSize:20}}>Author</Text>
        <TextInput
          style={{width:1280, height: 60, backgroundColor: 'lightblue'}}
          onChangeText = {(text2)=>{
            this.setState({text2:text2})
          }}
          value={this.state.text2}
          /></View>

           <View> 
           <Text style= {{fontSize:20}}>Write your Story</Text>
        <TextInput
          style={{width:1280, height: 300, backgroundColor: 'lightblue'}}
          onChangeText = {(text3)=>{
            this.setState({text3:text3})
          }}
          value={this.state.text3}
          /></View>
          
          <TouchableOpacity 
          style= {{width:90, height: 60, backgroundColor: 'darkblue', 
          color: 'lightblue', justifyContent: 'center',marginLeft:600, paddingLeft:15}}
          onPress={()=>{
            this.setState({
              displayText:this.state.text})
          }}>
          <Text style= {{fontSize:20,color: 'lightblue'}}>Submit</Text>
          </TouchableOpacity>

          </View></SafeAreaProvider>
        );
      }
}