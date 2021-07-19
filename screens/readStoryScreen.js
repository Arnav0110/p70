import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  
} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';


export default class ReadStoryScreen extends React.Component {
    render(){
        return(
        <SafeAreaProvider>
        <View>
        <Header backgroundColor={'darkblue'} 
          centerComponent={{ text: 'Story Hub', style: { color: 'lightblue', fontSize: 30  } }}>
          </Header>

        <View style = {styles.container}>
            <Text>Read A Story</Text>
        </View>
        </View></SafeAreaProvider>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})