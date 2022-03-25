import React, { useCallback, useContext } from 'react';
import axios from 'axios';
import { styles } from './styles';
import Modal from 'react-native-modal';
import { useEffect, useState } from 'react';
import Cross from '../../assates/svg/Cross.svg';
import Snackbar from 'react-native-snackbar';
import Back from '../../assates/svg/BackWithcircle.svg';
import {ThemeContext} from '../Context/themeContext';
import MenuButton from '../../assates/svg/MenuButton.svg';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';
import { FlatList, Image, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

let indexValues = [];
let long = 0;
let count = 0;
let SnackBar = 0;
const Customers = ({ route, navigation }) => {
  const {back,textColor} = useContext(ThemeContext);

  const { Name, IndexOf, ID, token } = route.params;

  const [Post, setPost] = useState(); // set Api data
  const [CopyPost, setCopyPost] = useState(''); // for show copy post
  const [res, setres] = useState(0);

  useEffect(() => {
    console.log('DataBase Connected');
    getPost();
  }, []);

  const getPost = async () => {
    await axios.get("http://192.168.0.196:8080/api/User/GetCustomer?Id=" + ID, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        setPost([res.data]);
        setCopyPost(res.data);
        setres(1);
      }
      ).catch(error => {
        console.log(error);
      });
  };
{res==1?
console.log(Post):null
}
  const deletePost = ID => {
    let str = 'http://localhost:8081/AllData/' + ID;
    axios
      .delete(str)
      .then(getPost());
  };

  //POST DATA
  const sandPost = () => {
    let add = {
      userId: UserId,
      id: Id,
      title: Title,
      body: Body,
    };
    axios
      .post('http://localhost:8081/AllData', add)
      .then(response => console.log(response.data));
  };

  //UPDATE DATA
  const updatePost = ID => {
    let update = {
      userId: UserId,
      id: Id,
      title: Title,
      body: Body,
    };
    let url = 'http://localhost:8081/AllData/' + ID;
    axios.put(url, update).then(response => console.log(response.data));
  };

  const [array, setarray] = useState([]);
  const [model, setModel] = useState(false);
  const [DELETE, setDELETE] = useState(false);
  const [user, setItemName] = useState('');
  const [prize, setItemPrize] = useState('');
  const [type, setItemType] = useState('');
  const [star, setItemStar] = useState('');
  const [color, setItemColor] = useState('');
  const [weight, setItemWeight] = useState('');
  const [modelData, setmodelData] = useState([]);
  const [search, setsearch] = useState('');
  const [select, setselect] = useState(-1);
  const [prev, setprev] = useState(0);
  const [next, setnext] = useState(10);

  const searchFilter = text => {
    if (text.trim()) {
      const newData = Post.filter(item => {
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
      Post[0].item.unshift({
        name: user,
        price: prize,
        type: type,
        star: star,
        color: color,
        weightInKg: weight
      })
      setModel(false);
    }
    setItemName('');
    setItemPrize('');
    setItemType('');
  }
  const DELETEITEM = () => {
    modelData.length = 0;
    for (let i = 0; i < array.length; i++) {
      modelData.push(
        {
          name: Post[IndexOf].item[i].name,
          price: Post[IndexOf].item[i].price,
          type: Post[IndexOf].item[i].type,
          star: Post[IndexOf].item[i].star,
          color: Post[IndexOf].item[i].color,
          weightInKg: Post[IndexOf].item[i].weightInKg
        }
      );
    }
    setDELETE(true);
  }
  const deleteItem = () => {
    for (let i = 0; i < modelData.length; i++) {
      for (let j = 0; j < Post[IndexOf].item.length; j++) {
        if (Post[IndexOf].item[j].name == modelData[i].name) {
          Post[IndexOf].item.splice(j, 1);
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
  const modelitem = ({ item, index }) => {
    return (
      <>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.modelitem}>name : {item.name}</Text>
          <Text style={styles.modelitem}>price : {item.price}</Text>
          <Text style={styles.modelitem}>type : {item.type}</Text>
          <Text style={styles.modelitem}>star : {item.star}</Text>
          <Text style={styles.modelitem}>color :{item.color}</Text>
          <Text style={styles.modelitem}>weightInKg : {item.weightInKg}</Text>
        </View>
      </>
    );
  };
  const header = (text) =>
    <View style={{ justifyContent: 'flex-start', flexDirection: "row", alignItems: "center" }}>
      <Text style={{ color: '#fff', fontSize: 20 }}>{text}</Text>
    </View>

  const text = (Name, col, content) =>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, marginVertical: 5 }}>
      <Text style={styles.text}>{Name}</Text>
      <Text style={styles.col}>{col}</Text>
      <Text style={styles.text}>{content}</Text>
    </View>
  const Item = ({ index, navigation, Email, Address, Phoneno, userID, Photo }) => {
    console.log(Email)
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
        navigation.navigate('Item', { IndexOfCustomer: IndexOf, token: token, Email: Email, ID: ID })
      }
      if (select == 1) {
        setselect(-1);
      }
      { indexValues.length == 0 ? setarray([]) : setarray(indexValues) }
    }
    return (
      // #ffffe0
      <>
        <TouchableWithoutFeedback onLongPress={onLongPressButton} onPress={onPress} >
          <View key={Date.now} style={styles.customerListItem}>
            <View style={styles.details}>
              {text('Name', ':', Email)}
              {text('Address', ':', Address)}
              {text('Phoneno', ':', Phoneno)}
              {text('userID', ':', userID)}
              {/* <Image 
              source={{uri:Photo}}
              style={{width:100,height:100,borderRadius:50}}
              /> */}
              {indexValues.indexOf(index) == -1 ? null
                : <View style={{ height: '100%', width: "100%", justifyContent: 'center', alignItems: 'center', position: 'absolute', right: '-48%', top: '-40%' }}>
                  <View style={{ height: 25, width: 25, backgroundColor: '#DB4437', borderRadius: 50 }}></View>
                </View>}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </>
    );
  };
  const renderItem = ({ item, navigation, index }) => {
    return (
      <>
        {console.log('item' + item)}
        {/* {index >= prev && index < next ?  */}
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Item
            index={index}
            Email={item[0].userEmail}
            Address={item[0].userAddress}
            Phoneno={item[0].userPhoneno}
            userID={item[0].userID}
            Photo={item[0].userPhoto}
            navigation={navigation}
          />
        </View>
        {/* : null} */}
        {console.log(item)}
      </>
    );
  };
 const keyExtractor = useCallback((item, index) => index.toString(), []);

  return (
    <>
      <MenuProvider>
        <View style={{ flex: 1, backgroundColor: back }}>
          <View style={styles.header}>
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
              <Image source={array.length == 0 ? require('../../assates/svg/Plus.png') : require('../../assates/svg/Dustbin.png')} style={{ height: array.length == 0 ? 60 : 50, width: array.length == 0 ? 60 : 50 }} />
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', flexDirection: 'column', alignItems: 'center', paddingTop: 25, backgroundColor: back }}>
            <View style={{ width: '85%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
              <TextInput
                style={styles.textInputStyle}
                value={search}
                placeholder="Search Item"
                placeholderTextColor={textColor}
                onChangeText={text => searchFilter(text)}
                color={textColor}
              >
              </TextInput>
              <Cross width={search != '' ? 15 : 0} height={search != '' ? 15 : 0} onPress={() => { searchFilter('') }} />
            </View>
            <View style={styles.Divider}>
              <Divider width={2} style={{ width: '85%' }} color={'pink'} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%', alignItems: 'center', marginVertical: 5 }}>

            <View style={{ width: '85%', flexDirection: 'row', justifyContent: 'flex-end' }}>
              {prev == 0
                ? <Image source={require('../../assates/svg/BlankLeft.png')} style={{ height: 25, width: 25 }} />
                : <TouchableOpacity onPress={() => { setnext(next => next - 10); setprev(prev => prev - 10) }}>
                  <Image source={require('../../assates/svg/Left.png')} style={{ height: 25, width: 25 }} />
                </TouchableOpacity>}
              {/* {res == 1 && next > Post[IndexOf].item.length - 1
                ? <Image source={require('../../assates/svg/BlankRight.png')} style={{ height: 25, width: 25 }} />
                : <TouchableOpacity onPress={() => { setnext(next => next + 10); setprev(prev => prev + 10) }}>
                  <Image source={require('../../assates/svg/Right.png')} style={{ height: 25, width: 25 }} />
                </TouchableOpacity>} */}
            </View>
          </View>
          <View style={{ flex: 1, backgroundColor:back }}>
            {res == 1 ? <FlatList
              data={[Post]}
              renderItem={({ item, index }) => renderItem({ navigation, item, index })}
              keyExtractor={keyExtractor}
            /> : null}

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
              style={styles.customerTextInput}
              placeholder="Item Name"
              placeholderTextColor="#DB4437"
              onChangeText={(Name) => setItemName(Name)}
              autoComplete={'off'}
            />
            <TextInput
              style={styles.customerTextInput}
              placeholder="Item Prize"
              placeholderTextColor="#DB4437"
              onChangeText={(prize) => setItemPrize(prize)}
              autoComplete={'off'}
            />
            <TextInput
              style={styles.customerTextInput}
              placeholder="Item Type"
              placeholderTextColor="#DB4437"
              onChangeText={(type) => setItemType(type)}
              autoComplete={'off'}
            />
            <TextInput
              style={styles.customerTextInput}
              placeholder="Star"
              placeholderTextColor="#DB4437"
              onChangeText={(star) => setItemType(star)}
              autoComplete={'off'}
            />
            <TextInput
              style={styles.customerTextInput}
              placeholder="Item color"
              placeholderTextColor="#DB4437"
              onChangeText={(color) => setItemType(color)}
              autoComplete={'off'}
            />
            <TextInput
              style={styles.customerTextInput}
              placeholder="Item weightInKg"
              placeholderTextColor="#DB4437"
              onChangeText={(weight) => setItemType(weight)}
              autoComplete={'off'}
            />
            <TouchableOpacity onPress={addItem} style={{ flexDirection: "row", justifyContent: "center" }}>
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
              keyExtractor={keyExtractor}
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
