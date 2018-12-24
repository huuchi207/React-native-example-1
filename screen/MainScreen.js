import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Tab2Screen from "./Tab2Screen";
import Tab1Screen from "./Tab1Screen";
import Tab3Screen from "./Tab3Screen";

const TabNavigator = createBottomTabNavigator({
    Tab3: {screen: Tab3Screen},
    Tab1: {screen: Tab1Screen},
    Tab2: {screen: Tab2Screen},
});
export default class MainScreen extends React.Component {
    render() {
        return (
            <Screen screenProps={{rootNavigation: this.props.navigation}}/>
        );
    };
}

const Screen = createAppContainer(TabNavigator);
