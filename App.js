import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';



import WriteStoryScreen from './screens/writeStoryScreen'
import ReadStoryScreen from './screens/readStoryScreen'

export default class App extends React.Component{
  render(){
    return (
      <AppContainer></AppContainer>
    );
  }
}
const tabNavigator = createBottomTabNavigator({
  WriteStory: {screen:WriteStoryScreen},
  ReadStory: {screen: ReadStoryScreen}
},
{defaultNavigationOptions:({navigation})=>({
  tabBarIcon:()=>{
    const routeName = navigation.state.routeName;
    if (routeName ==='WriteStory'){
      return(
        <Image
        source = {require('./assets/write.png')}
        style = {{width: 35, height: 35}}></Image>
      )
    }
    else if (routeName ==='ReadStory'){
      return(
        <Image
        source = {require('./assets/read.png')}
        style = {{width: 35, height: 35}}></Image>
      )
    }
  }
  })
})
const AppContainer = createAppContainer(tabNavigator)