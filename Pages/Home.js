import React from 'react'
import { useState } from 'react';
import Modal from 'react-native-modal';
import { View, Image, FlatList, TouchableWithoutFeedback, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import Cross from '../assates/svg/Cross.svg'

const Home = ({ navigation }) => {

  const [USER, setUSER] = useState([
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

  const [successful, setsuccessful] = useState(false);
  const [user, setuser] = useState('');
  const [image, setimage] = useState('');

  const [search, setsearch] = useState('');
  const [autoFocus, setautoFocus] = useState(false);

  const searchFilter = text => {
    if (text.trim()) {
      setautoFocus(true);
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
      USER.push({
        user: user,
        image: image
      })
      setsuccessful(false);
    }
    setuser('');
    setimage('');
  }

  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.header}>
          <Text style={{ color: '#fff', fontSize: 30 }}>Customers List</Text>
          <TouchableOpacity style={{ top: '50%', position: 'absolute', right: '15%', height: "100%", justifyContent: "center" }} onPress={() => setsuccessful(true)}>
            <Image source={require('../assates/Plus.png')} style={{ height: 60, width: 60 }} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            width: '100%',
            justifyContent: 'center',
            alignItems: "center",
            backgroundColor: '#fff',
          }}>
          <View style={{ width: '100%', flexDirection: 'column', alignItems: 'center' }}>
          <View style={{width:'85%',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
            <TextInput
              style={styles.textInputStyle}
              value={search}
              placeholder="Search here"
              placeholderTextColor="black"
              onChangeText={text => searchFilter(text)}
              autoFocus={autoFocus}
              >
            </TextInput>
          <Cross width={15} height={15} onPress={() => {
            searchFilter('');
            setautoFocus(false);
            } }/>
            </View>
            <View style={styles.Divider}>
        <Divider width={2} style={{ width: '85%' }} color={'pink'} />
    </View>
          </View>
        </View>
        <View style={{ height: '90%', width: '100%' }}>
          <View style={{ top: 30, paddingBottom: 25 }}>
            <FlatList
              data={USER}
              renderItem={({ item }) =>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Customers', { Name: item.user })}>
                  <View key={Date.now} style={styles.listItem}>
                    <Image source={{ uri: item.image }} style={styles.story} />
                    <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#00203FFF", borderTopLeftRadius: 20, borderBottomLeftRadius: 0, borderBottomRightRadius: 20, marginLeft: 15 }}>
                      <Text style={styles.text}>{item.user.toUpperCase()}</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              }
            />
          </View>
        </View>
      </View>
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
            paddingVertical: 20,
            backgroundColor: 'white'
          }}>
          <TextInput
            style={[styles.textInput, { width: '90%', marginLeft: 5 }]}
            placeholder="User Name"
            placeholderTextColor="#2d333a"
            onChangeText={(Name) => setuser(Name)}
            autoComplete={'off'}
          />
          <TextInput
            style={[styles.textInput, { width: '90%', marginLeft: 5 }]}
            placeholder="User Image"
            placeholderTextColor="#2d333a"
            onChangeText={(image) => setimage(image)}
            autoComplete={'off'}
          />
          <TouchableOpacity onPress={addItem} style={{ justifyContent: "center", flexDirection: "row" }}>
            <View style={styles.button}>
              <Text style={{ color: "#fff", fontSize: 20 }}>ADD</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  )
}
const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginBottom: 10,
    borderBottomRightRadius: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    backgroundColor: '#ADEFD1FF'
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
    fontSize: 15,
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