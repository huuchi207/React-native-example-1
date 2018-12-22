import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import {Dimensions, StyleSheet} from 'react-native';
class Tab1Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  plusAction = () => {
    if (isNaN(this.state.a) || isNaN(this.state.b)) {

    } else {
      this.props.navigation.push("SecondScreen", {
        sum : Number(this.state.a) + Number(this.state.b)
      })
    }
  };
  minusAction = () => {
    if (isNaN(this.state.a) || isNaN(this.state.b)) {

    } else {
      console.log(this.state.a);
      console.log(this.state.b);
      var substraction = parseFloat(this.state.a) - parseFloat(this.state.b);
      console.log(substraction);
      // this.props.navigator.({results: 'one'});
      this.props.navigation.navigate('Tab2', {
        substraction: substraction
      });
    }
  };
  render() {
    return (
      <View style={styles.rootView}>
        <View style={[styles.centerView, {
          flexDirection: "column",
          width: Dimensions.get("window").width / 2,
          height: Dimensions.get("window").height / 2,
          flex: 1,
        }]}>
          <View style={[styles.centerView,
            {flexDirection: "row", flex: 0.1}]}>
            <Text style={{flex: 0.2}}>a</Text>
            <TextInput style={{flex: 0.7}}
                       onChangeText={(a) => this.setState({a})}/>
          </View>
          <View style={[styles.centerView,
            {flexDirection: "row", flex: 0.1}]}>
            <Text style={{flex: 0.2}}>b</Text>
            <TextInput style={{flex: 0.7}}
                       onChangeText={(b) => this.setState({b})}/>
          </View>
          <View style={[styles.centerView, {flexDirection: "row", flex: 0.1}]}>
            <Button style={{flex: 0.5, marginRight: 50}}
                       onPress={this.plusAction} title="PLUS"/>
            <Button style={{flex: 0.5}} onPress={this.minusAction} title="MINUTE"/>
          </View>
        </View>

      </View>
    );
  }
}
const styles =  StyleSheet.create({
  rootView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  horizontalOrientation: {
    flexDirection: "row"
  },
  verticalOrientation: {
    flexDirection: "column"
  },

});

export default Tab1Screen;