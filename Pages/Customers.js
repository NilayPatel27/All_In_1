import { FlatList, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { ITEM } from '../Data/ItemData';
import {Customer} from './styles'


const Customers = ({ route, navigation }) => {
  let color = '#fff'
  const { Name } = route.params;

  const header = (text) =>
    <View style={{ justifyContent: 'flex-start', flexDirection: "row", height: '100%', alignItems: "center" }}>
      <Text style={{ color, fontSize: 20 }}>{text}</Text>
    </View>

  const text = (Name, col, content) =>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25 }}>
      <Text style={Customer.text}>{Name}</Text>
      <Text style={Customer.col}>{col}</Text>
      <Text style={Customer.text}>{content}</Text>
    </View>

  return (
    <>
      <View style={Customer.header}>
        {header('CUSTOMER NAME')}
        {header(Name.toUpperCase())}
      </View>
      <View style={{ height: "90%", paddingTop: 30 }}>
        <FlatList
          data={ITEM}
          renderItem={({ item }) =>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Item', { Name: item.item })}>
              <View key={Date.now} style={Customer.listItem}>
                <Image source={{ uri: item.image }} style={Customer.story} />
                <View style={Customer.details}>
                  {text('Name', ':', item.item.toUpperCase())}
                  {text('Prize', ':', item.prize)}
                  {text('Type', ':', item.type.toUpperCase())}
                </View>
              </View>
            </TouchableWithoutFeedback>
          }
        />
      </View>
    </>
  )
}

export default Customers

