/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import MainScreen from "./screen/MainScreen";

import {createStackNavigator, createAppContainer} from "react-navigation";
import SecondScreen from "./screen/SecondScreen";
import EnterNewRowScreen from "./screen/EnterNewRowScreen";

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
    SecondScreen: SecondScreen,
      EnterNewRowScreen: EnterNewRowScreen
  },
  {
    initialRouteName: "MainScreen"
  }
  )
;

const MainView = createAppContainer(AppNavigator);
