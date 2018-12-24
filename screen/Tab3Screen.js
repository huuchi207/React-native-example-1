import React from 'react';
import {View, FlatList, Button, Text, StyleSheet, TextInput} from "react-native";
import CustomRow from "../view/CustomRow";
import DialogManager, {DialogContent, ScaleAnimation} from "react-native-dialog-component";

const exampleData = ["Row 1", "Row 2", "Row 3", "Row 4", "Row 5",
    "Row 6", "Row 7", "Row 8", "Row 9", "Row 10"];
export default class Tab3Screen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listdata: exampleData,
            newName: "",
            refreshing: false,
            onEndReachedCalledDuringMomentum: true
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.listdata}
                    renderItem={({item, index}) => (
                        <CustomRow name={item} onEdit={() => {
                            this.edit(index)
                        }}
                                   onDelete={() => {
                                       this.delete(index)
                                   }}/>
                    )}
                    // extraData={}
                    keyExtractor={(item, index) => index.toString()}
                    onRefresh={this.refresh}
                    onEndReached={this.onEndReached.bind(this)}
                    refreshing={this.state.refreshing}
                    onEndReachedThreshold={0.5}
                    onMomentumScrollBegin={() => { this.setState({onEndReachedCalledDuringMomentum : false })}}
                />
                <Button title="NEW ROW" onPress={this.add} styles={{flex: 0.5}}/>
            </View>
        );
    }
    componentDidMount () {
        this.props.navigation.addListener('didFocus', (newName) => {
            // Update the component (API calls here)
            console.log("new name", newName);
        });
    }
    refresh = () => {
        this.setState({listdata: exampleData});
        this.setState({refreshing: false})
    };
    onEndReached = ({ distanceFromEnd }) => {
        if(!(this.state.listdata.length>50)){
            this.setState({listdata: [...this.state.listdata, ...exampleData]});
            this.setState({refreshing: false});
            // this.setState({onEndReachedCalledDuringMomentum : true });
        }
    }

    edit = (position) => {
        this.setState({newName: this.state.listdata[position]});
        DialogManager.show({
            title: 'Edit Name',
            titleAlign: 'center',
            animationDuration: 200,
            ScaleAnimation: new ScaleAnimation(),
            children: (
                <DialogContent>
                    <View styles={{flexDirection: "column"}}>
                        <TextInput defaultValue={this.state.listdata[position]}
                                   onChangeText={(text) => {
                                       this.setState({newName: text});
                                   }}/>
                        <Button title="OK" onPress={() => {
                            if (this.state.newName !== "") {
                                const newItems = [...this.state.listdata];
                                //TODO: need to optimise performance
                                newItems[position] = this.state.newName;
                                this.setState({listdata: newItems});
                                //reset new name
                                this.setState({newName: ""});

                                DialogManager.dismiss(() => {
                                    console.log('callback - dismiss');
                                });
                            }

                        }}/>
                    </View>

                </DialogContent>
            ),
        }, () => {
            console.log('callback - show');
        });
    };
    delete = (position) => {
        this.setState(prevState => {
            return {
                listdata: prevState.listdata.filter((item, pos) => {
                    console.log(item);
                    return pos !== position;
                })
            }
        })
    }
    add = () => {
        // DialogManager.show({
        //     title: 'Add Name',
        //     titleAlign: 'center',
        //     animationDuration: 200,
        //     ScaleAnimation: new ScaleAnimation(),
        //     children: (
        //         <DialogContent>
        //             <View styles={{flexDirection: "column"}}>
        //                 <TextInput onChangeText={(text) => {
        //                     this.setState({newName: text});
        //                 }}/>
        //                 <Button title="OK" onPress={() => {
        //                     if (this.state.newName !== "") {
        //                         this.setState(prevState => {
        //                             return {
        //                                 // listdata: prevState.listdata.concat(this.state.newName)
        //                                 listdata: [...this.state.listdata, this.state.newName]
        //                             }
        //                         });
        //                         //reset new name
        //                         this.setState({newName: ""});
        //
        //                         DialogManager.dismiss(() => {
        //                             console.log('callback - dismiss');
        //                         });
        //                     }
        //
        //                 }}/>
        //             </View>
        //
        //         </DialogContent>
        //     ),
        // });
        this.props.screenProps.rootNavigation.push("EnterNewRowScreen", {onBack: this.onBack});

    }
    onBack= (newName) =>{
        this.setState(prevState => {
            return {
                // listdata: prevState.listdata.concat(this.state.newName)
                listdata: [...this.state.listdata, newName],
                newName: ""
            }
        });

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});