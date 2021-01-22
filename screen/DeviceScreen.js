import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

export default class DeviceScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.textHead}>Devices</Text>
                </View>
                <ScrollView style={styles.scrol}>

                </ScrollView>
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
        borderBottomWidth: 2
    }, textHead: {
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center'
    },scrol:{
        minWidth: '100%',
        minHeight: '90%',
        flex:1
    }
});