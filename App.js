import { View, Image, FlatList, TouchableWithoutFeedback, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native'
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
  const [filterData, setfilterData] = useState(
    (listArray = [
      {
        title: '1st Floor GW 01',
        Active: 10,
        InActive: 1,
        Mac_ID: '8b:f2:5e:f7:83:dc',

      },
      {
        title: '2nd Floor GW 02',
        Active: 1,
        InActive: 10,
        Mac_ID: '6e:b7:32:d4:27:4a',
      },
      {
        title: '3rd Floor GW 03',
        Active: 9,
        InActive: 2,
        Mac_ID: '5c:da:a5:76:b5:d0',
      },
      {
        title: '4th Floor GW 04',
        Active: 8,
        InActive: 3,
        Mac_ID: '1c:60:63:31:88:3e',
      },
      {
        title: '5th Floor GW 05',
        Active: 7,
        InActive: 4,
        Mac_ID: 'c7:04:ff:a8:38:75',
      },
      {
        title: '6th Floor GW 06',
        Active: 6,
        InActive: 5,
        Mac_ID: '50:96:6b:d0:9b:b8',
      },
    ]),
  );
  const [select, setselect] = useState(-1);

  const Item = ({ index, Mac_ID, navigation }) => {
    let state = ['Online', 'Offline'];
    let send = ['sent', 'notsent'];

    const [Index, setIndex] = useState(0);
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
      };

      if (select == 1) {
        setselect(-1);
      }
    }
    return (
      // #ffffe0
      <TouchableWithoutFeedback
        onLongPress={onLongPressButton}
        onPress={onPress}>
        <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-evenly", backgroundColor: 'white' }}>
          {indexValues.indexOf(index) == -1 ? null
            : <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
              <Dot width={15} height={15} />
            </View>}
          <View style={[styles.renderItemStyle, { width: indexValues.indexOf(index) == -1 ? '90%' : '75%' }]}>
            <View style={{ backgroundColor: '#1e90ff', width: '100%', borderTopRightRadius: 10, borderTopLeftRadius: 10, flexDirection: 'row', justifyContent: 'center' }}>
              <View style={styles.riv}>
                <View style={{ marginTop: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                  <Text style={{ color: 'white', fontWeight: '400' }}>Mac ID</Text>
                  <Text style={{ color: 'white', fontWeight: '400', position: 'absolute', left: '45%' }}>:</Text>
                  <Text style={{ color: 'white', fontWeight: '400', position: 'absolute', left: '55%' }}>{Mac_ID}</Text>
                </View>
                <View style={{ marginTop: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                  <Text style={{ color: 'white', fontWeight: '400' }}>Date</Text>
                  <Text style={{ color: 'white', fontWeight: '400', position: 'absolute', left: '45%' }}>:</Text>
                  <Text style={{ color: 'white', fontWeight: '400', position: 'absolute', left: '55%' }}>08/02/2022</Text>
                </View>
              </View>
              <View style={{ backgroundColor: state[index % state.length] == 'Online' ? 'lightgreen' : 'red', height: 15, width: 15, borderTopRightRadius: 10, borderBottomLeftRadius: 20, position: 'absolute', top: 0, right: 0 }}>
              </View>
            </View>
            <Divider width={1} orientation='vertical' />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%',
                backgroundColor: 'white',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10
              }}>
              <View style={styles.riv}>
                <View style={{ marginTop: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                  <Text style={{ color: '#2D333A', fontWeight: '400' }}>Last Accessed</Text>
                  <Text style={{ color: '#2D333A', fontWeight: '400', position: 'absolute', left: '45%' }}>:</Text>
                  <Text style={{ color: '#2D333A', fontWeight: '400', position: 'absolute', left: '55%' }}>CurrentDate</Text>
                </View>
                <View style={{ marginTop: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                  <Text style={{ color: '#2D333A', fontWeight: '400' }}>State</Text>
                  <Text style={{ color: '#2D333A', fontWeight: '400', position: 'absolute', left: '45%' }}>:</Text>
                  <Text style={{ color: '#2D333A', fontWeight: '400', position: 'absolute', left: '55%' }}>{state[index % send.length]}</Text>
                </View>
              </View>

              <View style={{ position: 'absolute', bottom: 0, right: 0, width: '25%', height: '40%' }}>
                <View style={{ height: 20, backgroundColor: '#1e90ff', height: '100%', borderBottomRightRadius: 10, borderTopLeftRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    {send[index % send.length]}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const renderItem = ({ item, index }) => {
    return (
      <>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Item
            title={item.title}
            index={index}
            Mac_ID={item.Mac_ID}
            indexValues={indexValues}
          />
        </View>
      </>
    );
  };
  return (
    <>
      <SafeAreaView>
        <View style={{ height: '100%', width: '100%',flexDirection:'column',justifyContent:'space-between' }}>
          <View style={{ height: '20%', width: '100%', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#2d333a', fontSize: 30 }}>Customer List</Text>
          </View>
          <View style={{ height: '80%',width: '100%', borderTopColor: '#2d333a', borderWidth: 1, borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0,paddingBottom:25}}>
            <Image source={require('./assates/Plus.png')} style={{ height: 60, width: 60, position: 'absolute', right: '15%', justifyContent: 'center', top: '-6%', }} />
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
      </SafeAreaView>
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