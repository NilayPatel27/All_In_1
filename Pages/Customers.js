import React from 'react'
import { Customer } from './styles'
import { useState } from 'react';
import Cross from '../assates/svg/Cross.svg'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { FlatList, Image, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'



const Customers = ({ route, navigation }) => {
  let color = '#fff'
  const { Name } = route.params;

  const [ITEM, setITEM] = useState([
    {
      item: 'Item 1',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 2',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 3',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 4',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 5',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 6',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 7',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 8',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 9',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 10',
      prize: 10,
      type: 'fruits'
    }

  ]);
  const [NEWITEM, setNEWITEM] = useState([
    {
      item: 'Item 1',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 2',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 3',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 4',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 5',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 6',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 7',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 8',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 9',
      prize: 10,
      type: 'fruits'
    },
    {
      item: 'Item 10',
      prize: 10,
      type: 'fruits'
    }

  ]);
  const [search, setsearch] = useState('');

  const searchFilter = text => {
    if (text.trim()) {
      const newData = NEWITEM.filter(item => {
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

  const header = (text) =>
    <View style={{ justifyContent: 'flex-start', flexDirection: "row", height: '100%', alignItems: "center" }}>
      <Text style={{ color, fontSize: 20 }}>{text}</Text>
    </View>

  const text = (Name, col, content) =>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, marginVertical: 5 }}>
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
      <View style={{ width: '100%', flexDirection: 'column', alignItems: 'center', paddingTop: 25, backgroundColor: '#fff' }}>
        <View style={{ width: '85%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <TextInput
            style={Customer.textInputStyle}
            value={search}
            placeholder="Search Item"
            placeholderTextColor="black"
            onChangeText={text => searchFilter(text)}
          >
          </TextInput>
          <Cross width={search != '' ? 15 : 0} height={search != '' ? 15 : 0} onPress={() => { searchFilter('') }} />
        </View>
        <View style={Customer.Divider}>
          <Divider width={2} style={{ width: '85%' }} color={'pink'} />
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <FlatList
          data={ITEM}
          renderItem={({ item }) =>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Item', { Name: item.item })}>
              <View key={Date.now} style={Customer.listItem}>
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