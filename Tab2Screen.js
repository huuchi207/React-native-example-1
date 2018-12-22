import React from 'react';
import {Text, View} from 'react-native';
import Tab1Screen from "./Tab1Screen";

class Tab2Screen extends React.Component {

  render() {
    const { navigation } = this.props;
    const substraction  = navigation.getParam('substraction', 0);
    return (
      <View>
        <Text>substraction = {substraction}</Text>
      </View>
    );
  }
}

export default Tab2Screen;