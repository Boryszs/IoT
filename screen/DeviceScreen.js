import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button, 
    TouchableOpacity,
    Image
} from 'react-native';
export default class DeviceScreen extends Component {
    constructor(props) {
        super(props);
        state = {
        }
               
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.textHead}>Devices</Text>
                </View>
                <ScrollView>
                <View style={styles.scrol}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('NewDeviceScreen')}>
                        <View style={styles.boxStyle}>
                            <Image source={require('../assets/plus.png')} style={styles.imageStyle}></Image>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('NewDeviceScreen')}>
                        <View style={styles.boxStyle}>
                            <Image source={require('../assets/plus.png')} style={styles.imageStyle}></Image>
                        </View>
                    </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
                
        );
    }

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        borderColor: 'black',
        borderWidth: 2
    }, head: {
        width: '100%',
        height: '10%',
        borderBottomColor: 'black',
        borderBottomWidth: 2
    }, textHead: {
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center'
    }, scrol: {
        height: '100%', 
        width: '100%', 
        flexDirection: 'row',
        marginTop:40
    },
    boxStyle:{
        borderWidth: 1, 
        borderColor:'grey',
        minWidth: '40%', 
        height: 180, 
        textAlign: 'left',
        alignItems:'center',
        justifyContent:'center',
        margin:20,
    }
});