import React from 'react'
import axios from 'axios';
import { styles } from './styles'
import Modal from 'react-native-modal';
import { useState, useEffect } from 'react';
import Cross from '../assates/svg/Cross.svg';
import Snackbar from 'react-native-snackbar';
import SelectDropdown from 'react-native-select-dropdown'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { FlatList, Image, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

let indexValues = [];
let long = 0;
let count = 0;
let SnackBar = 0;
const Item = ({ route, navigation }) => {
  const { IndexOfCustomer, ItemName, ID, token } = route.params;
  const [Post, setPost] = useState(); // set Api data
  const [CopyPost, setCopyPost] = useState(''); // for show copy post
  const [res, setres] = useState(0);
  const [categoryNames, setcategoryNames] = useState([]);
  // const [arr, setarr] = useState(0);
  let arr = []
  useEffect(() => {
    console.log('DataBase Connected');
    getPost();

  }, []);

  //call API DATA
  const getPost = () => {
    axios.get("http://192.168.0.196:8080/api/Category/GetAllCategory", { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        setPost(res.data);
        setCopyPost(res.data);
        setres(1);
      })
      .catch(error => console.log(error));
  };
  if (res == 1) {
    for (let i = 0; i < Post.length; i++) {
      categoryNames.push[Post[i].categoryName];
    }
  }
  const [array, setarray] = useState([]);

  let color = '#fff'
  const [model, setModel] = useState(false);
  const [DELETE, setDELETE] = useState(false);

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
  // const [c, setc] = useState(test)
  // console.log(Post[0].id)
  let nameofCategory = {
    id: "bae4aede-3f5f-4607-3b3a-08da07cfdce9",
    categoryName: "Shoes"
  }
  const addItem = () => {
    axios.put('http://192.168.0.196:8080/api/Category/UpdateCategory?id=bae4aede-3f5f-4607-3b3a-08da07cfdce9', nameofCategory, { headers: { Authorization: `Bearer ${token}` } }).then(res => {
      console.log(res);
    }
    ).catch(err => {
      console.log(err);
    }
    )
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
      for (let j = 0; j < Post.length; j++) {
        if (Post[j].user === modelData[i]) {
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
  const text = (Name, content) =>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, marginVertical: 5 }}>
      <Text style={styles.text}>{Name}</Text>
      <Text style={styles.col}>:</Text>
      <Text style={styles.text}>{content}</Text>
    </View>
  const [select, setselect] = useState(-1);

  const Item = ({ index, categoryName, navigation }) => {
    arr.push(categoryName);
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
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly", backgroundColor: 'white' }}>
          <View key={index} style={[styles.itemListItem, { width: '85%' }]}>
            <View style={{ height: '100%', width: '100%', justifyContent: "center", backgroundColor: "#ffd7ae" }}>
              {text('categoryName', categoryName.toUpperCase())}
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
            categoryName={item.categoryName}
            navigation={navigation}
          />
        </View>
      </>
    );
  };
  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating)
  }
  return (
    <>
      <View style={styles.itemHeader}>
        {header('Category Names')}
        <TouchableOpacity style={{ top: '50%', position: 'absolute', right: '15%', height: "100%", justifyContent: "center" }} onPress={() => array.length == 0 ? setModel(true) : DELETEITEM()}>
          <Image source={array.length == 0 ? require('../assates/svg/Plus.png') : require('../assates/svg/Dustbin.png')} style={{ height: array.length == 0 ? 60 : 50, width: array.length == 0 ? 60 : 50 }} />
        </TouchableOpacity>

      </View>
      <View style={{ width: '100%', flexDirection: 'column', alignItems: 'center', paddingTop: 25, backgroundColor: '#fff' }}>
        <View style={{ width: '85%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <TextInput
            style={styles.textInputStyle}
            value={search}
            placeholder="Search Item"
            placeholderTextColor="#DB4437"
            onChangeText={text => searchFilter(text)}
          >
          </TextInput>
          <Cross width={search != '' ? 15 : 0} height={search != '' ? 15 : 0} onPress={() => { searchFilter('') }} />
        </View>
        <View style={styles.Divider}>
          <Divider width={2} style={{ width: '85%' }} color={'pink'} />
        </View>
      </View>
      {res == 1 ?
        <FlatList
          data={Post}
          renderItem={({ item, index }) => renderItem({ navigation, item, index })}
        /> : null}
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
          {res == 1 ?
            <SelectDropdown
              data={arr}
              defaultButtonText={'Select Category'}
              dropdownStyle={{ width: '50%', backgroundColor: 'white' }}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
            /> : null}
          <TextInput
            style={[styles.itemTextInput, { width: '90%', marginLeft: 5, marginTop: 10 }]}
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

export default Item;