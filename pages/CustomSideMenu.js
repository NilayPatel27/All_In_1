import React, { useState } from 'react'
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import styled from 'styled-components'
import ThemeManager, { useTheme } from './theme'
import { NavigationContainer } from '@react-navigation/native'
import { useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFont from 'react-native-vector-icons/FontAwesome';
import Right from '../assates/svg/Right.svg';

const CustomSideMenu = (props) => {
    const scheme = useColorScheme();
    let text = scheme === 'dark' ? 'white' : 'black';
    let back = scheme === 'dark' ? 'black' : 'white';
    const [selectedId, setSelectedId] = useState(null);

    const listArray = [
        {
            // icon: "https://img.icons8.com/ios-filled/50/000000/user-male-circle.png",
            title: 'Dashboard'
        },
        {
            // icon: "https://img.icons8.com/ios-filled/50/000000/user-male-circle.png",
            title: 'Profile'
        },
        // {
        //     // icon: "https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/50/000000/external-message-strategy-kiranshastry-lineal-kiranshastry.png",
        //     title: 'Message'
        // },
        {
            // icon: "https://img.icons8.com/external-glyph-geotatah/64/000000/external-activity-business-incubator-glyph-glyph-geotatah.png",
            title: 'Gateway'
        },
        {
            // icon: "https://img.icons8.com/material-outlined/24/000000/list.png",
            title: 'My Devices'
        },
        {
            // icon: "https://img.icons8.com/material-outlined/24/000000/list.png",
            title: 'Templates'
        },
        {
            // icon: "https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/64/000000/external-report-medical-icongeek26-outline-colour-icongeek26.png",
            title: 'Axios'
        }
    ]
    const bottomList = [
        {
            // icon: "https://img.icons8.com/fluency/24/000000/opened-folder.png",
            title: 'Settings'
        },
        {
            // icon: "https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-setting-notifications-justicon-flat-justicon.png",
            title: 'Log Out'
        },
    ]

    const Item = ({ title, onPress, backgroundColor, color, index }) => (
        <TouchableOpacity style={[styles.item, { backgroundColor: backgroundColor }]}
            onPress={() => onPress(index)}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={[styles.title, { color: text }]}>{title}</Text>
                    <Right width={18} height={18} />
                </View>
            </View>
        </TouchableOpacity>
    );

    const renderItem = ({ item, index }) => {
        const backgroundColor = item.title === selectedId ? "#93C572" : back;
        const color = item.title === selectedId ? 'white' : 'black';
        return (
            <Item
                title={item.title}
                // icon={item.icon}
                index={index}
                onPress={(index) => {
                    setSelectedId(item.title);
                    props.navigation.navigate(props?.state?.routes[index].name);
                }}
                backgroundColor={backgroundColor}
                color={color}
            />
        )
    };

    return (
        <>
            <NavigationContainer independent={true} >
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.20, flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                        <Image source={{ uri: "https://img.icons8.com/office/40/000000/user.png" }}
                            style={{ height: 35, width: 35, borderRadius: 50, paddingTop: 50, paddingHorizontal: 20 }}
                        />
                        <Text style={{ color: text, fontWeight: 'bold', fontSize: 28, marginTop: 10, marginLeft: 10 }}>John Doe</Text>
                        {/* <HomeScreen/> */}
                    </View>
                    <Divider />

                    <View style={{ flex: 0.60 }}>
                        <FlatList
                            data={listArray}
                            renderItem={renderItem}
                            // keyExtractor={item => item.id}
                            key={Math.random().toString()}
                        />
                        <Divider />
                    </View>
                    <View style={{ flex: 0.25 }}>
                        <FlatList
                            data={bottomList}
                            renderItem={renderItem}
                            // keyExtractor={item => item.id}
                            key={Math.random().toString()}
                        />
                    </View>
                </View>
            </NavigationContainer>
        </>
    )
}
const styles = StyleSheet.create({
    item: {
        paddingVertical: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        paddingHorizontal: 10,
        flexDirection: 'row',
        borderRadius: 8
    },
    title: {
        fontSize: 18,
        justifyContent: "center",
        alignItems: 'center',
    },
});


export default CustomSideMenu
