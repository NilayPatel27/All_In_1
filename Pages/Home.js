import { View, Image, FlatList, TouchableWithoutFeedback, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { USER } from '../Data/CustomerData';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import Add from '../assates/svg/Add.svg'

const Home = ({ navigation }) => {

  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.header}>
          <Text style={{ color: '#fff', fontSize: 30 }}>Customers List</Text>
          <TouchableOpacity style={{ top: '50%', position: 'absolute', right: '15%', height: "100%", justifyContent: "center" }}>
            <Image source={require('../assates/Plus.png')} style={{ height: 60, width: 60 }} />
          </TouchableOpacity>
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
  }
});

export default Home