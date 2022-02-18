import * as React from 'react';
import Modal from 'react-native-modal';
import { useState } from 'react';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, StatusBar, Dimensions } from 'react-native';


const Item = ({ Device_Size, index, username }) => {
    // let colors = ['#CEFA05'];
    let state = ['Online', 'Offline'];
    let send = ['sent', 'notsent'];

    return (
        // #ffffe0
        <TouchableOpacity
            onPress={() => { setslide(true) }}
            style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginVertical: 10, shadowColor: '#000',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                elevation: 10,
            }}>
                <View style={{ width: '100%', flexDirection: 'row', backgroundColor: '#335252', height: 150, borderRadius: 10, borderWidth: 1, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
                    <Image
                        source={{
                            uri: 'https://img.icons8.com/stickers/100/000000/console.png',
                        }}
                        style={{ height: 100, width: 100 }}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Name</Text>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Device Size</Text>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>username</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Name</Text>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>{Device_Size}</Text>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>{username}</Text>
                    </View>
                </View>
                <TouchableOpacity>

                    <View style={{ backgroundColor: 'lightgreen', height: 15, width: 15, borderTopRightRadius: 10, borderBottomLeftRadius: 20, position: 'absolute', top: 0, right: 0 }}>

                    </View>
                </TouchableOpacity>

            </View>
        </TouchableOpacity >
    );
};
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
        width: '85%',
        marginTop: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,


    },
    riv: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 10,
        marginLeft: 30,
        marginBottom: 10,
        width: '80%',
        // backgroundColor: 'blue',

    },
});

export default Item;