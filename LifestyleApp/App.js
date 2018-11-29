//This file contains the navigation routes and properties
//To add more links import the file and add route in AppDrawerNavigator
import React, {Component} from 'react';
import {Platform, StyleSheet, Image, Text, View, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import {createDrawerNavigator, createAppContainer, DrawerItems} from 'react-navigation';
//Add Links Below
import HomeScreen from './screens/HomeScreen';
import GoalTrackerScreen from './screens/GoalTrackerScreen'
import CalorieTrackerScreen from './screens/CalorieTrackerScreen';
import PedometerScreen from './screens/PedometerScreen';
import ToDoScreen from './screens/ToDoScreen';
import SettingsScreen from './screens/SettingsScreen';

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
//Add options below will show up on nav menu
const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  'Set Goals':GoalTrackerScreen,
  'Calorie Tracker': CalorieTrackerScreen,
  Pedometer: PedometerScreen,
  'To-Do': ToDoScreen,
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
