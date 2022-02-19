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
      <View style={{ flex: 1 }}>
        <View style={{ height: '15%', width: '100%', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: '#2d333a', fontSize: 30 }}>Customers List</Text>
        </View>
        <View style={{ height: '85%', width: '100%', borderTopColor: '#2d333a', borderWidth: 1, borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, }}>
          <TouchableOpacity style={{ bottom: '95.5%', position: 'absolute', right: '15%' }}>
            <Image source={require('./assates/Plus.png')} style={{ height: 60, width: 60 }} />
          </TouchableOpacity>
          <View style={{ top: 30, paddingBottom: 25 }}>
            <FlatList
              data={USER}
              renderItem={({ item }) =>
                <TouchableWithoutFeedback>
                  <View key={Date.now} style={styles.listItem}>
                    <Image source={{ uri: item.image }} style={styles.story} />
                    <View style={{flex:1,justifyContent:"center",backgroundColor:"#e90c59",borderTopLeftRadius:20,borderBottomLeftRadius:0,borderBottomRightRadius:20,marginLeft:15}}>
                    <Text style={styles.text}>{item.user.toUpperCase()}</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              }
            />
          </View>
        </View>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginBottom: 10,
    borderBottomRightRadius:20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    backgroundColor:'#46dff0'
  },
  item: {
    paddingVertical: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    borderRadius: 6,
  },
  story: {
    width: 55,
    height: 55,
    borderRadius: 50,
    // borderWidth: 1,
    // borderColor: '#2d333a',
    margin:5,
    marginLeft:15
  },
  title: {
    fontSize: 18,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff', 
    fontSize: 15, 
    alignSelf: 'center', 
    fontWeight: 'bold'
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