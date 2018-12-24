import {View, Text, Button, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 5,
        height: 30,
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center"
    },
    nameText:{
        flex: 2,
    },
    button:{
        flex:1,
        // width: 15,
        // height: 10,
    },
    editBt: {
        backgroundColor: "blue"
    },
    deleteBt : {
        backgroundColor: "red"
    }
});
const CustomRow = ({name, onEdit, onDelete}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.nameText}>{name}</Text>
            <TouchableOpacity
                onPress={onEdit}
                style={[styles.button, styles.editBt]}
            >
                <Text style={styles.nameText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onDelete}
                style={styles.button}
            >
                <Text style={[styles.nameText, styles.deleteBt]}>Delete</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomRow;