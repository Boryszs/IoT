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

const SettingsStack = createStackNavigator();

function SettingsStackScreen(){
  return (

    <Tabs.Navigator tabBarOptions={{
      activeBackgroundColor: "grey",
      activeTintColor: "black",
      tabStyle: {
        backgroundColor: '#C8C8C8',
        borderWidth: 1,
        borderColor: 'black',
      }, labelStyle: {
        fontSize: 16,
        color: 'black',
        textAlignVertical: 'center',
        flex: 1,
      }
    }}>

      <Tabs.Screen name="Device" component={DeviceScreen} options={{ unmountOnBlur: true }} />
      <Tabs.Screen name="Connection" component={ConnectionScreen} options={{ unmountOnBlur: true }} />
    </Tabs.Navigator>
  );
}
const Tabs = createBottomTabNavigator();
const App = () => {
  return (
    SettingsStackScreen(),
     <NavigationContainer>
          <SettingsStack.Navigator initialRouteName={"Device"} screenOptions={{
        headerShown: false
      }}>
         <SettingsStack.Screen name="Device" component={SettingsStackScreen} />
         <SettingsStack.Screen name="NewDeviceScreen" component={NewDeviceScreen}/>
      </SettingsStack.Navigator>
    </NavigationContainer>
  );
};

export default App;