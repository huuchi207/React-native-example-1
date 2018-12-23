/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import MainScreen from "./MainScreen";

import {createStackNavigator, createAppContainer} from "react-navigation";
import SecondScreen from "./SecondScreen";

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <MainView/>
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

const MainView = createAppContainer(AppNavigator);
