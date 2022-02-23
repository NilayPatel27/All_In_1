import React from 'react'
import { Customer } from './styles'
import { useState } from 'react';
import Cross from '../assates/svg/Cross.svg';
import MenuButton from '../assates/svg/MenuButton.svg';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import Back from '../assates/svg/BackWithcircle.svg';
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { useEffect } from 'react';
import Snackbar from 'react-native-snackbar';
import Modal from 'react-native-modal';


let indexValues = [];
let long = 0;
let count = 0;
let SnackBar = 0;
const Customers = ({ route, navigation }) => {
  
  const [ITEM, setITEM] = useState([
    {
      item: 'Item 1',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 2',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 3',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 4',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 5',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 6',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 7',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 8',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 9',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 10',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 1',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 2',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 3',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 4',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 5',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 6',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 7',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 8',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 9',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 10',
      prize: 10,
      type: 'fruits'
    }

  ]);
  const [NEWITEM, setNEWITEM] = useState([
    {
      item: 'Item 1',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 2',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 3',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 4',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 5',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 6',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 7',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 8',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 9',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 10',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 1',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 2',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 3',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 4',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 5',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 6',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 7',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 8',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 9',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 10',
      prize: 10,
      type: 'fruits'
    }

  ]);

  const { Name } = route.params;
  const [array, setarray] = useState([]);
  const [model, setModel] = useState(false);
  const [DELETE, setDELETE] = useState(false);
  const [user, setuser] = useState('');
  const [modelData, setmodelData] = useState([]);
  const [search, setsearch] = useState('');
  const [select, setselect] = useState(-1);
  const [prev, setprev] = useState(0);
  const [next, setnext] = useState(10);

  const searchFilter = text => {
    if (text.trim()) {
      const newData = NEWITEM.filter(item => {
        const itemData = item.item
          ? item.item.trim().toLowerCase()
          : ''.toUpperCase();
        const textData = text.trim().toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
      setITEM(newData);
      setsearch(text);
    } else {
      setITEM(NEWITEM);
      setsearch(text);
    }
  };
  const addItem = () => {
    if (user.trim() !== '') {
      ITEM.unshift({
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
        if (ITEM[j].user === modelData[i]) {
          ITEM.splice(j, 1);
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
  const header = (text) =>
    <View style={{ justifyContent: 'flex-start', flexDirection: "row", alignItems: "center" }}>
      <Text style={{ color: '#ffd7ae', fontSize: 20 }}>{text}</Text>
    </View>

  const text = (Name, col, content) =>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, marginVertical: 5 }}>
      <Text style={Customer.text}>{Name}</Text>
      <Text style={Customer.col}>{col}</Text>
      <Text style={Customer.text}>{content}</Text>
    </View>
  const Item = ({ index, navigation,ItemName,Prize,Type }) => {
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
        navigation.navigate('Item', { ItemName: ItemName})
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
        <View key={Date.now} style={Customer.listItem}>
                    <View style={Customer.details}>
                      {text('Name', ':', ItemName.toUpperCase())}
                      {text('Prize', ':', Prize)}
                      {text('Type', ':', Type.toUpperCase())}
                      {indexValues.indexOf(index) == -1 ? null
                : <View style={{ height: '100%', width: "100%", justifyContent: 'center', alignItems: 'center', position: 'absolute', right: '-48%', top: '-40%' }}>
                  <View style={{ height: 25, width: 25, backgroundColor: '#DB4437', borderRadius: 50 }}></View>
                </View>}
                    </View>
                  </View>
      </TouchableWithoutFeedback>
    );
  };
  const renderItem = ({ item, navigation, index }) => {

    return (
      <>
        {index >= prev && index < next ? <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Item
            index={index}
            ItemName={item.item}
            Prize={item.prize}
            Type={item.type}
            navigation={navigation}
          />
        </View> : null}

      </>
    );
  };
  return (
    <>
      <MenuProvider>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <View style={Customer.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Back height={25} width={25} />
            </TouchableOpacity>
            {header(Name.toUpperCase())}
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
                style={Customer.textInputStyle}
                value={search}
                placeholder="Search Item"
                placeholderTextColor="#DB4437"
                onChangeText={text => searchFilter(text)}
              >
              </TextInput>
              <Cross width={search != '' ? 15 : 0} height={search != '' ? 15 : 0} onPress={() => { searchFilter('') }} />
            </View>
            <View style={Customer.Divider}>
              <Divider width={2} style={{ width: '85%' }} color={'pink'} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%', alignItems: 'center', marginVertical: 5 }}>
            <View style={{ width: '85%', flexDirection: 'row', justifyContent: 'flex-end' }}>
              {prev == 0
                ? <Image source={require('../assates/svg/BlankLeft.png')} style={{ height: 25, width: 25 }} />
                : <TouchableOpacity onPress={() => { setnext(next => next - 10); setprev(prev => prev - 10) }}>
                  <Image source={require('../assates/svg/Left.png')} style={{ height: 25, width: 25 }} />
                </TouchableOpacity>}
              {next > ITEM.length - 1
                ? <Image source={require('../assates/svg/BlankRight.png')} style={{ height: 25, width: 25 }} />
                : <TouchableOpacity onPress={() => { setnext(next => next + 10); setprev(prev => prev + 10) }}>
                  <Image source={require('../assates/svg/Right.png')} style={{ height: 25, width: 25 }} />
                </TouchableOpacity>}
            </View>
          </View>
          <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <FlatList
              data={ITEM}
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
              placeholder="Item Name"
              placeholderTextColor="#2d333a"
              onChangeText={(Name) => setuser(Name)}
              autoComplete={'off'}
            />
            <TextInput
              style={[styles.textInput, { width: '90%', marginLeft: 5 }]}
              placeholder="Item Prize"
              placeholderTextColor="#2d333a"
              onChangeText={(Name) => setuser(Name)}
              autoComplete={'off'}
            />
            <TextInput
              style={[styles.textInput, { width: '90%', marginLeft: 5 }]}
              placeholder="Item Type"
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

export default Customers
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
    color: '#DB4437',
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    backgroundColor: "#DB4437",
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