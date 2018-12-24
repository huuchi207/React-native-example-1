import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
export default class EnterNewRowScreen extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            newName: ""
        }
    }
    render() {
        return <View style={styles.container}>
            <View style={styles.centerView}>
                <View style={[styles.form, styles.container]}>
                    <Text style={styles.label}>Enter name: </Text>
                    <TextInput style={styles.textInput}
                               onChangeText={(text)=> {this.setState({newName: text})}
                    }/>
                </View>
                <TouchableOpacity style={styles.buttonSubmit}
                                  onPress={this.addNewName}>
                    <Text style={{color: "white"}}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>;
    }
    addNewName= () =>{
        if (this.state.newName !== ""){
            //trigger listener
            console.log("navigation", this.props);

            this.props.navigation.state.params.onBack(this.state.newName);
            this.props.navigation.goBack();
        }
    }

}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    },
    centerView : {
        height: Dimensions.get("window").height/2,
        width: Dimensions.get("window").width/2,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    form: {
        flexDirection: "row",
    },
    textInput: {
        flex: 1,
    },
    label: {
        flex: 1,
    },
    buttonSubmit: {
        width: 50,
        backgroundColor: "blue",
        alignItems: "center",
    }
});