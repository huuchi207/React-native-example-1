/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import MainScreen from "./MainScreen";

import {View, Text} from "react-native";
import {createStackNavigator, createAppContainer} from "react-navigation";
import SecondScreen from "./SecondScreen";

class App extends React.Component {
  render() {
    return (
      <MainView />
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    MainScreen: MainScreen,
    SecondScreen: SecondScreen
  },
  {
    initialRouteName: "MainScreen"
  }
  )
;

const MainView =  createAppContainer(AppNavigator);
