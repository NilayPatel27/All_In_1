import * as React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import { useLayoutEffect } from 'react'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { MenuProvider } from 'react-native-popup-menu';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CustomSideMenU from './CustomSideMenu';
// import ThemeManager, { useTheme } from './theme'
// import styled from 'styled-components'
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'react-native';
import { useState } from 'react';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import Modal from 'react-native-modal';
import { Chip } from 'react-native-paper';
// import Chip from '@mui/material/Chip';
import Comp from './Comp'

const stack = createStackNavigator();
const activity = createStackNavigator();

const Floor1 = ({ navigation }) => {
    const [filterData, setfilterData] = useState(
      (listArray = [
        {
          title: '1st Floor GW 01',
          Active: 10,
          InActive: 1,
        },
        {
          title: '2nd Floor GW 02',
          Active: 1,
          InActive: 10,
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
          title: 'sth Floor GW 05',
          Active: 7,
          InActive: 4,
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
          Active: 1,
          InActive: 10,
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
          title: 'sth Floor GW 05',
          Active: 7,
          InActive: 4,
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
  
    let long = 0;
    let count = 0;
  
    const [show, setshow] = useState(0);
  
    const Item = ({ Active, InActive, index }) => {
      // let colors = ['#CEFA05'];
      let state = ['Online', 'Offline'];
      let send = ['sent', 'notsent'];
  
      const [Index, setIndex] = useState(0);
  
      const onLongPressButton = () => {
        long = 1;
        setIndex(1);
        count = count + 1;
        console.log(index + 'selected');
        setshow(1);
      };
      const onPress = () => {
        if (long === 1) {
          if (Index === 0) {
            setIndex(1);
            count = count + 1;
            console.log(index + 'selected' + count);
  
          } else {
            setIndex(0);
            count = count - 1;
            console.log(index + 'unselected' + count);
            if (count === 0) {
              long = 0;
              setshow(0);
            }
          }
        };
      }
      let leng = filterData.length
      return (
        // #ffffe0
        <TouchableOpacity
          onLongPress={onLongPressButton}
          onPress={onPress}
          style={{ flexDirection: 'row', flex: 1 }}>
          <View
            style={[
              styles.renderItemStyle,
              {
                backgroundColor: 'white',
                borderWidth: Index === 0 ? 0 : 1,
                borderColor: Index === 0 ? 'white' : 'black',
              },
            ]}>
            <View style={styles.riv}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: '#05375a',
                    fontSize: 13,
                    fontWeight: '500',
                    marginTop: 8,
                  }}>
                  {/* {title} */}
                  Mac ID : 00:00:5e:00:53:af
                </Text>
                {/* <Text
                style={{
                  backgroundColor: index % state.length ? 'red' : 'green',
                  marginBottom: 20,
                  fontWeight: '600',
                  color: 'white',
                  borderRadius: 50,
                  fontSize: 10,
                  height: 15,
                  width: 40,
                  paddingLeft: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {state[index % state.length]}
              </Text> */}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}>
                  <Chip
                    siz="white"
                    style={{
                      backgroundColor: index % send.length ? 'red' : 'green',
                    }}>
                    <Text style={{ color: 'white' }}>
                      {state[index % state.length]}
                    </Text>
                  </Chip>
                </View>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                width: '100%',
              }}>
              <View
                style={{
                  backgroundColor: '#93C572',
                  borderBottomEndRadius: 20,
                  borderBottomLeftRadius: 20,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  // marginTop:20
                }}>
                <View
                  style={{
                    flexDirection: 'column',
                    marginBottom: 20,
                    marginTop: 20,
                    width: '80%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{ color: '#2D333A', fontWeight: '400' }}>
                      Last Accessed : {Active}
                    </Text>
                    <Text style={{ color: '#2D333A', fontWeight: '400' }}>
                      26/12/2020
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingTop: 10,
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{ color: '#2D333A', fontWeight: '400' }}>
                      InActive : {InActive}
                    </Text>
                    {/* <Text
                    style={{
                      backgroundColor: index % state.length ? 'red' : 'green',
                      marginBottom: 20,
                      fontWeight: '600',
                      color: 'white',
                      borderRadius: 50,
                      fontSize: 10,
                      height: 15,
                      width: 40,
                      paddingLeft: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>{send[index % send.length]}</Text> */}
                    <View style={{ height: 20, justifyContent: 'center' }}>
                      <Chip
                        style={{
                          backgroundColor:
                            index % send.length ? 'red' : '#1e90ff',
                        }}>
                        <Text style={{ color: 'white' }}>
                          {send[index % send.length]}
                        </Text>
                      </Chip>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
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
          backgroundColor="#93C572"
          barStyle={'light-content'}
        />
        <MenuProvider>
          <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View
              // #93C572
              style={{
                backgroundColor: '#93C572',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 60,
                borderBottomStartRadius: 20,
                borderBottomEndRadius: 20,
              }}>
              {/* <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={{
                    uri: 'https://img.icons8.com/metro/26/ffffff/circled-left-2.png',
                  }}
                  style={{ height: 30, width: 30, marginLeft: 10 }}
                />
              </TouchableOpacity> */}
              <Text
                style={{
                  color: 'white',
                  flexDirection: 'row',
                  fontWeight: '600',
                  fontSize: 20,
                  left: '40%',
                  
                }}>
                Floor
              </Text>
              <Image
                source={{
                  uri: 'https://img.icons8.com/external-others-royyan-wijaya/24/ffffff/external-interface-revamp-4-others-royyan-wijaya-2.png',
                }}
                style={{ height: 30, width: 30, marginRight: 10 }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginLeft: 40,
                width: '85%',
                justifyContent: 'space-between',
                backgroundColor: 'white',
              }}>
              <View style={{ width: '90%' }}>
                <TextInput
                  style={styles.textInputStyle}
                  value={search}
                  placeholder="Search here"
                  placeholderTextColor="black"
                  onChangeText={text => searchFilter(text)}></TextInput>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={toggle}>
                  <Image
                    source={{
                      uri: 'https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-sort-arrows-dreamstale-lineal-dreamstale-4.png',
                    }}
                    style={{ height: 30, width: 30 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Divider width={1} style={{ marginTop: 20 }} />
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 10,
              }}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '85%',
                }}>
                <Text
                  style={{
                    color: '#2d333a',
                    fontWeight: 'bold',
                    paddingLeft: 10,
                    fontSize: 20,
                  }}>
                  Surat
                </Text>
                <Menu onSelect={value => setselect(value)}>
                  <MenuTrigger>
                    <Image
                      source={{
                        uri: 'https://img.icons8.com/material-rounded/24/000000/menu-2.png',
                      }}
                      style={{ height: 30, width: 30 }}
                    />
                  </MenuTrigger>
                  <MenuOptions style={{ backgroundColor: 'white', height: 80 }}>
                    <MenuOption
                      value={1}
                      style={{ height: '50%', justifyContent: 'center' }}>
                      <Text style={{ color: '#2d333a', textAlign: 'center' }}>
                        Select All
                      </Text>
                    </MenuOption>
                    {/* <Divider width={1} /> */}
  
                    <MenuOption
                      value={0}
                      style={{ height: '50%', justifyContent: 'center' }}>
                      <Text style={{ color: '#2d333a', textAlign: 'center' }}>
                        Deselect All
                      </Text>
                    </MenuOption>
                  </MenuOptions>
                </Menu>
              </View>
            </View>
            <FlatList
              data={!Visible ? filterData : masterData}
              // filterData
              keyExtractor={(renderItem, index) => index}
              renderItem={renderItem}
            />
            <View
              style={{
                justifyContent: 'flex-end',
                flexDirection: 'row',
                marginRight: 20,
                marginTop: 30,
              }}>
              <Modal
                isVisible={Visible}
                animationType={'slide'}
                transparent={true}
                onRequestClose={() => {
                  setVisible(false);
                }}>
                <View
                  style={{
                    flex: 0.3,
                    flexDirection: 'row',
                    backgroundColor: 'rgba( 208, 2, 27, 0.8 )',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    borderRadius: 20,
                    width: '100%',
                  }}>
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      marginTop: 35,
                      marginLeft: 40,
                      width: '75%',
                    }}>
                    <Text
                      style={{ color: 'red', marginBottom: 20, fontWeight: '600' }}>
                      FILTER BY
                    </Text>
                    <Divider width={1} />
                    <TouchableOpacity
                      onPress={sortByActive}
                      style={{ width: '100%' }}>
                      <Text
                        style={{
                          color: 'black',
                          marginTop: 10,
                          fontWeight: '400',
                        }}>
                        Active
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={sortByInActive}
                      style={{ width: '100%' }}>
                      <Text
                        style={{
                          color: 'black',
                          marginTop: 40,
                          fontWeight: '400',
                        }}>
                        InActive
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </MenuProvider>
  
        {show===1 &&
          <View style={{flexDirection:'row',justifyContent:"center",alignItems:'center',position:'absolute',bottom:20,width:'100%'}}>
      <TouchableOpacity style={{flexDirection:'row',width:'100%',justifyContent:"center"}}>
      <View style={{backgroundColor:'red',flexDirection:'row',width:'80%',justifyContent:"center",borderRadius:10,padding:10}} >
          <Text style={{color:'white',fontSize:25}}>Choose Template</Text>
      </View>
          </TouchableOpacity>
      </View>
        }
            {/* <View style={{ position: 'absolute', bottom: 20, justifyContent: 'center', flexDirection: "row", width: '100%'}}>
              <View style={{ backgroundColor: 'black' }} >
                <Text style={{ color: 'white', fontSize: 25 }}>Choose Template</Text>
            </View>
          </View> */}
  
      </>
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
      height: 50,
      borderWidth: 1,
      paddingLeft: 20,
      margin: 5,
      borderColor: '#009688',
      backgroundColor: 'white',
      color: 'black',
      borderRadius: 15,
    },
    renderItemStyle: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      borderRadius: 20,
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
      marginTop: 15,
      marginLeft: 30,
      marginBottom: 20,
      width: '80%',
    },
  });


  export default Floor1;