import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { CommonActions } from '@react-navigation/native';
export default class NewDeviceScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            place: '',
            command: '',
            color: '',
            items: []
        }
    }

    handleName = (text) => {
        this.setState({ name: text })
    }

    handlePlace = (text) => {
        this.setState({ place: text })
    }

    handleCommand = (text) => {
        this.setState({ command: text })
    }

    handleColor = (text) => {
        this.setState({ color: text })
    }
    _storeData = async () => {
        try {

            let obj = await AsyncStorage.getItem("Items")
            //console.log(obj);
            if (obj !== null) {
                this.setState({
                    items: JSON.parse(obj)
                })
            } else {
                this.setState({
                    items: null
                })
            }
        } catch (error) {

        }
    }


    componentDidMount = async () => {
        this._storeData()
    }

    _addItems = (item) => {
        //console.log(item);
        it = this.state.items;
        //console.log(it);
        if (it === null) {
            it = [item];
            //   console.log(it)
            this.setState({
                items: it
            }, () => {
                AsyncStorage.setItem("Items", JSON.stringify(this.state.items))
            })
        } else {
            this.setState({
                items: [...this.state.items, item],
            }, () => {
                AsyncStorage.setItem("Items", JSON.stringify(this.state.items))
            })
        }

        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'Device' }],
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.textHead}>New devices</Text>
                </View>
                <View style={styles.center}>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Name"
                        placeholderTextColor="grey"
                        autoCapitalize="none"
                        onChangeText={this.handleName} />
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Place"
                        placeholderTextColor="grey"
                        autoCapitalize="none"
                        onChangeText={this.handlePlace} />
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Command"
                        placeholderTextColor="grey"
                        autoCapitalize="none"
                        onChangeText={this.handleCommand} />

                    {/* //TOCO ADD SOME COLOR PICKER   */}

                    {/* <Text style={styles.text}>Color</Text>
                    <TextInput style={styles.inputH}
                        underlineColorAndroid="transparent"
                        placeholderTextColor="grey"
                        autoCapitalize="none"
                        onChangeText={this.handleColor} /> */}
                </View>
                <View style={styles.footer}>
                    <View style={styles.ButtonStyle}>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.reset({
                            index: 0,
                            routes: [{ name: 'Device' }],
                        })}>
                            <Text style={styles.textButton}>Cancel</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.ButtonStyle}>
                        <TouchableOpacity style={styles.button} onPress={() => this._addItems({ name: this.state.name, place: this.state.place, command: this.state.command })}>
                            <Text style={styles.textButton}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        minWidth: '100%',
        minHeight: '100%',
        borderColor: 'black',
        borderWidth: 2
    }, head: {
        minWidth: '100%',
        minHeight: '10%',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    }, center: {
        minWidth: '100%',
        minHeight: '70%',
    }, footer: {
        minWidth: '100%',
        minHeight: '20%',
        flexDirection: 'row',
        flex: 1,
    }, textHead: {
        fontSize: 42,
        fontFamily: 'PottaOne-Regular',
        textAlign: 'center'
    }, input: {
        margin: 15,
        height: 40,
        borderColor: 'black',
        borderWidth: 1
    }, inputH: {
        margin: 15,
        height: 160,
        borderColor: 'black',
        backgroundColor: '#fff6e5',
        borderWidth: 1
    }, text: {
        marginLeft: 15,
        fontSize: 22,
        color: 'black'
    }, button: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#C8C8C8',
        margin: 20,
        width: 140,
        height: 60,
        justifyContent: 'center',
    }, ButtonStyle: {
        marginLeft: 5,
        width: '50%',
        height: '20%',
    }, textButton: {
        textAlign: 'center',
        fontSize: 18,
    }
});