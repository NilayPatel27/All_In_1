import React from 'react'
import { Customer } from './styles'
import Modal from 'react-native-modal';
import { useState, useEffect } from 'react';
import Cross from '../assates/svg/Cross.svg';
import Snackbar from 'react-native-snackbar';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

let indexValues = [];
let long = 0;
let count = 0;
let SnackBar = 0;
const Item = ({ route, navigation }) => {

  const [array, setarray] = useState([]);

  let color = '#fff'
  const { Name } = route.params;
  const [model, setModel] = useState(false);
  const [DELETE, setDELETE] = useState(false);

  const [USER, setUSER] = useState([
    {
      user: 'ITEM 1',
    },
    {
      user: 'ITEM 2',
    },
    {
      user: 'ITEM 3',
    },
    {
      user: 'ITEM 4',
    },
    {
      user: 'ITEM 5',
    },
    {
      user: 'ITEM 6',
    },
    {
      user: 'ITEM 7',
    },
    {
      user: 'ITEM 8',
    },
    {
      user: 'ITEM 9',
    },
    {
      user: 'ITEM 10',
    }

  ]);
  const [NEWUSER, setNEWUSER] = useState([
    {
      user: 'ITEM 1',
    },
    {
      user: 'ITEM 2',
    },
    {
      user: 'ITEM 3',
    },
    {
      user: 'ITEM 4',
    },
    {
      user: 'ITEM 5',
    },
    {
      user: 'ITEM 6',
    },
    {
      user: 'ITEM 7',
    },
    {
      user: 'ITEM 8',
    },
    {
      user: 'ITEM 9',
    },
    {
      user: 'ITEM 10',
    }

  ]);
  const [search, setsearch] = useState('');
  const [user, setuser] = useState('');
  const [image, setimage] = useState('');
  const searchFilter = text => {
    if (text.trim()) {
      const newData = NEWUSER.filter(item => {
        const itemData = item.user
          ? item.user.trim().toLowerCase()
          : ''.toUpperCase();
        const textData = text.trim().toLowerCase();
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
    if (user.trim() !== '' && image.trim() !== '') {
      USER.unshift({
        user: user,
        image: image
      })
      setModel(false);
    }
    setuser('');
    setimage('');
  }
  const [modelData, setmodelData] = useState([]);
  const DELETEITEM = () => {
    if (modelData.length == 0) {
      for (let i = 0; i < array.length; i++) {
        modelData.push(USER[array[i]].user);
      }
      setDELETE(true);
    }
    else {
      for(let i = 0; i<modelData.length; i++){
        let FLAG = 0;
        for(let j = 0; j<array.length; j++){
          if(modelData[i] == USER[array[j]].user){
            FLAG = 1;
            j=array.length;
          }
        }
        if(FLAG == 0){
         setmodelData( modelData.slice(i,1))
        }
      }

      for (let i = 0; i < array.length; i++) {
        let flag = 0;
        for (let j = 0; j < modelData.length; j++) {
          if (modelData[j] == USER[array[i]].user) {
            flag = 1;
            j=modelData.length;
          }
        }
        if (flag == 0) {
          modelData.push(USER[array[i]].user);
          // flag = 0;
        }
      }
      setDELETE(true);
    }
    console.log(modelData);
  }
  const deleteItem = () => {
    if (user.trim() !== '') {
      USER.unshift({
        user: user,
        image: image
      })
      setModel(false);
    }
    setuser('');
    setimage('');
  }
  const ModelItem = ({ index }) => {
    return (
      <View style={{ flexDirection: 'column', justifyContent: "space-between", marginTop: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'white' }}>
          <Text style={{ color: 'black', fontWeight: '400', justifyContent: 'center', alignItems: 'center', paddingLeft: 10 }}>
            Mac ID : {modelData[index]}
          </Text>
        </View>
      </View>
    );
  };
  const modelitem = ({ item, index }) => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ModelItem
          index={index}

        />
      </View>
    );
  };
  const header = (text) =>
    <View style={{ justifyContent: 'flex-start', flexDirection: "row", height: '100%', alignItems: "center" }}>
      <Text style={{ color, fontSize: 20 }}>{text}</Text>
    </View>

  const [select, setselect] = useState(-1);

  const Item = ({ index, Name }) => {

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
            text: 'Delete Item',
            duration: Snackbar.LENGTH_INDEFINITE,
            action: {
              text: 'DELETE',
              textColor: '#e90c59',
              onPress: () => {
                if (indexValues.length != 0) {
                  SnackBar = 1;
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
          text: 'Delete Item',
          duration: Snackbar.LENGTH_INDEFINITE,
          action: {
            text: 'DELETE',
            textColor: '#e90c59',
            onPress: () => {
              if (indexValues.length != 0) {
                SnackBar = 1;
              }
            },
          },
        })
      }
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
      };
      if (SnackBar == 1) {
        Snackbar.show({
          text: 'Delete Item',
          duration: Snackbar.LENGTH_INDEFINITE,
          action: {
            text: 'DELETE',
            textColor: '#e90c59',
            onPress: () => {
              if (indexValues.length != 0) {
                SnackBar = 1;
                console.log('SnackBar' + SnackBar);
              }
            },
          },
        })
        SnackBar = 0;
      }
      if (select == 1) {
        setselect(-1);
      }
      { indexValues.length == 0 ? setarray([]) : setarray(indexValues) }
    }
    return (
      // #ffffe0
      <TouchableWithoutFeedback
        onLongPress={onLongPressButton}
        onPress={onPress}
      >
        <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-evenly", backgroundColor: 'white' }}>
          <View key={index} style={[styles.listItem, { width: '85%' }]}>
            <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#000" }}>
              <Text style={styles.text}>{Name.toUpperCase()}</Text>
              {indexValues.indexOf(index) == -1 ? null
                : <View style={{ height: '100%', width: "100%", justifyContent: 'center', alignItems: 'center', position: 'absolute', right: '-48%', top: '-40%' }}>
                  <View style={{ height: 25, width: 25, backgroundColor: 'lightgreen', borderRadius: 50, zIndex: 100 }}></View>
                </View>}

            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  const renderItem = ({ item, index }) => {
    return (
      <>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Item
            index={index}
            Name={item.user}
          />
        </View>
      </>
    );
  };
  return (
    <>
      <View style={Customer.header}>
        {header('SUPPLIER NAME')}
        {header(Name.toUpperCase())}
        <TouchableOpacity style={{ top: '50%', position: 'absolute', right: '15%', height: "100%", justifyContent: "center" }} onPress={() => array.length == 0 ? setModel(true) : DELETEITEM()}>
          <Image source={array.length == 0 ? require('../assates/svg/Plus.png') : require('../assates/svg/Dustbin.png')} style={{ height: array.length == 0 ? 60 : 50, width: array.length == 0 ? 60 : 50 }} />
        </TouchableOpacity>

      </View>
      <View style={{ width: '100%', flexDirection: 'column', alignItems: 'center', marginTop: 25 }}>
        <View style={{ width: '85%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <TextInput
            style={Customer.textInputStyle}
            value={search}
            placeholder="Search Item"
            placeholderTextColor="black"
            onChangeText={text => searchFilter(text)}
          >
          </TextInput>
          <Cross width={search != '' ? 15 : 0} height={search != '' ? 15 : 0} onPress={() => { searchFilter('') }} />
        </View>
        <View style={Customer.Divider}>
          <Divider width={2} style={{ width: '85%' }} color={'pink'} />
        </View>
      </View>
      <View style={{ height: "80%", paddingTop: 30 }}>
        <FlatList
          data={USER}
          renderItem={renderItem}
        />
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
        <View
          style={{
            flexDirection: 'column',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            width: '100%',
            paddingTop: 20,
            backgroundColor: 'white'
          }}>
          <TextInput
            style={[styles.textInput, { width: '90%', marginLeft: 5 }]}
            placeholder="Item Name"
            placeholderTextColor="#2d333a"
            onChangeText={(Name) => setuser(Name)}
            autoComplete={'off'}
          />
          <TouchableOpacity onPress={addItem} style={{ justifyContent: "center", flexDirection: "row" }}>
            <View style={styles.button}>
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
        <View
          style={{
            flexDirection: 'column',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            width: '100%',
            paddingTop: 20,
            backgroundColor: 'white'
          }}>
          <FlatList
            data={modelData}
            // keyExtractor={( index) => index}
            renderItem={modelitem}
          />
          <TouchableOpacity onPress={deleteItem} style={{ justifyContent: "center", flexDirection: "row" }}>
            <View style={styles.button}>
              <Text style={{ color: "#fff", fontSize: 20 }}>DELETE</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  )
}

export default Item

const styles = StyleSheet.create({
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
    marginVertical: 15,

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