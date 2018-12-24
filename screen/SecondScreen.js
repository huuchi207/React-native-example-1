import React from 'react';
import {Text, View} from 'react-native';
import Tab1Screen from "./Tab1Screen";

class SecondScreen extends React.Component {

  render() {
      //get param from rootNavigation
    const { navigation } = this.props;
    console.log("navigation", navigation);
    
    const sum  = navigation.getParam('sum', 0);
      //another way: this.props.navigation.state.params.sum

      return (
      <View>
        <Text>Sum = {sum}</Text>
      </View>
    );
  }
}

export default SecondScreen;