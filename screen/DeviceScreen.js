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
import AsyncStorage from '@react-native-community/async-storage'
export default class DeviceScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isMounted: false
        }
    };

    _storeData = async () => {
        let obj = await AsyncStorage.getItem("Items")
        if (obj != null) {
            this.setState({
                items: JSON.parse(obj)
            }, () => {
                //console.log(this.state.items)
                this.setState({ isMounted: true })
            })
        }
    }

    componentDidMount() {
        //AsyncStorage.removeItem("Items");
        this._storeData();
    }

    buildView = () => {
        return (
            this.state.items.map((item, index) => {
                return (
                    <View style={styles.boxStyle} key={index}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{item.name}</Text>
                        <Text style={{ fontSize: 14 }}>{item.place}</Text>
                    </View>
                );
            })
        )
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.textHead}>Devices</Text>
                </View>
                <ScrollView style={{ minHeight: '70%' }}>
                    <View style={styles.scrol}>
                        {(() => {
                            if (this.state.isMounted == true) {
                                return (
                                    this.buildView()
                                )
                            }
                            return null
                        })()}
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewDeviceScreen')}>
                            <View style={styles.boxStyle1}>
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
        minWidth: '100%',
        minHeight: '90%',
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
        minHeight: '100%',
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 45,
        flexWrap: 'wrap',
    }, boxStyle: {
        borderWidth: 1,
        borderColor: 'black',
        minWidth: '40%',
        height: 180,
        textAlign: 'left',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    }, boxStyle1: {
        borderWidth: 1,
        borderColor: 'grey',
        minWidth: '40%',
        height: 180,
        textAlign: 'left',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    }
});