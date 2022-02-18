import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { Image } from 'react-native';
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    Pressable,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Back from '.././assates/svg/BackWithoutCircle.svg';
import Add from '.././assates/svg/Add.svg';

const Model = ({ route, navigation }) => {
    const { Name } = route.params;
    let memoryUsage = 220;
    let diskUsage = 1450;
    let cpuUsage = 1250;
    let actualValue = 7676;

    let percentageMemory = (memoryUsage / actualValue);
    let percentageDisk = (diskUsage / actualValue);
    let percentageCpu = (cpuUsage / actualValue);


    return (
        <>
            <StatusBar
                animated={true}
                backgroundColor="#5BC8AC"
                barStyle={'dark-content'}
            />
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View
                    // #93C572
                    style={{
                        backgroundColor: '#5BC8AC',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 60,
                        borderBottomStartRadius: 20,
                        borderBottomEndRadius: 20,
                    }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignItems: 'center' }}>
                        <Back width={18} height={18} onPress={() => navigation.goBack()} />
                        <Text style={{ color: 'white', flexDirection: 'row', fontWeight: '600', fontSize: 20, }}>Gateway Details</Text>
                        <Add width={25} height={25} />
                        
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginTop: 30, alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: "#2d333a" }}>{Name}</Text>
                    <View style={{ backgroundColor: '#93C572', borderRadius: 20, justifyContent: 'center', width: '20%', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, color: 'white' }}>Online</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, alignItems: 'center' }}>
                    <Text style={{ color: "#2d333a", fontSize: 12 }}>GW1RESINNRICH/1000000B3KS45M</Text>
                </View>
                <View style={{ flexDirection: 'column', marginHorizontal: 15, marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                        <Text style={styles.textStyles}>Host Name</Text>
                        <Text style={styles.textStyles}>GW1RESINNRICH</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                        <Text style={styles.textStyles}>MAC Address</Text>
                        <Text style={styles.textStyles}>E4:5F:01:SA:S6:A9</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                        <Text style={styles.textStyles}>Operating System</Text>
                        <Text style={styles.textStyles}>Linux Debian 10.2</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                        <Text style={styles.textStyles}>Hardware</Text>
                        <Text style={styles.textStyles}>Pi4 Model B</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                            <Text style={styles.textStyles}>Memory Usage</Text>
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.textStyles}>{memoryUsage}/{actualValue} MB</Text>
                                <Text style={styles.textStyles}>{percentageMemory.toFixed(2)}%</Text>
                            </View>
                            <Progress.Bar progress={percentageMemory} width={150} borderWidth={1} borderColor={'black'} color={'red'} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                            <Text style={styles.textStyles}>Disk Usage</Text>
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.textStyles}>{diskUsage}/{actualValue} MB</Text>
                                <Text style={styles.textStyles}>{percentageDisk.toFixed(2)}%</Text>
                            </View>
                            <Progress.Bar progress={percentageDisk} width={150} borderWidth={1} borderColor={'black'} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                            <Text style={styles.textStyles}>CPU Usage</Text>
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.textStyles}>{cpuUsage}/{actualValue} MB</Text>
                                <Text style={styles.textStyles}>{percentageCpu.toFixed(2)}%</Text>
                            </View>
                            <Progress.Bar progress={percentageCpu} width={150} borderWidth={1} borderColor={'black'} color={'blue'} />
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    textStyles: {
        color: "#2d333a",
    }
});
export default Model;
{/* <View
style={{
    justifyContent: 'center',
    flexDirection: 'row',
    
}}>
<Modal
    isVisible={modalVisible}
    animationType={'slide'}
    transparent={true}
    onRequestClose={() => {
        setVisible(false);
    }}>
    <View
        style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            width: '100%',
        }}>
        <View
            style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginTop: 35,
                width: '75%',
                marginBottom: 20,
                backgroundColor:'white'
            }}>
            <Text style={{ color: '#2d333a', marginBottom: 20, color:"#2d333a",fontSize:15 }}>
                Are you sure you want to apply this template to this devices?
            </Text>
            <Divider width={1} />
                <ScrollView>
                    <View style={{ flexDirection: 'column', justifyContent: "space-between",marginTop:20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start',alignItems:'center',backgroundColor:'white' }}>
                            <Image
                                source={{
                                    uri: 'https://img.icons8.com/emoji/48/000000/black-circle-emoji.png',
                                }}
                                style={{ height: 15, width: 15, marginLeft: 10 }}
                            />
                            <Text style={{ color: 'black', fontWeight: '400',justifyContent:'center',alignItems:'center',paddingLeft:10 }}>
                                Mac ID : 00:00:5e:00:53:af
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start',alignItems:'center' }}>
                            <Image
                                source={{
                                    uri: 'https://img.icons8.com/emoji/48/000000/black-circle-emoji.png',
                                }}
                                style={{ height: 15, width: 15, marginLeft: 10 }}
                            />
                            <Text style={{ color: 'black', fontWeight: '400',justifyContent:'center',alignItems:'center',paddingLeft:10 }}>
                                Mac ID : 00:00:5e:00:53:af
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start',alignItems:'center' }}>
                            <Image
                                source={{
                                    uri: 'https://img.icons8.com/emoji/48/000000/black-circle-emoji.png',
                                }}
                                style={{ height: 15, width: 15, marginLeft: 10 }}
                            />
                            <Text style={{ color: 'black', fontWeight: '400',justifyContent:'center',alignItems:'center',paddingLeft:10 }}>
                                Mac ID : 00:00:5e:00:53:af
                            </Text>
                        </View>
                        
                    </View>
                </ScrollView>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        marginTop: 20
                    }}>
                    <View
                        style={{
                            backgroundColor: '#93C572',
                            width: '40%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 20,
                            padding: 8
                        }}>
                        <Text style={{ color: 'white', fontSize: 15 }}>Yes</Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: '#93C572',
                            width: '40%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 20,
                            padding: 8
                        }}>
                        <Text style={{ color: 'white', fontSize: 15 }}>No</Text>
                    </View>
                </View>
        </View>
    </View>
</Modal>
</View> */}

