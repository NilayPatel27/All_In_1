import * as React from 'react';
import Modal from 'react-native-modal';
import { useState, useEffect } from 'react';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, StatusBar, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Correct from '../assates/svg/correct2.svg';
import Back from '../assates/svg/BackWithoutCircle.svg';
import Search from '../assates/svg/Search.svg';
import Sorting from '../assates/svg/Sorting.svg';
import RBSheet from "react-native-raw-bottom-sheet";
import { useRef } from "react";



let { width } = Dimensions.get("window");
width = width - width * 0.1;
const height = width * 0.6;

export const Notification = ({ route, navigation }) => {
  const refRBSheet = useRef();

  const { selectedData, Name } = route.params;

  const [slideData, setslideData] = useState(
    (listArray = [
      {
        Name: 'Walter-Desktop',
        Processor: ' Intel Core i7-8750H',
        InstalledRAM: '16 GB',
        SystemType: '64-bit Operating System',
        Edition: 'Windows 10 Pro',
        Device_Size: '7.5"',
        username: 'Nilay',
      },
      {
        Name: 'Walter-Desktop',
        Processor: ' Intel Core i7-8750H',
        InstalledRAM: '16 GB',
        SystemType: '64-bit Operating System',
        Edition: 'Windows 10 Pro',
        Device_Size: '7.5"',
        username: 'Harshil',
      },
      {
        Name: 'Walter-Desktop',
        Processor: ' Intel Core i7-8750H',
        InstalledRAM: '16 GB',
        SystemType: '64-bit Operating System',
        Edition: 'Windows 10 Pro',
        Device_Size: '7.5"',
        username: 'Parth',
      },
      {
        Name: 'Walter-Desktop',
        Processor: ' Intel Core i7-8750H',
        InstalledRAM: '16 GB',
        SystemType: '64-bit Operating System',
        Edition: 'Windows 10 Pro',
        Device_Size: '7.5"',
        username: 'Rahul',
      },
      {
        Name: 'Walter-Desktop',
        Processor: ' Intel Core i7-8750H',
        InstalledRAM: '16 GB',
        SystemType: '64-bit Operating System',
        Edition: 'Windows 10 Pro',
        Device_Size: '7.5"',
        username: 'Darshan',
      },
      {
        Name: 'Walter-Desktop',
        Processor: ' Intel Core i7-8750H',
        InstalledRAM: '16 GB',
        SystemType: '64-bit Operating System',
        Edition: 'Windows 10 Pro',
        Device_Size: '7.5"',
        username: 'prathik',
      },
      {
        Name: 'Walter-Desktop',
        Processor: ' Intel Core i7-8750H',
        InstalledRAM: '16 GB',
        SystemType: '64-bit Operating System',
        Edition: 'Windows 10 Pro',
        Device_Size: '7.5"',
        username: 'Krunal',
      },

    ]),
  );

  const [slide, setslide] = useState(false);
  const ModalItem = ({ Name, DeviceSize, Username, index, Processor, InstalledRAM, SystemType, Edition }) => {
    // let colors = ['#CEFA05'];
    let state = ['Online', 'Offline'];
    let send = ['sent', 'notsent'];

    return (
      <View style={{
        flexDirection: 'column', width: '95%',
        justifyContent: 'space-evenly',
        alignItems: 'center', height: '100%',
        // backgroundColor:"white" 
      }}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--ywu8DSQn09VG7xRPpOfRBILoOnKaxh8LQ&usqp=CAU',
          }}
          style={{ height: '50%', width: '90%' }}
        />
        <Divider width={1} orientation='vertical' />

        <View style={{
          flexDirection: 'row', width: '100%',
        }}>
          <View style={{ width: '100%', flexDirection: 'row', backgroundColor: '#1e90ff', height: 150, borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: "100%" }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Name</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>{Name}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%" }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Device Size</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>{DeviceSize}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%" }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>username</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>{Username}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%" }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Processor</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>{Processor}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%" }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Installed RAM</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>{InstalledRAM}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%" }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>System Type</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>{SystemType}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%" }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Edition</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>{Edition}</Text>
              </View>
            </View>
          </View>

        </View>

      </View>
    );
  };
  const slideItem = ({ item, index, navigation }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width,
          height: 500,
          backgroundColor: '#2d333a',
          borderRadius: 10,
        }}>
        <ModalItem
          Name={item.Name}
          index={index}
          DeviceSize={item.Device_Size}
          Username={item.username}
          Processor={item.Processor}
          InstalledRAM={item.InstalledRAM}
          SystemType={item.SystemType}
          Edition={item.Edition}
          navigation={navigation}
        />
      </View>
    );
  };

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
  const [modelData, setmodelData] = useState([]);
  useEffect(() => {
    for (let i = 0; i < selectedData.length; i++) {
      modelData.push(listArray[selectedData[i]].Mac_ID);
    }
  }, []);

  const [search, setsearch] = useState('');
  const [Visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!Visible);
  };

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

  const [visible, setvisible] = useState(false)
  const [successful, setsuccessful] = useState(false)

  const Item = ({ Device_Size, index, Name, username }) => {
    // let colors = ['#CEFA05'];
    let state = ['Online', 'Offline'];
    let send = ['sent', 'notsent'];

    return (
      // #ffffe0
      <TouchableOpacity
        onPress={() => setvisible(true)}
        style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginVertical: 10, shadowColor: '#000',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          elevation: 10,
        }}>
          <View style={{ width: '100%', flexDirection: 'row', backgroundColor: '#283655', height: 150, borderRadius: 10, borderWidth: 1, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
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
              <Text style={{ color: 'white', fontWeight: 'bold' }}>{Name}</Text>
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
  const ModelItem = ({ Active, InActive, index }) => {
    return (
      <View style={{ flexDirection: 'column', justifyContent: "space-between", marginTop: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'white' }}>
          <Image
            source={{
              uri: 'https://img.icons8.com/emoji/48/000000/black-circle-emoji.png',
            }}
            style={{ height: 15, width: 15, marginLeft: 10 }}
          />
          <Text style={{ color: 'black', fontWeight: '400', justifyContent: 'center', alignItems: 'center', paddingLeft: 10 }}>
            Mac ID : {modelData[index]}
          </Text>
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
          Device_Size={item.Device_Size}
          username={item.username}
          navigation={navigation}
          Name={item.Name}
        />
      </View>
    );
  };
  const modelitem = ({ item, index, navigation }) => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ModelItem
          title={item.title}
          index={index}
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
            <Back width={18} height={18} onPress={() => navigation.goBack()} />
            <Text style={{ color: 'white', fontWeight: '600', fontSize: 20 }}>Choose Template</Text>
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
                fontSize: 20,
              }}>{Name}
            </Text>
            <IconEntypo.Button name="popup" solid style={{ backgroundColor: "white" }} size={25} color={'black'} onPress={() => { setslide(true) }}></IconEntypo.Button>

          </View>
        </View>
        <FlatList
          data={slideData}
          // keyExtractor={(renderItem, index) => index}
          renderItem={renderItem}
        />
        <Modal
          isVisible={visible}
          animationType={'slide'}
          transparent={true}
          onRequestClose={() => {
            setvisible(false);
          }}
          onBackdropPress={() => {
            setvisible(false);
          }}
        >
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
                backgroundColor: 'white'
              }}>
              <Text style={{ color: '#2d333a', marginBottom: 20, fontWeight: 'bold', fontSize: 15 }}>
                Are you sure you want to apply this template to this devices?
              </Text>
              <Divider width={1} />
              <FlatList
                data={modelData}
                // keyExtractor={( index) => index}
                renderItem={modelitem}
              />
              <View
                style={{
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                  marginRight: 20,
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
                      backgroundColor: 'white',
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
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  marginTop: 20
                }}>
                <TouchableOpacity
                  style={{ flexDirection: 'row', flex: 1, width: '100%', justifyContent: "center" }}
                  onPress={() => {
                    setvisible(false);
                    setsuccessful(true);
                  }}
                >
                  <View
                    style={{
                      backgroundColor: '#93C572',
                      width: '80%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 20,
                      padding: 8
                    }}>
                    <Text style={{ color: 'white', fontSize: 15 }}>Yes</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ flexDirection: 'row', flex: 1, width: '100%', justifyContent: "center" }}
                  onPress={() => { setvisible(false) }}
                >
                  <View
                    style={{
                      backgroundColor: '#93C572',
                      width: '80%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 20,
                      padding: 8
                    }}>
                    <Text style={{ color: 'white', fontSize: 15 }}>No</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          isVisible={successful}
          animationType={'slide'}
          transparent={true}
          onRequestClose={() => {
            setsuccessful(false);
          }}
          onBackdropPress={() => {
            setsuccessful(false);
          }}
        >
          <View
            style={{
              flexDirection: 'column',
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              width: '100%',
              paddingBottom: 20,
              paddingTop: 20,
              backgroundColor: 'white'
            }}>
            <Correct width={50} height={50} />

            <Text style={{ color: '#2d333a', fontWeight: 'bold', marginTop: 15 }}>Change request sent</Text>
            <Text style={{ color: 'green', fontWeight: 'bold', marginTop: 5 }}>Successfully</Text>
          </View>
        </Modal>
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
        <Modal
          isVisible={slide}
          animationType={'slide'}
          transparent={true}
          onRequestClose={() => {
            setslide(false);
          }}
          onBackdropPress={() => {
            setslide(false);
          }}
        >
          <View style={{ height: "100%", alignItems: 'center', flexDirection: 'row', justifyContent: "center" }}>
            <FlatList
              data={slideData}
              renderItem={slideItem}
              horizontal={true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </Modal>
      </View>
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

export default Notification;
