import * as React from 'react';
import { useState, useRef } from 'react';
import Add from '../../assates/svg/Add.svg';
import Menu from '../../assates/svg/menu.svg';
import Sorting from '../../assates/svg/Sorting.svg';
import Active from '../../assates/svg/ActiveButton.svg';
import Inactive from '../../assates/svg/InactiveButton.svg';
import RBSheet from "react-native-raw-bottom-sheet";
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { Button, Image, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, StatusBar, useColorScheme, ScrollView, Dimensions } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
const windowHeight = Dimensions.get('window').height;

const Product = ({ navigation }) => {
    const [height, setheight] = useState(200);
    const refRBSheet = useRef();
    const refRBSheet1 = useRef();
    const scheme = useColorScheme();
    let text = scheme === 'dark' ? 'white' : '#2d333a';
    let back = scheme === 'dark' ? '#2d333a' : 'white';

    const [filterData, setfilterData] = useState(
        (listArray = [
            {
                title: '1st Floor GW 01',
                Active: 10,
                InActive: 1,
            },
            {
                title: '2nd Floor GW 02',
                Active: 0,
                InActive: 11,
            },
            {
                title: '3rd Floor GW 03',
                Active: 9,
                InActive: 2,
            },
            {
                title: '4th Floor GW 04',
                Active: 8,
                InActive: 3,
            },
            {
                title: '5th Floor GW 05',
                Active: 0,
                InActive: 11,
            },
            {
                title: '6th Floor GW 06',
                Active: 6,
                InActive: 5,
            },
        ]),
    );
    const [masterData, setmasterData] = useState(
        (listArray = [
            {
                title: '1st Floor GW 01',
                Active: 10,
                InActive: 1,
            },
            {
                title: '2nd Floor GW 02',
                Active: 0,
                InActive: 11,
            },
            {
                title: '3rd Floor GW 03',
                Active: 9,
                InActive: 2,
            },
            {
                title: '4th Floor GW 04',
                Active: 8,
                InActive: 3,
            },
            {
                title: '5th Floor GW 05',
                Active: 0,
                InActive: 11,
            },
            {
                title: '6th Floor GW 06',
                Active: 6,
                InActive: 5,
            },
        ]),
    );
    const [search, setsearch] = useState('');
    const [Visible, setVisible] = useState(false);

    const sortByActive = () => {
        const sorted = [...filterData].sort((a, b) => {
            return a.Active - b.Active;
        });
        setfilterData(sorted);
    };
    const sortByInActive = () => {
        const revsorted = [...filterData].sort((a, b) => {
            return a.InActive - b.InActive;
        });
        setfilterData(revsorted);
    };
    const searchFilter = text => {
        if (text) {
            const newData = masterData.filter(item => {
                const itemData = item.title
                    ? item.title.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setfilterData(newData);
            setsearch(text);
        } else {
            setfilterData(masterData);
            setsearch(text);
        }
    };
    const Item = ({ title, Active, InActive, index }) => {
        let colors = ['#CEFA05'];
        let state = ['Online', 'Offline'];
        let send = ['sent', 'notsent'];
        return (
            <View style={[styles.renderItemStyle, { backgroundColor: '#335252' }]}>
                <View
                    style={{
                        width: '100%',
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                    <View style={styles.riv}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                // marginBottom: 10,
                            }}>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                                {title}
                            </Text>
                        </View>

                        <Divider width={1} style={{ marginTop: 10 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '45%' }}>
                                <Image source={{ uri: 'https://img.icons8.com/emoji/48/000000/green-circle-emoji.png', }} style={{ height: 20, width: 20 }} />
                                <Text style={{ color: 'white', fontWeight: '400', marginLeft: 10 }}>Active</Text>
                                <Text style={{ color: 'white', fontWeight: '400' }}>:</Text>
                                <Text style={{ color: 'white', fontWeight: '400' }}>{Active}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '45%' }}>
                                <Image source={{ uri: 'https://img.icons8.com/emoji/48/000000/red-circle-emoji.png', }} style={{ height: 20, width: 20 }} />
                                <Text style={{ color: 'white', fontWeight: '400', marginLeft: 10 }}>InActive</Text>
                                <Text style={{ color: 'white', fontWeight: '400' }}>:</Text>
                                <Text style={{ color: 'white', fontWeight: '400' }}>{InActive}</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 10,
                                width: '100%',
                            }}>
                            <View
                                style={{
                                    height: 40,
                                    width: '45%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Button
                                    title="View Devices"
                                    color={'#5BC8AC'}
                                    onPress={() =>
                                        navigation.navigate('Floor1', {
                                            Name: title,
                                        })
                                    }
                                />
                            </View>
                            <View
                                style={{
                                    height: 40,
                                    width: '45%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Button
                                    title="View Details"
                                    color={'#FB6542'}
                                    onPress={() =>
                                        navigation.navigate('Model', {
                                            Name: title,
                                        })
                                    }
                                />
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            backgroundColor: Active == 0 ? 'red' : 'lightgreen',
                            height: 15,
                            width: 15,
                            borderTopRightRadius: 10,
                            borderBottomLeftRadius: 20,
                            position: 'absolute',
                            top: 0,
                            right: 0,
                        }}></View>
                </View>
            </View>
        );
    };
    const renderItem = ({ item, index, navigation }) => {
        return (
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Item
                    title={item.title}
                    index={index}
                    onPress={hello => console.log(hello)}
                    Active={item.Active}
                    InActive={item.InActive}
                    navigation={navigation}
                />
            </View>
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
                        <Menu width={25} height={25} onPress={() => navigation.openDrawer()} />
                        <Text
                            style={{
                                color: 'white',
                                flexDirection: 'row',
                                fontWeight: '600',
                                fontSize: 20,
                            }}>Gateway List</Text>
                        <Add width={25} height={25} onPress={() => refRBSheet1.current.open()} />
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 10,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white',
                    }}>
                    <View style={{ width: '90%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput
                            style={styles.textInputStyle}
                            value={search}
                            placeholder="Search here"
                            placeholderTextColor="black"
                            onChangeText={text => searchFilter(text)}></TextInput>
                        <Sorting width={22} height={22} onPress={() => refRBSheet.current.open()} />
                    </View>
                </View>
                <Divider width={1} style={{ marginTop: 10 }} />
                <FlatList
                    data={!Visible ? filterData : masterData}
                    // filterData
                    keyExtractor={(renderItem, index) => index}
                    renderItem={renderItem}
                />
                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={false}
                    customStyles={{
                        wrapper: {
                            backgroundColor: "transparent",
                            animationType: "fade",
                        },
                        draggableIcon: {
                            backgroundColor: "#1e90ff"
                        },
                    }}
                    closeOnPressMask={true}
                    height={200}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            width: '100%',
                            height: '100%',
                        }}>
                        <View
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                // marginTop: 35,
                                // marginLeft: 40,
                                width: '100%',
                                height: '70%',
                                backgroundColor: 'white',
                                padding: 20

                            }}>
                            <Text style={{ color: 'red', fontWeight: '600' }}>FILTER BY</Text>
                            <Divider width={1} style={{ marginVertical: 10 }} />
                            <TouchableOpacity
                                onPress={() => {
                                    sortByActive();
                                    refRBSheet.current.close()
                                }}
                                style={{ width: '100%', height: '50%' }}>
                                <Text style={{ color: 'black', marginTop: 10, fontWeight: '400' }}>Active</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    sortByInActive();
                                    refRBSheet.current.close();
                                }}
                                style={{ width: '100%', height: '50%' }}>
                                <Text
                                    style={{
                                        color: 'black',
                                        marginTop: 10,
                                        fontWeight: '400',
                                    }}>
                                    InActive
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </RBSheet>
                <RBSheet
                    ref={refRBSheet1}
                    closeOnDragDown={true}
                    closeOnPressMask={false}
                    closeOnPressBack={true}
                    customStyles={{
                        wrapper: {
                            backgroundColor: "transparent",
                            animationType: "fade",
                        },
                        draggableIcon: {
                           backgroundColor:'#1e90ff'
                        },
                    }}
                    closeOnPressMask={true}
                    height={200}
                >
                   
                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            width: '100%',
                            height: '100%',
                        }}>
                        <View
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                width: '100%',
                                height: '100%',
                                backgroundColor: back,
                                padding: 20

                            }}>
                            <ScrollView>
                                <Text style={{ color: 'red', fontWeight: '600' }}>Add Gateway</Text>
                                <Divider width={1} style={{ marginVertical: 10 }} />
                                <TextInput
                                    style={styles.input}
                                    autoCorrect={false}
                                    placeholder="Enter floor Name"
                                    placeholderTextColor={text}
                                    autoFocus={true}
                                    autoCapitalize="none"
                                    maxLength={25}
                                />
                            </ScrollView>
                        </View>
                    </View>
                </RBSheet>
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
    input: {
        height: 40,
        margin: 12,
        flexWrap: 'wrap',
        borderWidth: 1,
        padding: 10,
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
        width: '90%',
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    riv: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginVertical: 10,
        width: '80%'
    },
});

export default Product