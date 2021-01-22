import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    StatusBar,
    Touchable,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ConnectionScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            place: '',
            command: '',
            color: ''
        }
    }

    handleName = (text) => {
        this.setState({ name: text })
    }

    handlePlace = (text) => {
        this.setState({ place: text })
    }

    handleCommand = (text) => {
        this.setState({ place: text })
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
                    <Text style={styles.text}>Color</Text>
                    <TextInput style={styles.inputH}
                        underlineColorAndroid="transparent"
                        placeholderTextColor="grey"
                        autoCapitalize="none"
                        onChangeText={this.handleCommand} />
                </View>
                <View style={styles.footer}>
                    <View style={styles.ButtonStyle}>
                        <TouchableOpacity style={styles.button}>
                             <Text>T</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.ButtonStyle}>
                        <TouchableOpacity style={styles.button}>
                             <Text>T</Text>
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
    },center: {
        minWidth: '100%',
        minHeight: '70%',
    },footer: {
        minWidth: '100%',
        minHeight: '20%',
        flexDirection:'row',
        flex:1,
    }, textHead: {
        fontSize: 42,
        fontWeight: 'bold',
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
        backgroundColor:'#C8C8C8',
        margin:20,
        width:140,
        height:60
    },ButtonStyle:{
        marginLeft:5,
        width:'50%',
        height:'20%',
    }
});