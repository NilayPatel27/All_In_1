import { View, Image, FlatList, TouchableWithoutFeedback, StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Plus from './assates/Plus.png'
import { useState } from 'react';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { USER } from './data';

let indexValues = [];
let long = 0;
let count = 0;
let SnackBar = 0;
const App = () => {

  return (
    <>
      <View style={{ height: '100%', width: '100%', flexDirection: 'column', justifyContent: 'space-between' }}>
        <View style={{ height: '20%', width: '100%', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: '#2d333a', fontSize: 30 }}>Customer List</Text>
        </View>
        <View style={{ height: '80%', width: '100%', borderTopColor: '#2d333a', borderWidth: 1, borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, paddingBottom: 25 }}>
          <TouchableOpacity style={{ backgroundColor: 'red', width: '100%', top: '-8%', flexDirection: 'row' }}>
            <Image source={require('./assates/Plus.png')} style={{ height: 60, width: 60, position: 'absolute', right: '15%', justifyContent: 'center', }} />
          </TouchableOpacity>
          <View style={{ top: 30, height: '100%' }}>
            <FlatList
              data={USER}
              renderItem={({ item }) =>
                <View key={Date.now} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 25, marginBottom: 10 }}>
                  <Image source={{ uri: item.image }}
                    style={styles.story} />
                  <Text style={{ color: '#2d333a' }}>{item.user.toLowerCase()}
                  </Text>
                </View>}
            />
          </View>
        </View>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  item: {
    paddingVertical: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    borderRadius: 6,
  },
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 8,
    borderWidth: 3,
    borderColor: '#ff8501'
  },
  title: {
    fontSize: 18,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    // margin: 5,
    borderColor: '#009688',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 20,
    width: '85%'
  },
  renderItemStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    backgroundColor: 'white',
  },
  riv: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '80%',
    alignItems: 'flex-start',
    // backgroundColor:'pink'
  },
});

export default App