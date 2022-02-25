import React from 'react'
import { Customer } from './styles'
import Modal from 'react-native-modal';
import { useState, useEffect } from 'react';
import Cross from '../assates/svg/Cross.svg';
import Snackbar from 'react-native-snackbar';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { Rating, AirbnbRating } from 'react-native-ratings';
import axios from 'axios';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

let indexValues = [];
let long = 0;
let count = 0;
let SnackBar = 0;
const Item = ({ route, navigation }) => {
  const { indexofItem,ItemName } = route.params;
  const [Post, setPost] = useState(); // set Api data
  const [CopyPost, setCopyPost] = useState(''); // for show copy post
  const [res, setres] = useState(0);
  useEffect(() => {
    console.log('DataBase Connected');
    getPost();

  }, []);

  //call API DATA
  const getPost = () => {
    axios.get('http://localhost:8081/AllData').then(res => {
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

  let color = '#fff'
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
  const [ITEM, setITEM] = useState([
    {
      item: 'First',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'First',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 1',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 2',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 3',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 4',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 5',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 6',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 7',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 8',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 9',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 10',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 1',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 2',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 3',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 4',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 5',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 6',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 7',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 8',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 9',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 10',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    }

  ]);
  const [NEWITEM, setNEWITEM] = useState([
    {
      item: 'Item 1',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 2',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 3',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 4',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 5',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 6',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 7',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 8',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 9',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 10',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 1',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 2',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 3',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 4',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 5',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 6',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 7',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 8',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 9',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    },
    {
      item: 'Item 10',
      prize: 10,
      type: 'fruits',
      star: 0,
      color: "yellow",
      weightInKg: 5
    }

  ]);
  const [search, setsearch] = useState('');
  const [user, setuser] = useState('');
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
    if (user.trim() !== '') {
      USER.unshift({
        user: user,
      })
      setModel(false);
    }
    setuser('');

  }
  const [modelData, setmodelData] = useState([]);
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
  // const Add = () =>{}
  const ModelItem = ({ index }) =>
    <Text style={{ color: 'black', fontWeight: '400', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
      {modelData[index]}
    </Text>
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
  const text = (Name, col, content) =>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, marginVertical: 5 }}>
      <Text style={styles.text}>{Name}</Text>
      <Text style={styles.col}>{col}</Text>
      <Text style={styles.text}>{content}</Text>
    </View>
  const [select, setselect] = useState(-1);

  const Item = ({ index, ItemName, ItemPrize,  ItemType, ItemStar, ItemColor, ItemWeight }) =>{
    const [Index, setIndex] = useState(0);
    // useEffect(() => {
    //   if (select == 1) {
    //     if (indexValues.indexOf(index) == -1) {
    //       indexValues.push(index);
    //     }
    //     count = filterData.length;
    //     long = 1;
    //     if (index == filterData.length - 1) {
    //       Snackbar.show({
    //         text: 'Delete Item',
    //         duration: Snackbar.LENGTH_INDEFINITE,
    //         action: {
    //           text: 'DELETE',
    //           textColor: '#e90c59',
    //           onPress: () => {
    //             if (indexValues.length != 0) {
    //               SnackBar = 1;
    //             }
    //           },
    //         },
    //       })
    //     }
    //     setIndex(!Index);

    //   }
    //   if (select == 0) {
    //     indexValues = [];
    //     count = 0;
    //     long = 0;
    //     Snackbar.dismiss();
    //     setIndex(!Index);
    //   }

    // }, []);

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
      };
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
      <TouchableWithoutFeedback
        onLongPress={onLongPressButton}
        onPress={onPress}
      >
        <View style={{flex:1, flexDirection: "row", justifyContent: "space-evenly", backgroundColor: 'white' }}>
          <View key={index} style={[styles.listItem, { width: '85%' }]}>
            <View style={{ height: '100%', width: '100%', justifyContent: "center", backgroundColor: "#ffd7ae" }}>
              {text('Name', ':', ItemName.toUpperCase())}
              {text('Prize', ':', ItemPrize)}
              {text('Type', ':', ItemType.toUpperCase())}
              {text('Star', ':', ItemStar)}
              {text('Color', ':', ItemColor.toUpperCase())}
              {text('Weight', ':', ItemWeight)}
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
        {item.name == ItemName ? 
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Item
           index={index}
            ItemName={item.name}
            ItemPrize={item.price}
            ItemType={item.type}
            ItemStar={item.star}
            ItemColor={item.color}
            ItemWeight={item.weightInKg}
            name={item}
            
            navigation={navigation}
          />
        </View> 
        : null}

      </>
    );
  };
  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating)
  }
  return (
    <>
      {/* <Rating
        type='star'
        ratingCount={5}
        imageSize={30}
        // showRating
        onFinishRating={ratingCompleted}
      /> */}
      <View style={Customer.header}>
        {header('SUPPLIER NAME')}
        {/* {header(ItemName.toUpperCase())} */}
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
      {res == 1 ?
              <FlatList
                data={Post[0][indexofItem].item}
                renderItem={({ item, index }) => renderItem({ navigation, item, index })}
              /> : null}
            {res == 1 ? console.log([Post[0][0].item]) : null}
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
        <View
          style={{
            flexDirection: 'column',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            width: '100%',
            paddingTop: 20,

          }}>
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
    fontSize: 10,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  col: {
    position: "absolute",
    left: "50%",
    color: '#DB4437',
    fontWeight: "bold",
    paddingHorizontal: 25
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
  textInputStyle: {
    height: 40,
    color: 'black',
    borderRadius: 20,
    width: '90%'
  },
});