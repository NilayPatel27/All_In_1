import * as React from 'react';
import { useState } from 'react';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, StatusBar, BackHandler } from 'react-native';
import Snackbar from 'react-native-snackbar';
import Back from '../../assates/svg/BackWithoutCircle.svg';
import Search from '../../assates/svg/Search.svg';
import MenuButton from '../../assates/svg/MenuButton.svg';
import Sorting from '../../assates/svg/Sorting.svg';
import Dot from '../../assates/svg/Dot.svg';
import RBSheet from "react-native-raw-bottom-sheet";
import { useRef, useEffect } from "react";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

let indexValues = [];
let long = 0;
let count = 0;
let SnackBar = 0;

const Floor1 = ({ route, navigation }) => {

  // const handleBackButtonClick = () => {
  //   indexValues = [];
  //   Snackbar.dismiss();
  //   long = 0;
  //   count = 0;
  //   SnackBar = 0;
  // }
  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
  //   return () => {
  //     BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
  //   };
  // }, []);
  const [CurrentDate, setCurrentData] = useState('');

  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    setCurrentData(date + '/' + month + '/' + year);

  }, []);
  const refRBSheet = useRef();
  const { Name } = route.params;

  const [filterData, setfilterData] = useState(
    (listArray = [
      {
        title: '1st Floor GW 01',
        Active: 10,
        InActive: 1,
        Mac_ID: '8b:f2:5e:f7:83:dc',

      },
      {
        title: '2nd Floor GW 02',
        Active: 1,
        InActive: 10,
        Mac_ID: '6e:b7:32:d4:27:4a',
      },
      {
        title: '3rd Floor GW 03',
        Active: 9,
        InActive: 2,
        Mac_ID: '5c:da:a5:76:b5:d0',
      },
      {
        title: '4th Floor GW 04',
        Active: 8,
        InActive: 3,
        Mac_ID: '1c:60:63:31:88:3e',
      },
      {
        title: '5th Floor GW 05',
        Active: 7,
        InActive: 4,
        Mac_ID: 'c7:04:ff:a8:38:75',
      },
      {
        title: '6th Floor GW 06',
        Active: 6,
        InActive: 5,
        Mac_ID: '50:96:6b:d0:9b:b8',
      },
    ]),
  );
  const [masterData, setmasterData] = useState(
    (listArray = [
      {
        title: '1st Floor GW 01',
        Active: 10,
        InActive: 1,
        Mac_ID: '8b:f2:5e:f7:83:dc',

      },
      {
        title: '2nd Floor GW 02',
        Active: 1,
        InActive: 10,
        Mac_ID: '6e:b7:32:d4:27:4a',
      },
      {
        title: '3rd Floor GW 03',
        Active: 9,
        InActive: 2,
        Mac_ID: '5c:da:a5:76:b5:d0',
      },
      {
        title: '4th Floor GW 04',
        Active: 8,
        InActive: 3,
        Mac_ID: '1c:60:63:31:88:3e',
      },
      {
        title: '5th Floor GW 05',
        Active: 7,
        InActive: 4,
        Mac_ID: 'c7:04:ff:a8:38:75',
      },
      {
        title: '6th Floor GW 06',
        Active: 6,
        InActive: 5,
        Mac_ID: '50:96:6b:d0:9b:b8',
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
        const itemData = item.Mac_ID
          ? item.Mac_ID.toUpperCase()
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

  const [select, setselect] = useState(-1);

  const Item = ({ index, Mac_ID, navigation }) => {
    let state = ['Online', 'Offline'];
    let send = ['sent', 'notsent'];

    const [Index, setIndex] = useState(0);
    useEffect(() => {
      if (select == 1) {
        if (indexValues.indexOf(index) == -1) {
          indexValues.push(index);
        }
        count = filterData.length;
        long = 1;
        if (index == filterData.length - 1) {
          Snackbar.show({
            text: 'Choose Template',
            duration: Snackbar.LENGTH_INDEFINITE,
            action: {
              text: 'GO',
              textColor: 'green',
              onPress: () => {
                if (indexValues.length != 0) {
                  SnackBar = 1;
                  navigation.navigate('Notification', {
                    selectedData: indexValues,
                    Name: Name
                  })
                }
              },
            },
          })
        }
        setIndex(!Index);

      }
      if (select == 0) {
        indexValues = [];
        count = 0;
        long = 0;
        Snackbar.dismiss();
        setIndex(!Index);
      }

    }, []);

    const onLongPressButton = () => {

      let idx = indexValues.indexOf(index);
      long = 1;
      if (idx > -1) {
        indexValues.splice(idx, 1);
        count = count - 1;
        setIndex(!Index);
      }
      else {
        indexValues.push(index)
        count = count + 1;
        setIndex(!Index);
      }
      if (indexValues.length === 0) {
        long = 0;
        count = 0;
        SnackBar = 0;
        setselect(-1);
        Snackbar.dismiss();
      }

      if (long === 1 && count < 2 || SnackBar == 1) {
        Snackbar.show({
          text: 'Choose Template',
          duration: Snackbar.LENGTH_INDEFINITE,
          action: {
            text: 'GO',
            textColor: 'green',
            onPress: () => {
              if (indexValues.length != 0) {
                SnackBar = 1;
                navigation.navigate('Notification', {
                  selectedData: indexValues,
                  Name: Name
                })

              }
            },
          },
        })
      }
      if (select == 1) {
        setselect(-1);
      }
    };

    const onPress = () => {


      if (long === 1) {
        if (indexValues.indexOf(index) == -1) {
          count = count + 1;
          indexValues.push(index);
          setIndex(!Index);


        } else {
          let id = indexValues.indexOf(index);
          if (id > -1) {
            indexValues.splice(id, 1);
            count = count - 1;
            if (indexValues.length === 0) {
              long = 0;
              count = 0;
              SnackBar = 0;
              Snackbar.dismiss();
            }
          }
          setIndex(!Index);
        }
      };
      if (SnackBar == 1) {
        Snackbar.show({
          text: 'Choose Template',
          duration: Snackbar.LENGTH_INDEFINITE,
          action: {
            text: 'GO',
            textColor: 'green',
            onPress: () => {
              if (indexValues.length != 0) {
                SnackBar = 1;
                console.log('SnackBar' + SnackBar);
                navigation.navigate('Notification', {
                  selectedData: indexValues,
                  Name: Name
                })
              }
            },
          },
        })
        SnackBar = 0;
      }
      if (select == 1) {
        setselect(-1);
      }
    }
    return (
      // #ffffe0
      <TouchableWithoutFeedback
        onLongPress={onLongPressButton}
        onPress={onPress}>
        <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-evenly", backgroundColor: 'white' }}>
          {indexValues.indexOf(index) == -1 ? null
            : <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
              <Dot width={15} height={15} />
            </View>}
          <View style={[styles.renderItemStyle, { width: indexValues.indexOf(index) == -1 ? '90%' : '75%' }]}>
            <View style={{ backgroundColor: '#1e90ff', width: '100%', borderTopRightRadius: 10, borderTopLeftRadius: 10, flexDirection: 'row', justifyContent: 'center' }}>
              <View style={styles.riv}>
                <View style={{ marginTop: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                  <Text style={{ color: 'white', fontWeight: '400' }}>Mac ID</Text>
                  <Text style={{ color: 'white', fontWeight: '400', position: 'absolute', left: '45%' }}>:</Text>
                  <Text style={{ color: 'white', fontWeight: '400', position: 'absolute', left: '55%' }}>{Mac_ID}</Text>
                </View>
                <View style={{ marginTop: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                  <Text style={{ color: 'white', fontWeight: '400' }}>Date</Text>
                  <Text style={{ color: 'white', fontWeight: '400', position: 'absolute', left: '45%' }}>:</Text>
                  <Text style={{ color: 'white', fontWeight: '400', position: 'absolute', left: '55%' }}>08/02/2022</Text>
                </View>
              </View>
              <View style={{ backgroundColor: state[index % state.length] == 'Online' ? 'lightgreen' : 'red', height: 15, width: 15, borderTopRightRadius: 10, borderBottomLeftRadius: 20, position: 'absolute', top: 0, right: 0 }}>
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
                <View style={{ marginTop: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                  <Text style={{ color: '#2D333A', fontWeight: '400' }}>Last Accessed</Text>
                  <Text style={{ color: '#2D333A', fontWeight: '400', position: 'absolute', left: '45%' }}>:</Text>
                  <Text style={{ color: '#2D333A', fontWeight: '400', position: 'absolute', left: '55%' }}>{CurrentDate}</Text>
                </View>
                <View style={{ marginTop: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                  <Text style={{ color: '#2D333A', fontWeight: '400' }}>State</Text>
                  <Text style={{ color: '#2D333A', fontWeight: '400', position: 'absolute', left: '45%' }}>:</Text>
                  <Text style={{ color: '#2D333A', fontWeight: '400', position: 'absolute', left: '55%' }}>{state[index % send.length]}</Text>
                </View>
              </View>

              <View style={{ position: 'absolute', bottom: 0, right: 0, width: '25%', height: '40%' }}>
                <View style={{ height: 20, backgroundColor: '#1e90ff', height: '100%', borderBottomRightRadius: 10, borderTopLeftRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    {send[index % send.length]}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
            title={item.title}
            index={index}
            navigation={navigation}
            Mac_ID={item.Mac_ID}
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
      
      <MenuProvider>
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
              <Back width={18} height={18} onPress={() => { navigation.goBack(); indexValues = []; Snackbar.dismiss(); long = 0; count = 0; SnackBar = 0; }} />
              <Text style={{ color: 'white', fontWeight: '600', fontSize: 20 }}>{Name}</Text>
              <Search width={18} height={18} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              width: '100%',
              justifyContent: 'center',
              alignItems: "center",
              backgroundColor: 'white',
            }}>
            <View style={{ width: '90%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <TextInput
                style={styles.textInputStyle}
                value={search}
                placeholder="Search here"
                placeholderTextColor="black"
                onChangeText={text => searchFilter(text)}>
              </TextInput>
              <Sorting width={22} height={22} onPress={() => refRBSheet.current.open()} />
            </View>
          </View>
          <Divider width={1} style={{ marginTop: 10 }} />
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
                width: '90%',
              }}>
              <Text
                style={{
                  color: '#2d333a',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                {Name}
              </Text>
              <Menu onSelect={value => setselect(value)}>
                <MenuTrigger>
                  <MenuButton width={18} height={18} />

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
        </View>
      </MenuProvider>
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
export default Floor1;