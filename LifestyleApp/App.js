import React, {Component} from 'react';
import {Platform, StyleSheet, Image, Text, View, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import {createDrawerNavigator, createAppContainer, DrawerItems} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen'
export default class App extends React.Component {
  render(){
  return(
    <Navbar />
    );
  }
}
const CustomDrawerComponent = (props) => (
  <SafeAreaView style ={{flex: 1 }}>
    <View style = {{height: 150, backgroundColor: 'white', alignItems:'center', justiyContent: 'center'}}>
      <Image source={require('./assets/images/panda.png')} style={{height:120, width:120, borderRadius:60}}/>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)
const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen
}, {
  contentComponent: CustomDrawerComponent,
  contentOptions: {
    activeTintColor: 'orange'
  }
}

)


const Navbar = createAppContainer(AppDrawerNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
