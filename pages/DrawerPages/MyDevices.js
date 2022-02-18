import React from 'react';
import data from './data';
import { useState } from 'react';
import { Transition, Transitioning } from 'react-native-reanimated';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, FlatList, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import Menu from '../../assates/svg/menu.svg';


const transition = (
  <Transition.Together>
    <Transition.In type='fade' durationMs={200} />
    <Transition.Change />
    <Transition.Out type='fade' durationMs={200} />
  </Transition.Together>
);

export default function MyDevices({ navigation }) {
  const [filterData, setfilterData] = React.useState(
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
  const Item = ({ index, Mac_ID }) => {
    let state = ['Online', 'Offline'];
    let send = ['sent', 'notsent'];

    const [Index, setIndex] = useState(0);
    return (
      // #ffffe0
      <TouchableWithoutFeedback>
        <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-evenly", backgroundColor: 'white' }}>
          <View style={[styles.renderItemStyle, { width: '90%' }]}>
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
        {/* <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}> */}
        <Item
          title={item.title}
          index={index}
          Mac_ID={item.Mac_ID}
        />
        {/* </View> */}
      </>
    );
  };
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const ref = React.useRef();

  return (
    <>
      <Transitioning.View
        ref={ref}
        transition={transition}
        style={styles.container}
      >
        <StatusBar
          animated={true}
          backgroundColor="#335252"
          barStyle={'light-content'}
        />
        <View style={{ height: '100%', width: '100%', flexDirection: 'column', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center', position: 'absolute', top: 0, paddingHorizontal: 15, height: '10%', backgroundColor: "#335252" }}>
            <Menu width={18} height={18} onPress={() => navigation.openDrawer()} />
            <Text style={{ color: '#fff', fontWeight: '600', fontSize: 20 }}>Devices</Text>
            <View style={{ height: 18, width: 18 }}></View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', height: '100%', alignItems: 'center' }}>
            <ScrollView >
              {data.map(({ bg, color, category }, index) => {
                return (
                  <TouchableOpacity
                    key={category}
                    onPress={() => {
                      ref.current.animateNextTransition();
                      setCurrentIndex(index === currentIndex ? null : index);
                    }}
                    style={styles.cardContainer}
                    activeOpacity={0.9}>
                    <View style={[styles.card, { backgroundColor: bg }]}>
                      <Text style={[styles.heading, { color }]}>{category}</Text>

                      {index === currentIndex && <FlatList
                        data={filterData}
                        renderItem={renderItem}
                      />}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Transitioning.View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  cardContainer: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    position: 'relative',

  },
  heading: {
    fontSize: 38,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -2,
  },
  body: {
    fontSize: 20,
    lineHeight: 20 * 1.5,
    textAlign: 'center',
  },
  subCategoriesList: {
    marginTop: 20,
  },
  item: {
    paddingVertical: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    borderRadius: 6,
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