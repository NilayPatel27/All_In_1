import React from 'react'
import Modal from 'react-native-modal';
import { useState, useEffect } from 'react';
import Cross from '../assates/svg/Cross.svg';
import Snackbar from 'react-native-snackbar';
import MenuButton from '../assates/svg/MenuButton.svg';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';
import { View, Image, FlatList, TouchableWithoutFeedback, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'

let indexValues = [];
let long = 0;
let count = 0;
let SnackBar = 0;
const Home = ({ navigation }) => {

  const [USER, setUSER] = useState([
    {
      user: 'nilay._.patel',
    },
    {
      user: 'darshan',
    },
    {
      user: 'harshil',
    },
    {
      user: 'rahuulv23',
    },
    {
      user: 'nilay',
    },
    {
      user: 'nilay',
    },
    {
      user: 'darshan',
    },
    {
      user: 'harshil',
    },
    {
      user: 'rahul',
    },
    {
      user: 'nilay',
    }

  ]);
  const [NEWUSER, setNEWUSER] = useState([
    {
      user: 'nilay._.patel',
      image: "https://img.icons8.com/color/48/000000/user-male.png"
    },
    {
      user: 'darshan',
      image: "https://img.icons8.com/color/48/000000/user.png"
    },
    {
      user: 'harshil',
      image: "https://img.icons8.com/office/16/000000/user.png"
    },
    {
      user: 'rahuulv23',
      image: "https://img.icons8.com/clouds/100/000000/user.png"
    },
    {
      user: 'nilay',
      image: "https://img.icons8.com/color/48/000000/user-male.png"
    },
    {
      user: 'nilay',
      image: "https://img.icons8.com/color/48/000000/user-male.png"
    },
    {
      user: 'darshan',
      image: "https://img.icons8.com/color/48/000000/user.png"
    },
    {
      user: 'harshil',
      image: "https://img.icons8.com/office/16/000000/user.png"
    },
    {
      user: 'rahul',
      image: "https://img.icons8.com/clouds/100/000000/user.png"
    },
    {
      user: 'nilay',
      image: "https://img.icons8.com/color/48/000000/user-male.png"
    }

  ]);
  const [array, setarray] = useState([]);
  const [model, setModel] = useState(false);
  const [user, setuser] = useState('');
  const [DELETE, setDELETE] = useState(false);
  const [search, setsearch] = useState('');
  const [modelData, setmodelData] = useState([]);
  const [select, setselect] = useState(-1);

  const searchFilter = text => {
    if (text.trim()) {
      const newData = NEWUSER.filter(item => {
        const itemData = item.user
          ? item.user.trim().toUpperCase()
          : ''.toUpperCase();
        const textData = text.trim().toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setUSER(newData);
      setsearch(text);
    } else {
      setUSER(NEWUSER);
      setsearch(text);
    }
  };
  const addItem = () => {
    if (user.trim() !== '') {
      USER.unshift({
        user: user,
      })
      setModel(false);
    }
    setuser('');
  }
  const DELETEITEM = () => {
    modelData.length = 0;
    for (let i = 0; i < array.length; i++)
      modelData.push(USER[array[i]].user);
    setDELETE(true);
  }
  const deleteItem = () => {
    for (let i = 0; i < modelData.length; i++) {
      for (let j = 0; j < USER.length; j++) {
        if (USER[j].user === modelData[i]) {
          USER.splice(j, 1);
          break;
        }
      }
    }
    setDELETE(false);
    array.length = 0;
    indexValues.length = 0;
    modelData.length = 0;
    long = 0;
    count = 0;
  }
  const modelitem = ({ index }) => {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'black', fontWeight: '400', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>{modelData[index]}</Text>
      </View>
    );
  };
  const Item = ({ index, Name, navigation }) => {
    const [Index, setIndex] = useState(0);
    useEffect(() => {
      if (select == 1) {
        if (indexValues.indexOf(index) == -1) {
          indexValues.push(index);
        }
        count = USER.length;
        long = 1;
        // if (index == USER.length - 1) {
        //   Snackbar.show({
        //     text: 'Delete Item',
        //     duration: Snackbar.LENGTH_INDEFINITE,
        //     action: {
        //       text: 'DELETE',
        //       textColor: '#e90c59',
        //       onPress: () => {
        //         if (indexValues.length != 0) {
        //           SnackBar = 1;
        //         }
        //       },
        //     },
        //   })
        // }
        { indexValues.length == 0 ? setarray([]) : setarray(indexValues) }
        setIndex(!Index);
      }
      if (select == 0) {
        indexValues = [];
        count = 0;
        long = 0;
        Snackbar.dismiss();
        { indexValues.length == 0 ? setarray([]) : setarray(indexValues) }
        setselect(-1);
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

      // if (long === 1 && count < 2 || SnackBar == 1) {
      //   Snackbar.show({
      //     text: 'Delete Item',
      //     duration: Snackbar.LENGTH_INDEFINITE,
      //     action: {
      //       text: 'DELETE',
      //       textColor: '#e90c59',
      //       onPress: () => {
      //         if (indexValues.length != 0) {
      //           SnackBar = 1;
      //         }
      //       },
      //     },
      //   })
      // }
      if (select == 1) {
        setselect(-1);
      }
      { indexValues.length == 0 ? setarray([]) : setarray(indexValues) }
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
      }
      else {
        navigation.navigate('Customers', {
          Name: Name
        });
      }

      // if (SnackBar == 1) {
      //   Snackbar.show({
      //     text: 'Delete Item',
      //     duration: Snackbar.LENGTH_INDEFINITE,
      //     action: {
      //       text: 'DELETE',
      //       textColor: '#e90c59',
      //       onPress: () => {
      //         if (indexValues.length != 0) {
      //           SnackBar = 1;
      //           console.log('SnackBar' + SnackBar);
      //         }
      //       },
      //     },
      //   })
      //   SnackBar = 0;
      // }
      if (select == 1) {
        setselect(-1);
      }
      { indexValues.length == 0 ? setarray([]) : setarray(indexValues) }
    }
    return (
      // #ffffe0
      <TouchableWithoutFeedback onLongPress={onLongPressButton} onPress={onPress} >
        <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-evenly", backgroundColor: 'white' }}>
          <View key={index} style={[styles.listItem, { width: '85%' }]}>
            <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#000" }}>
              <Text style={styles.text}>{Name}</Text>
              {indexValues.indexOf(index) == -1 ? null
                : <View style={{ height: '100%', width: "100%", justifyContent: 'center', alignItems: 'center', position: 'absolute', right: '-48%', top: '-40%' }}>
                  <View style={{ height: 25, width: 25, backgroundColor: 'lightgreen', borderRadius: 50 }}></View>
                </View>}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  const renderItem = ({ item, navigation, index }) => {
    return (
      <>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Item
            index={index}
            Name={item.user}
            navigation={navigation}
          />
        </View>
      </>
    );
  };
  return (
    <>
      <MenuProvider>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <View style={styles.header}>
            <Text style={{ color: '#fff', fontSize: 30 }}>Customers List</Text>
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
                <MenuOption
                  value={0}
                  style={{ height: '50%', justifyContent: 'center' }}>
                  <Text style={{ color: '#2d333a', textAlign: 'center' }}>
                    Deselect All
                  </Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
            <TouchableOpacity style={{ top: '50%', position: 'absolute', right: '15%', height: "100%", justifyContent: "center" }} onPress={() => array.length == 0 ? setModel(true) : DELETEITEM()}>
              <Image source={array.length == 0 ? require('../assates/svg/Plus.png') : require('../assates/svg/Dustbin.png')} style={{ height: array.length == 0 ? 60 : 50, width: array.length == 0 ? 60 : 50 }} />
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', flexDirection: 'column', alignItems: 'center', paddingTop: 25, backgroundColor: '#fff' }}>
            <View style={{ width: '85%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
              <TextInput
                style={styles.textInputStyle}
                value={search}
                placeholder="Search Customer"
                placeholderTextColor="black"
                onChangeText={text => searchFilter(text)}
              >
              </TextInput>
              <Cross width={search != '' ? 15 : 0} height={search != '' ? 15 : 0} onPress={() => { searchFilter('') }} />
            </View>
            <View style={styles.Divider}>
              <Divider width={2} style={{ width: '85%' }} color={'pink'} />
            </View>
          </View>
          <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <FlatList
              data={USER}
              renderItem={({ item, index }) => renderItem({ navigation, item, index })}
            />
          </View>
        </View>
        <Modal
          isVisible={model}
          animationType={'slide'}
          transparent={true}
          onRequestClose={() => {
            setModel(false);
          }}
          onBackdropPress={() => {
            setModel(false);
          }}
        >
          <View style={styles.modelview}>
            <TextInput
              style={[styles.textInput, { width: '90%', marginLeft: 5 }]}
              placeholder="Customer Name"
              placeholderTextColor="#2d333a"
              onChangeText={(Name) => setuser(Name)}
              autoComplete={'off'}
            />
            <TouchableOpacity onPress={addItem} style={{ justifyContent: "center", flexDirection: "row" }}>
              <View style={styles.Add}>
                <Text style={{ color: "#fff", fontSize: 20 }}>ADD</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          isVisible={DELETE}
          animationType={'slide'}
          transparent={true}
          onRequestClose={() => {
            setDELETE(false);
          }}
          onBackdropPress={() => {
            setDELETE(false);
          }}
        >
          <View style={styles.modelview}>
            <Text style={{ color: 'red' }}>Are you sure ?</Text>
            <FlatList
              data={modelData}
              // keyExtractor={( index) => index}
              renderItem={modelitem}
            />
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity onPress={deleteItem} style={{ justifyContent: "center", flexDirection: "row", width: '50%' }}>
                <View style={styles.delete}>
                  <Text style={{ color: "#fff", fontSize: 20 }}>DELETE</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setDELETE(false)} style={{ justifyContent: "center", flexDirection: "row", width: '50%' }}>
                <View style={styles.cancle}>
                  <Text style={{ color: "#2d333a", fontSize: 20 }}>CANCEL</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </MenuProvider>
    </>
  )
}
const styles = StyleSheet.create({
  modelview: {
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: '100%',
    paddingTop: 20
  },
  delete: {
    height: 50,
    width: '60%',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: 'center',
    borderRadius: 25
  },
  cancle: {
    height: 50,
    width: '60%',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: "center",
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 25
  },
  Add: {
    height: 50,
    width: '60%',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: 'center',
    borderRadius: 25
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    backgroundColor: '#ADEFD1FF',
    height: 60,
    marginVertical: 10,
  },
  story: {
    width: 55,
    height: 55,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#00203FFF',
    margin: 5,
    marginLeft: 15
  },
  text: {
    color: '#fff',
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  Divider: {
    width: "100%",
    alignItems: 'center',
    justifyContent: "center"
  },
  header: {
    height: '10%',
    width: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    backgroundColor: "#e90c59",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  textInput: {
    paddingBottom: 10,
    borderColor: 'gray',
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 8,
    color: '#2d333a',
    width: '80%',
    marginBottom: 10
  },
  button: {
    height: 50,
    width: '50%',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: "center",
    marginHorizontal: 20,
    backgroundColor: "green",
    justifyContent: 'center',
    borderRadius: 25
  },
  textInputStyle: {
    height: 40,
    color: 'black',
    borderRadius: 20,
    width: '90%'
  },
});

export default Home