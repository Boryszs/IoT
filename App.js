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

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeviceScreen from './screen/DeviceScreen';
import ConnectionScreen from './screen/ConnectionScreen';

const Tabs = createBottomTabNavigator();
const App= () =>{
  return (
    <NavigationContainer>
      <Tabs.Navigator tabBarOptions={{
              activeBackgroundColor:"grey",
              activeTintColor:"black",
                tabStyle:{
                  backgroundColor:'#C8C8C8',
                  borderWidth:1,
                  borderColor:'black',
                },labelStyle:{
                  fontSize:16,
                  color:'black',
                  textAlignVertical: 'center',
                  flex:1,
                }
            }}>
        <Tabs.Screen name = "Device" component = {DeviceScreen} />
        <Tabs.Screen name = "Connection" component = {ConnectionScreen}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
