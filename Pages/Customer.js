import { FlatList, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { ITEM } from '../Data/ItemData';


const Customer = ({ route, navigation }) => {
  let color = '#fff'
  const { Name } = route.params;

  return (
    <>
      <View style={{ flexDirection: 'row', height: '10%', alignItems: "center", width: "100%", backgroundColor: "#335252", paddingHorizontal: 25 }}>
        <View style={{ width: "50%", justifyContent: 'center', flexDirection: "row", height: '100%', alignItems: "center" }}>
          <Text style={{ color, fontSize: 20 }}>CUSTOMER NAME</Text>
        </View>
        <View style={{ width: "50%", justifyContent: 'flex-end', flexDirection: "row", height: '100%', alignItems: "center" }}>
          <Text style={{ color, fontSize: 20 }}>{Name.toUpperCase()}</Text>
        </View>
      </View>
      <Divider width={2} orientation='horizontal' />
      <View style={{ height: "90%", paddingTop: 30 }}>

        <FlatList
          data={ITEM}
          renderItem={({ item }) =>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Item', { Name: item.item })}>
              <View key={Date.now} style={styles.listItem}>
                <Image source={{ uri: item.image }} style={styles.story} />
                <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#e90c59", borderTopLeftRadius: 20, borderBottomRightRadius: 20, marginLeft: 15,paddingVertical:5 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25 }}>
                    <Text style={styles.text}>Name</Text>
                    <Text style={{ position: "absolute", left: "50%", color, fontWeight: "bold" }}>:</Text>
                    <Text style={styles.text}>{item.item.toUpperCase()}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25 }}>
                    <Text style={styles.text}>Prize</Text>
                    <Text style={{ position: "absolute", left: "50%", color, fontWeight: "bold" }}>:</Text>
                    <Text style={styles.text}>{item.prize}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25 }}>
                    <Text style={styles.text}>Type</Text>
                    <Text style={{ position: "absolute", left: "50%", color, fontWeight: "bold" }}>:</Text>
                    <Text style={styles.text}>{item.type.toUpperCase()}</Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          }
        />
      </View>
    </>
  )
}

export default Customer

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
    backgroundColor: '#46dff0'
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
    margin: 5,
    marginLeft: 15
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