{/* <View
style={{
    justifyContent: 'center',
    flexDirection: 'row',
}}>
<Modal
    isVisible={modalVisible}
    animationType={'slide'}
    transparent={true}
    onRequestClose={() => {
        setVisible(false);
    }}>
    <View
        style={{
            flexDirection: 'column',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            width: '100%',
            paddingBottom:20,
            paddingTop:20,
            backgroundColor:'white'
        }}>
       <Image
    source={require('../pages/success.png')}
    resizeMode="contain"
    style={{
      width: 70,
      height: 70,
    }}
  />
  <Text style={{color:'#2d333a',fontWeight:'bold',marginTop:15}}>Change request sent</Text>
  <Text style={{color:'green',fontWeight:'bold',marginTop:5}}>Successfully</Text>
    </View>
</Modal>
</View> */}

{/* <View
style={{
    justifyContent: 'center',
    flexDirection: 'row',
}}>
<Modal
    isVisible={modalVisible}
    animationType={'slide'}
    transparent={true}
    onRequestClose={() => {
        setVisible(false);
    }}>
    <View
        style={{
            flexDirection: 'column',
            backgroundColor: 'white',
            justifyContent: 'flex-start',
            alignItems:'center',
            borderRadius: 20,
            width: '100%',
            paddingBottom: 20,
            paddingTop: 20,
            backgroundColor: 'white',
        }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' ,backgroundColor:'gray',width:'90%'}}>
            <Image
                source={require('../pages/computer.png')}
                resizeMode="contain"
                style={{
                    width: 35,
                    height: 35,
                }}
            />
            <Text style={{ color: 'white', color:"#2d333a", paddingLeft: 20 }}>Open Remote Terminal</Text>
        </View>
            <View style={{marginBottom:20   }}><Text>This feature is not available</Text></View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' ,backgroundColor:'green',marginBottom:30,width:'90%'}}>
            <Image
                source={require('../pages/menu.png')}
                resizeMode="contain"
                style={{
                    width: 35,
                    height: 35,
                }}
            />
            <Text style={{ color: 'white', color:"#2d333a", paddingLeft: 20 }}>Show Running Programs</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' ,backgroundColor:'yellow',width:'90%'}}>
            <Image
                source={require('../pages/cic.png')}
                resizeMode="contain"
                style={{
                    width: 35,
                    height: 35,
                }}
            />
            <Text style={{ color: 'black', color:"#2d333a", paddingLeft: 20 }}>Successfully</Text>
        </View>
    </View>
</Modal>
</View> */}