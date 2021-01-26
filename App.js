/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeviceScreen from './screen/DeviceScreen';
import ConnectionScreen from './screen/ConnectionScreen';
import NewDeviceScreen from './screen/NewDeviceScreen';
import SplashScreen from 'react-native-splash-screen';
const SettingsStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    SplashScreen.hide();
  }


  SettingsStackScreen() {
    return (

      <Tabs.Navigator tabBarOptions={{
        unmountOnBlur: true,
        activeBackgroundColor: "grey",
        activeTintColor: "black",
        tabStyle: {
          backgroundColor: '#C8C8C8',
          borderWidth: 1,
          borderColor: 'black',
        }, labelStyle: {
          fontSize: 16,
          fontFamily:'RobotoMono-Bold',
          color: 'black',
          textAlignVertical: 'center',
          flex: 1,
        }
      }}>

        <Tabs.Screen name="Device" component={DeviceScreen} unmountOnBlur={true} options={{ unmountOnBlur: true }} />
        <Tabs.Screen name="Connection" component={ConnectionScreen} unmountOnBlur={true} options={{ unmountOnBlur: true }} />
      </Tabs.Navigator>
    );
  }


  render() {
    return (
      <NavigationContainer>
        <SettingsStack.Navigator unmountOnBlur={true} initialRouteName={"Device"} screenOptions={{
          headerShown: false
        }}>
          <SettingsStack.Screen name="Device" component={this.SettingsStackScreen} unmountOnBlur={true} options={{ unmountOnBlur: true }} />
          <SettingsStack.Screen name="NewDeviceScreen" component={NewDeviceScreen} unmountOnBlur={true} options={{ unmountOnBlur: true }} />
        </SettingsStack.Navigator>
      </NavigationContainer>
    );
  }
}