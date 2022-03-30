import React, { useCallback, useContext } from 'react'
import axios from 'axios';
import { styles } from './styles'
import Modal from 'react-native-modal';
import { useState, useEffect } from 'react';
import Cross from '../../assates/svg/Cross.svg';
import { Formik } from 'formik';
import Snackbar from 'react-native-snackbar';
import SelectDropdown from 'react-native-select-dropdown';
import { ThemeContext } from '../Context/themeContext';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { Button, FlatList, Image, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View ,Switch} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

let indexValues = [];
let idValues = [];
let long = 0;
let count = 0;
let SnackBar = 0;
const Item = ({ route, navigation }) => {
  const { back, textColor } = useContext(ThemeContext);
  const { IndexOfCustomer, ItemName, ID, token } = route.params;
  const [Post, setPost] = useState(); // set Api data
  const [CopyPost, setCopyPost] = useState(''); // for show copy post
  const [res, setres] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
    setregister({ ...register, IsActive: !isEnabled })
  }
  const [categoryNames, setcategoryNames] = useState([]);

  // const [arr, setarr] = useState(0);
  let arr = []
  useEffect(() => {
    console.log('DataBase Connected');
    getPost();

  }, []);

  //call API DATA
  const getPost = () => {
    console.log(ID)
    axios.get("http://192.168.0.104:8080/api/Item/GetAllItemByCustomer?Id="+ID, { headers: { Authorization: `Bearer ${token}` } })
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
    console.log(Post)
  }
  const [array, setarray] = useState([]);

  let color = '#fff'
  const [model, setModel] = useState(false);
  const [DELETE, setDELETE] = useState(false);
  const [ItemNames, setItemName] = useState('');
  const [Edit, setEdit] = useState(false);

  const [search, setsearch] = useState('');
  const [user, setuser] = useState('');
  const [singleFile, setSingleFile] = useState([])

  const openDocumentFile = async () => {
    try {
      const file = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images]
      })
      // setregister({ ...register, userPhoto: file.uri })
      setSingleFile(file);
      // console.log(file instanceof Object)
    }
    catch (err) {
      setSingleFile(null)
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled')
      } else {
        alert('unknown error: ' + JSON.stringify(err))
        throw err
      }
    }
  }
  const [register, setregister] = useState({
    ItemCode: '',
    ItemName: '',
    ItemDescription: '',
    ItemPrice: '',
    CategoryId:'',
    UserId: '',
    ItemImage: '',
    IsActive: '',
  });
  const registerCustomer = () => {
    let formDatas = new FormData();
   
    formDatas.append('ItemCode', register.ItemCode);
    formDatas.append('ItemName', register.ItemName);
    formDatas.append('ItemDescription', register.ItemDescription);
    formDatas.append('ItemPrice', register.ItemPrice);
    formDatas.append('CategoryId', register.CategoryId);
    formDatas.append('UserId', ID);
    formDatas.append('ItemImage', {
      uri: singleFile.uri,
      name: singleFile.name,
      type: singleFile.type
    });
    formDatas.append('IsActive', register.IsActive);
    
    fetch('http://192.168.0.104:8080/api/Login/RegisterCustomer', {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formDatas
    })
      .then(response => console.log(response))
      .then(() => {
        getPost();
        setModel(false);
      }).catch(err => console.log(err))
  }
  
  const searchFilter = text => {
    if (text.trim()) {
      const newData = Post.filter(item => {
        const itemData = item.categoryName
          ? item.categoryName.trim().toLowerCase()
          : ''.toUpperCase();
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
  const addItem = async () => {
    let formData = new FormData();
    formData.append('categoryName', `${ItemNames}`),
      // fetch('http://192.168.0.104:8080/api/Category/InsertCategory', {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "multipart/form-data",
      //     Authorization: `Bearer ${token}`
      //   },
      //   body: formData
      // })
      //   .then(response => console.log(response))
      //   .then(()=>{
      //     getPost();
      //     setModel(false);
            
      //   })
      //   .catch(error => console.log(error));

        axios.post('http://192.168.0.104:8080/api/Category/InsertCategory', {
          categoryName: `${ItemNames}`
        }, { headers: { Authorization: `Bearer ${token}` } })

        .then(res => {
          console.log(res)
          getPost();
          setModel(false);
        }
          )
  }
  const updateItem = async (updateID) => {
    let formDatas = new FormData();
    formDatas.append('CategoryName', `${ItemNames}`),
      formDatas.append('id', updateID),
      // fetch('http://192.168.0.104:8080/api/Category/UpdateCategory', {
      //   method: "PUT",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "multipart/form-data",
      //     Authorization: `Bearer ${token}`
      //   },
      //   body: formDatas
      // })
      //   .then(response => console.log(response.json()))
      //   .then(() => {
      //     getPost();
      //     setEdit(false);
      //   })
      axios.put('http://192.168.0.104:8080/api/Category/UpdateCategory', {
        CategoryName: `${ItemNames}`,
        id: updateID
      }, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
          console.log(res)
          getPost();
          setEdit(false);
        }
          )
  }

  const [modelData, setmodelData] = useState([]);
  const DELETEITEM = () => {
    console.log(idValues);
    modelData.length = 0;
    for (let i = 0; i < array.length; i++)
      modelData.push(idValues[i]);
    setDELETE(true);
  }
  const deleteItem = () => {
    for (let i = 0; i < modelData.length; i++) {
      console.log(modelData[i]);
      // fetch('http://192.168.0.104:8080/api/Category/DeleteCategory?id='+modelData[i], {
      //   method: "DELETE",
      //   headers: {
      //     Accept: "application/json",
      //     Authorization: `Bearer ${token}`
      //   }
      // })
      //   .then(response => console.log(response.json()))
      //   .then(() => {
      //     getPost();
      //     setDELETE(false);
      //   })

      axios.delete('http://192.168.0.104:8080/api/Category/DeleteCategory?id='+modelData[i],{
        headers: { Authorization: `Bearer ${token}` }
      })

        .then(res => {
          console.log(res)
          getPost();
          setDELETE(false);
        }
          )

      }

    
    setDELETE(false);
    setarray([]);
    indexValues.length = 0;
    idValues.length = 0;
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
  const [updateID, setupdateID] = useState('')
  
  const Item = ({ index, itemName, navigation, id,itemPrice }) => {
    arr.push(id);
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

      let idxValues = indexValues.indexOf(index);

      long = 1;
      if (idxValues > -1) {
        indexValues.splice(idxValues, 1);
        idValues.splice(idxValues, 1);
        count = count - 1;
        setIndex(!Index);
      }
      else {
        indexValues.push(index);
        idValues.push(id);
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
          idValues.push(id);
          setIndex(!Index);
        } else {
          let id = indexValues.indexOf(index);
          if (id > -1) {
            indexValues.splice(id, 1);
            idValues.splice(id, 1);
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
      } else {
        setEdit(true);
        setupdateID(id);
        console.log(id);
        // navigation.navigate('AddItem', { ID: id ,token:token});
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
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly", backgroundColor: back }}>
          <View key={index} style={[styles.itemListItem, { width: '85%' }]}>
            <View style={{ height: '100%', width: '100%', justifyContent: "center", backgroundColor: '#fff' }}>
              {text('Name', itemName.toUpperCase())}
              {text('Price', itemPrice)}
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
            itemName={item.itemName}
            itemPrice={item.itemPrice}
            navigation={navigation}
            id={item.itemId}
          />
        </View>
      </>
    );
  };
  const keyExtractor = useCallback((item, index) => index.toString(), []);

  return (
    <>
      <View style={{ flex: 1, backgroundColor: back }}>
        <View style={styles.itemHeader}>
          {header('Items')}
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
        {res == 1 ?
          <FlatList
            data={Post}
            renderItem={({ item, index }) => renderItem({ navigation, item, index })}
            keyExtractor={keyExtractor}
            // ListEmptyComponent={() => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'red' }}>
            //   <Text style={{ fontSize: 20, color: '#000' }}>No Item Found</Text>
            // </View>}
          /> : null}
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
          <View>
          <View style={styles.modelview}>
            <TextInput
              style={[styles.homeTextInput, { width: '90%', marginLeft: 5 }]}
              placeholder="Item Code"
              placeholderTextColor="#2d333a"
              onChangeText={(ItemCode) => setregister({ ...register, ItemCode })}
              autoComplete={'off'}
            />
            <TextInput
              style={[styles.homeTextInput, { width: '90%', marginLeft: 5 }]}
              placeholder="Item Name"
              placeholderTextColor="#2d333a"
              onChangeText={(ItemName) => setregister({ ...register, ItemName })}
              autoComplete={'off'}
            />
            <TextInput
              style={[styles.homeTextInput, { width: '90%', marginLeft: 5 }]}
              placeholder="Item Description"
              placeholderTextColor="#2d333a"
              onChangeText={(ItemDescription) => setregister({ ...register, ItemDescription })}
              autoComplete={'off'}
            />
            <TextInput
              style={[styles.homeTextInput, { width: '90%', marginLeft: 5 }]}
              placeholder="Item Price"
              placeholderTextColor="#2d333a"
              onChangeText={(ItemPrice) => setregister({ ...register, ItemPrice })}
              autoComplete={'off'}
            />
            <TextInput
              style={[styles.homeTextInput, { width: '90%', marginLeft: 5 }]}
              placeholder="Category id"
              placeholderTextColor="#2d333a"
              onChangeText={(CategoryId) => setregister({ ...register, CategoryId })}
              autoComplete={'off'}
            />

            <Button
              title="Open Document Picker"
              onPress={openDocumentFile}
            />
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}

            />
            <TouchableOpacity onPress={registerCustomer} style={{ justifyContent: "center", flexDirection: "row" }}>
              <View style={styles.Add}>
                <Text style={{ color: "#fff", fontSize: 20 }}>ADD</Text>
              </View>
            </TouchableOpacity>
          </View>
          </View>
        </View>
      </Modal>
      <Modal
        isVisible={Edit}
        animationType={'slide'}
        transparent={true}
        onRequestClose={() => {
          setEdit(false);
        }}
        onBackdropPress={() => {
          setEdit(false);
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
          <Text style={{ color: 'red' }}>{updateID}</Text>
          <View>
            <TextInput
              style={styles.textInputStyle}
              placeholder="Update Name"
              placeholderTextColor={textColor}
              onChangeText={texts => setItemName(texts)}
              color={textColor}
            />
          </View>
          <TouchableOpacity onPress={() => updateItem(updateID)} style={{ justifyContent: "center", flexDirection: "row" }}>
            <View style={styles.Add}>
              <Text style={{ color: "#fff", fontSize: 20 }}>Update</Text>
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
    </>
  )
}

export default Item;