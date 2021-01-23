import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button, TouchableOpacity
} from 'react-native';


export default class ConnectionScreen extends Component {
    constructor(props) {
        super(props);
        state = {
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.textHead}>Connection</Text>
                </View>
                <ScrollView >
                    <View style={styles.scrol}>
                        <Text style={{
                            fontSize: 22,
                            color: 'black'
                        }}>
                            h2
                    </Text>
                    </View>
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
    }, scrol: {
        minWidth: '100%',
        minHeight: '90%',
        flex: 1
    }
});