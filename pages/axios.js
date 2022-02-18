import React from 'react';
//import React in our code.
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, TextInput } from 'react-native';
//import all the components we are going to use.
import axios from 'axios';
import { useState } from 'react';
import { Divider } from 'react-native-elements/dist/divider/Divider';

const Axios = () => {
  const [data, setdata] = useState([]);
  const [IdNumber, setIdNumber] = useState(0);
  (function () {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setdata(response.data))
      .catch(function (error) {
        alert(error.message);
      })
  })();
  return (
    <>
      <View style={styles.container}>
        <Text style={{ color: '#2d333a' }}>Enter Id:</Text>
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <TextInput
            style={{
              height: 40,
              borderColor: '#7a42f4',
              borderWidth: 1,
              width: '100%',
              marginTop: 10,
            }}
            onChangeText={Id => setIdNumber(Id)}

            placeholder="First name"
            // underlineColorAndroid="transparent"
            placeholder="Enter Id"
            placeholderTextColor="#9a73ef"
            autoFocus={true}
            autoCapitalize="none"
            maxLength={100}
          />
        </View>

        {data.map((data, index) => (
          (data.id == IdNumber) ?
            <View key={index}>
              <Text style={{ color: '#2d333a' }}>
                {data.id === index + 1 && 'userId :' + data.userId}
              </Text>
              <Text style={{ color: '#2d333a' }}>
                {data.id === index + 1 && 'id :' + (data.id <= 9 ? '0' + data.id : data.id)}
              </Text>
              <Text style={{ color: '#2d333a' }}>
                {data.id === index + 1 && 'id' + data.title}
              </Text>
              <Text style={{ color: '#2d333a' }}>
                {data.id === index + 1 && 'id' + data.body}
              </Text>
            </View> : null
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  buttonStyle: {
    backgroundColor: '#DDDDDD',
    width: '100%',
  },
});

export default Axios;