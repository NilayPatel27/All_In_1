import React from 'react'
import axios from 'axios';
import { styles } from './styles';
import Modal from 'react-native-modal';
import { useState, useEffect } from 'react';
import Cross from '../../assates/svg/Cross.svg';
import Snackbar from 'react-native-snackbar';
import MenuButton from '../../assates/svg/MenuButton.svg';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';
import { View, Image, FlatList, TouchableWithoutFeedback, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';

let indexValues = [];
let long = 0;
let count = 0;
let SnackBar = 0;
const Home = ({ navigation, route }) => {
  const { token } = route.params;

  const [Post, setPost] = useState(); // set Api data
  const [CopyPost, setCopyPost] = useState(''); // for show copy post
  const [res, setres] = useState(0);

  useEffect(() => {
    console.log('DataBase Connected');
    getPost();
  }, []);

  //call API DATA
  const getPost = () => {
    axios.get('http://192.168.0.196:8080/api/User/GetAllCustomer', { headers: { Authorization: `Bearer ${token}` } }).then(res => {
      if (res.data.length > 0) {
        setPost(res.data);
        setCopyPost(res.data);
      } else {
        setPost([]);
        setError('No Post Found');
      }
      setres(1);
    }
    );
  };

  const [array, setarray] = useState([]);
  const [model, setModel] = useState(false);
  const [DELETE, setDELETE] = useState(false);
  const [user, setuser] = useState('');
  const [modelid, setmodelid] = useState('');
  const [modelitems, setmodelitems] = useState('')
  const [modelData, setmodelData] = useState([]);
  const [search, setsearch] = useState('');
  const [select, setselect] = useState(-1);
  const [prev, setprev] = useState(0);
  const [next, setnext] = useState(12)

  const searchFilter = text => {
    if (text.trim()) {
      const newData = Post.filter(item => {
        const itemData = item.userName
          ? item.userName.trim().toLowerCase()
          : ''.toLowerCase();
        const textData = text.trim().toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
      setPost(newData);
      setsearch(text);
    } else {
      setPost(CopyPost);
      setsearch(text);
    }
  };
  const addItem = () => {
    if (user.trim() !== '') {
      Post.unshift({
        name: user,
        id: modelid,
        item: [{ name: modelitems }]
      })
      setModel(false);
    }
    setuser('');
    setmodelid('');
    setmodelitems('');
  }
  const DELETEITEM = () => {
    modelData.length = 0;
    for (let i = 0; i < array.length; i++) {
      modelData.push(
        {
          name: Post[array[i]].name,
          // price: Post[0].price,
          // type: Post[0].type,
          // star: Post[0].star,
          // color: Post[0].color,
          // weightInKg: Post[0].weightInKg
        }
        // Post[0].name
      );
      // console.log(Post[0][i].name);
    }
    setDELETE(true);
  }
  const deleteItem = () => {
    for (let i = 0; i < modelData.length; i++) {
      for (let j = 0; j < Post.length; j++) {
        if (Post[j].name === modelData[i].name) {
          Post.splice(j, 1);
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
        <Text style={{ color: 'black', fontWeight: '400', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>{modelData[index].name}</Text>
      </View>
    );
  };
  const Item = ({ index, Name, navigation, ID }) => {
    const [Index, setIndex] = useState(0);
    useEffect(() => {
      if (select == 1) {
        if (indexValues.indexOf(index) == -1) {
          indexValues.push(index);
        }
        count = Post.length;
        long = 1;
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
          Name: Name,
          IndexOf: index,
          ID: ID,
          token: token,
        });
      }
      if (select == 1) {
        setselect(-1);
      }
      { indexValues.length == 0 ? setarray([]) : setarray(indexValues) }
    }
    return (
      // #ffffe0
      <TouchableWithoutFeedback onLongPress={onLongPressButton} onPress={onPress} >
        <View style={{ width: "50%", flexDirection: "row", justifyContent: "center", backgroundColor: '#fff' }}>
          <View key={index} style={[styles.HomeListItem, { width: '85%' }]}>
            <View style={{ width: '100%', height: '100%', justifyContent: 'center', backgroundColor: "#005950" }}>
              <Text style={styles.homeText}>{Name.length > 10 ? Name.slice(0, 7) + '...' : Name}</Text>
              {!indexValues.includes(index) ? null
                : <View style={{ height: '100%', width: "100%", justifyContent: 'center', alignItems: 'center', position: 'absolute', right: '-48%', top: '-40%' }}>
                  <View style={{ height: 25, width: 25, backgroundColor: '#DB4437', borderRadius: 50 }}></View>
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
        {index >= prev && index < next ?
          <Item
            index={index}
            Name={item.userName}
            navigation={navigation}
            ID={item.id}
          />
          : null}
      </>
    );
  };
  return (
    <>
      <MenuProvider>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <View style={styles.homeHeader}>
            <Text style={{ color: '#fff', fontSize: 30 }}>Customers List</Text>
            <Menu onSelect={value => setselect(value)} >
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
            <TouchableOpacity
              style={{ top: '50%', position: 'absolute', right: '15%', height: "100%", justifyContent: "center" }}
              onPress={() => array.length == 0 ? setModel(true) : DELETEITEM()}>
              <Image
                source={array.length == 0 ? require('../../assates/svg/Plus.png') : require('../../assates/svg/Dustbin.png')}
                style={{ height: array.length == 0 ? 60 : 50, width: array.length == 0 ? 60 : 50 }} />
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', flexDirection: 'column', alignItems: 'center', paddingTop: 25, backgroundColor: '#fff' }}>
            <View style={{ width: '85%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
              <TextInput
                style={styles.textInputStyle}
                value={search}
                placeholder="Search Customer"
                placeholderTextColor="#2d333a"
                onChangeText={text => searchFilter(text)}
              >
              </TextInput>
              <Cross width={search != '' ? 15 : 0} height={search != '' ? 15 : 0} onPress={() => { searchFilter('') }} />
            </View>
            <View style={styles.Divider}>
              <Divider width={2} style={{ width: '85%' }} color={'pink'} />
            </View>
          </View>
          <View style={{ width: '100%', backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center' }}>
            {res == 1 ?
              <FlatList
                data={Post}
                numColumns={2}
                horizontal={false}
                renderItem={({ item, index }) => renderItem({ navigation, item, index })}
              />
              : null}
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%', alignItems: 'center', marginVertical: 5 }}>
            <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
              {prev == 0
                ? <Image source={require('../../assates/svg/BlankLeft.png')} style={{ height: 25, width: 25 }} />
                : <TouchableOpacity onPress={() => { setnext(next => next - 12); setprev(prev => prev - 12) }}>
                  <Image source={require('../../assates/svg/Left.png')} style={{ height: 25, width: 25 }} />
                </TouchableOpacity>}
              {/* {next > USER.length - 1
                ? <Image source={require('../../assates/svg/BlankRight.png')} style={{ height: 25, width: 25 }} />
                : <TouchableOpacity onPress={() => { setnext(next => next + 12); setprev(prev => prev + 12) }}>
                  <Image source={require('../../assates/svg/Right.png')} style={{ height: 25, width: 25 }} />
                </TouchableOpacity>} */}
            </View>
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
              style={[styles.homeTextInput, { width: '90%', marginLeft: 5 }]}
              placeholder="Customer Name"
              placeholderTextColor="#2d333a"
              onChangeText={(Name) => setuser(Name)}
              autoComplete={'off'}
            />
            <TextInput
              style={[styles.homeTextInput, { width: '90%', marginLeft: 5 }]}
              placeholder="Customer Name"
              placeholderTextColor="#2d333a"
              onChangeText={(id) => setmodelid(id)}
              autoComplete={'off'}
            />
            <TextInput
              style={[styles.homeTextInput, { width: '90%', marginLeft: 5 }]}
              placeholder="Customer Name"
              placeholderTextColor="#2d333a"
              onChangeText={(item) => setmodelitems(item)}
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

export default Home