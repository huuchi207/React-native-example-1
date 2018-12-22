import React from 'react';
import {Text, View} from 'react-native';
import Tab1Screen from "./Tab1Screen";

class SecondScreen extends React.Component {

  render() {
    const { navigation } = this.props;
    const sum  = navigation.getParam('sum', 0);
    return (
      <View>
        <Text>Sum = {sum}</Text>
      </View>
    );
  }
}

export default SecondScreen;