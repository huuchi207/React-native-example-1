import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Tab2Screen from "./Tab2Screen";
import Tab1Screen from "./Tab1Screen";

const TabNavigator = createBottomTabNavigator({
  Tab1: { screen: Tab1Screen },
  Tab2: { screen: Tab2Screen },
});

export default createAppContainer(TabNavigator);
