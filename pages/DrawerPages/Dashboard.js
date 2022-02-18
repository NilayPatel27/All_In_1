import * as React from 'react';
import { useState } from 'react';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { StyleSheet, Text, View, TouchableWithoutFeedback, FlatList, StatusBar, Image } from 'react-native';
import Search from '../../assates/svg/Search.svg';
import Dot from '../../assates/svg/Dot.svg';
import Menu from '../../assates/svg/menu.svg';
import Wifi from '../../assates/svg/WifiGateway.svg';
import Server from '../../assates/svg/Server.svg';
import Mobile from '../../assates/svg/Mobile.svg';

let indexValues = [];

const Dashboard = ({ navigation }) => {
    const [filterData, setfilterData] = useState(
        (listArray = [
            {
                title: 'GATEWAYS',
                Active: 10,
                InActive: 1,
                Mac_ID: '8b:f2:5e:f7:83:dc',
            },
            {
                title: 'DEVICES',
                Active: 1,
                InActive: 10,
                Mac_ID: '6e:b7:32:d4:27:4a',
            },
            {
                title: 'TEMPLATES',
                Active: 9,
                InActive: 2,
                Mac_ID: '5c:da:a5:76:b5:d0',
            }
        ]),
    );

    const Item = ({ index, Mac_ID, navigation, title, Active, InActive }) => {
        let state = ['Online', 'Offline'];
        let send = ['sent', 'notsent'];

        return (
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-evenly", backgroundColor: 'white' }}>
                {indexValues.indexOf(index) == -1 ? null
                    : <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
                        <Dot width={15} height={15} />
                    </View>}
                <View style={[styles.renderItemStyle, { width: indexValues.indexOf(index) == -1 ? '90%' : '75%' }]}>
                    <View style={{ backgroundColor: '#335252', width: '100%', borderTopRightRadius: 10, borderTopLeftRadius: 10, flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginVertical: 10, paddingHorizontal: 20, alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: '400', fontSize: 18 }}>{title}</Text>
                            {index === 0
                                ? <Wifi width={20} height={20} />
                                : index === 1 ? <Mobile width={25} height={25} /> : <Server width={20} height={20} />}
                        </View>
                    </View>
                    <Divider width={1} orientation='vertical' />
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            width: '100%',
                            backgroundColor: 'white',
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10
                        }}>
                        <View style={styles.riv}>
                            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                                <Image source={{ uri: 'https://img.icons8.com/emoji/48/000000/green-circle-emoji.png' }} style={{ height: 20, width: 20 }} />
                                <Text style={{ color: '#2D333A', fontWeight: '400', position: 'absolute', left: '10%' }}>Active</Text>
                                <Text style={{ color: '#2D333A', fontWeight: '400', position: 'absolute', left: '45%' }}>:</Text>
                                <Text style={{ color: '#2D333A', fontWeight: '400', position: 'absolute', left: '55%' }}>{Active}</Text>
                            </View>
                            <View style={{ marginTop: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                                <Image source={{ uri: 'https://img.icons8.com/emoji/48/000000/red-circle-emoji.png' }} style={{ height: 20, width: 20 }} />
                                <Text style={{ color: '#2D333A', fontWeight: '400', position: 'absolute', left: '10%' }}>Inactive</Text>
                                <Text style={{ color: '#2D333A', fontWeight: '400', position: 'absolute', left: '45%' }}>:</Text>
                                <Text style={{ color: '#2D333A', fontWeight: '400', position: 'absolute', left: '55%' }}>{InActive}</Text>
                            </View>
                        </View>
                        <View style={{ position: 'absolute', bottom: 0, right: 0, width: '25%', height: '40%' }}>
                            {index === 0 ? <TouchableWithoutFeedback onPress={() => { navigation.navigate('Profile') }} >
                                <View style={{ height: 20, backgroundColor: '#335252', height: '100%', borderBottomRightRadius: 10, borderTopLeftRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>ADD +</Text>
                                </View>
                            </TouchableWithoutFeedback> : index === 1 ? <TouchableWithoutFeedback onPress={() => { navigation.navigate('My Devices') }} >
                                <View style={{ height: 20, backgroundColor: '#335252', height: '100%', borderBottomRightRadius: 10, borderTopLeftRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>ADD +</Text>
                                </View>
                            </TouchableWithoutFeedback> : <TouchableWithoutFeedback onPress={() => { navigation.navigate('Templates') }} >
                                <View style={{ height: 20, backgroundColor: '#335252', height: '100%', borderBottomRightRadius: 10, borderTopLeftRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>ADD +</Text>
                                </View>
                            </TouchableWithoutFeedback>}
                        </View>
                    </View>
                </View>
            </View>
        );
    };
    const renderItem = ({ item, index }) => {
        return (
            <>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Item
                        index={index}
                        title={item.title}
                        Active={item.Active}
                        Mac_ID={item.Mac_ID}
                        navigation={navigation}
                        InActive={item.InActive}
                        indexValues={indexValues}
                    />
                </View>
            </>
        );
    };
    return (
        <>
            <StatusBar
                animated={true}
                backgroundColor="#335252"
                barStyle={'light-content'}
            />
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <View
                    // #93C572
                    style={{
                        backgroundColor: '#335252',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 60,
                        borderBottomStartRadius: 20,
                        borderBottomEndRadius: 20,
                        width: '100%'
                    }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignItems: 'center' }}>
                        <Menu width={25} height={25} fill={"#fff"} onPress={() => navigation.openDrawer()} />
                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 20 }}>John Doe</Text>
                        <Search width={18} height={18} />
                    </View>
                </View>
                <FlatList
                    data={filterData}
                    keyExtractor={(renderItem, index) => index}
                    renderItem={renderItem}
                />
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    item: {
        paddingVertical: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        borderRadius: 6,
    },
    title: {
        fontSize: 18,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        // margin: 5,
        borderColor: '#009688',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 20,
        width: '85%'
    },
    renderItemStyle: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        backgroundColor: 'white',
    },
    riv: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        width: '80%',
        alignItems: 'flex-start',
        // backgroundColor:'pink'
    },
});

export default Dashboard