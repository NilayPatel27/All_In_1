import React, { useState } from "react";
import { Button, FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import Modal from "react-native-modal";
import { SearchBar } from 'react-native-elements';
import filter from 'lodash.filter'
import Rarrow from './right-arrow.png'

const ModelPop = ({ navigation }) => {
    const [filterData, setfilterData] = useState(listArray = [
        {
            title: 'Surat',
            Active: 10,
            InActive: 1
        },
        {
            title: 'Ahemdabad',
            Active: 1,
            InActive: 10
        },
        {
            title: 'Aanand',
            Active: 9,
            InActive: 2
        },
        {
            title: 'Gandhinagar',
            Active: 8,
            InActive: 3
        },
        {
            title: 'Vadodara',
            Active: 7,
            InActive: 4
        },
        {
            title: 'Fifth',
            Active: 6,
            InActive: 5
        }
    ]);
    const [masterData, setmasterData] = useState(listArray = [
        {
            title: 'First',
            Active: 10,
            InActive: 1
        },
        {
            title: 'First',
            Active: 1,
            InActive: 10
        },
        {
            title: 'Second',
            Active: 9,
            InActive: 2
        },
        {
            title: 'Third',
            Active: 8,
            InActive: 3
        },
        {
            title: 'Fourth',
            Active: 7,
            InActive: 4
        },
        {
            title: 'Fifth',
            Active: 6,
            InActive: 5
        }
    ]);
    const [search, setsearch] = useState('')

    const [Visible, setVisible] = useState(false);

    const toggle = () => {
        setVisible(!Visible);
    };
    // const [sort, setsort] = useState(listArray = [
    //     {
    //         title: 'First',
    //         Active: 10,
    //         InActive: 1
    //     },
    //     {
    //         title: 'Second',
    //         Active: 9,
    //         InActive: 2
    //     },
    //     {
    //         title: 'Third',
    //         Active: 8,
    //         InActive: 3
    //     },
    //     {
    //         title: 'Fourth',
    //         Active: 7,
    //         InActive: 4
    //     },
    //     {
    //         title: 'Fifth',
    //         Active: 6,
    //         InActive: 5
    //     }
    // ])

    const sortByActive = () => {
        const sorted = [...filterData].sort((a, b) => {
            return a.Active - b.Active;
        });
        setfilterData(sorted);
        setVisible(!Visible);

    };
    const sortByInActive = () => {
        const revsorted = [...filterData].sort((a, b) => {
            return a.InActive - b.InActive;
        });
        setfilterData(revsorted);
        setVisible(!Visible);
    };
    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setfilterData(newData);
            setsearch(text);
        }
        else {
            setfilterData(masterData);
            setsearch(text);
        }
    }

    const Item = ({ title, Active, InActive, index }) => {
        let colors = [ '#CEFA05'];
        let state = ['Online', 'Offline'];

        
        return (
            <View style={[styles.renderItemStyle, { backgroundColor: '#ffffe0' }]}>
                <View style={styles.riv}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'black', marginBottom: 20, fontWeight: '600' }}>{title}</Text>
                        <Text style={{ color: (index % state.length?'red':'green'), marginBottom: 20, fontWeight: '600' }}>{state[index % state.length]}</Text>
                        {/* {console.log(index % state.length?'green':'red")} */}
                    </View>
                    <Divider width={1} />
                    <Text style={{ color: 'green', marginTop: 10, fontWeight: '400' }}>Active : {Active}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 40 }}>
                        <Text style={{ color: 'red', fontWeight: '400' }}>InActive : {InActive}</Text>
                        <TouchableOpacity>
                        <Image source={require('./right-arrow.png')} style={{height:25,width:25}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        )
    };

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Item
                    title={item.title}
                    index={index}
                    onPress={hello => console.log(hello)}
                    Active={item.Active}
                    InActive={item.InActive}
                />
            </View>
        )
    };

    return (
        <>
        {/* #075E54 */}
            <StatusBar animated={true} backgroundColor="#93C572" barStyle={'light-content'} />
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <View style={{ backgroundColor: "#93C572", flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', height: 60, borderBottomStartRadius: 20, borderBottomEndRadius: 20 }}>
                    <Image source={{ uri: "https://img.icons8.com/ios/50/000000/circled-left-2.png" }} style={{ height: 30, width: 30, marginLeft: 10 }} />
                    <Text style={{ color: 'white', flexDirection: 'row', fontWeight: '600', fontSize: 20 }}>Device List</Text>
                    <Image source={{ uri: "https://img.icons8.com/windows/32/000000/plus.png" }} style={{ height: 30, width: 30, marginRight: 10 }} />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 40, width: "85%", justifyContent: 'space-between', backgroundColor: 'white' }}>
                    <View style={{ width: "90%" }}>
                        <TextInput
                            style={styles.textInputStyle}
                            value={search}
                            placeholder="Search here"
                            placeholderTextColor="black"
                            onChangeText={(text) => searchFilter(text)}
                        >

                        </TextInput>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={toggle}>
                            <Image source={{ uri: 'https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-sort-arrows-dreamstale-lineal-dreamstale-4.png' }}
                                style={{ height: 30, width: 30 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Divider width={1} style={{ marginTop: 20 }} />
                <FlatList
                    data={!Visible ? filterData : masterData}
                    // filterData
                    keyExtractor={(renderItem, index) => index}
                    renderItem={renderItem}
                />
                <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginRight: 20, marginTop: 30 }}>
                    <Modal isVisible={Visible}
                        animationType={"slide"}
                        transparent={true}
                        onRequestClose={() => { setVisible(false); }}>
                        <View style={{ flex: 0.3, flexDirection: 'row', backgroundColor: 'white', justifyContent: "flex-start", alignItems: 'flex-start', borderRadius: 20, width: "100%" }}>
                            <View style={{ flexDirection: "column", justifyContent: 'space-between', marginTop: 35, marginLeft: 40, width: "75%" }}>
                                <Text style={{ color: 'red', marginBottom: 20, fontWeight: '600' }}>FILTER BY</Text>
                                <Divider width={1} />
                                <TouchableOpacity onPress={sortByActive} style={{ width: "100%" }}>
                                    <Text style={{ color: 'black', marginTop: 10, fontWeight: '400' }}>Active</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={sortByInActive} style={{ width: "100%" }}>
                                    <Text style={{ color: 'black', marginTop: 40, fontWeight: '400' }}>InActive</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    item: {
        paddingVertical: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        borderRadius: 6
    },
    title: {
        fontSize: 18,
        marginLeft: 20,
        justifyContent: "center",
        alignItems: 'center',
    },
    textInputStyle: {
        height: 50,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 15
    },
    renderItemStyle: {
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        borderRadius: 20,
        width: "80%",
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,

    },
    riv: {
        flexDirection: "column",
        justifyContent: 'space-between',
        marginTop: 15,
        marginLeft: 40,
        marginBottom: 30,
        width: "75%"
    },

});

export default ModelPop;