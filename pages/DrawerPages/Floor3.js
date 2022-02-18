import * as React from 'react';
import Modal from 'react-native-modal';
import { useState } from 'react';
import { Image, Text, View, TouchableOpacity, FlatList, Dimensions } from 'react-native';
let { width } = Dimensions.get("window");
width = width - width * 0.1;
const height = width * 0.6;
console.log(width);

const Floor3 = ({ route, navigation }) => {
  // const { selectedData, Name } = route.params;

  const [slideData, setslideData] = useState(
    (listArray = [
      {
        Name: 'Walter-Desktop',
        Processor: ' Intel Core i7-8750H',
        InstalledRAM: '16 GB',
        SystemType: '64-bit Operating System',
        Edition: 'Windows 10 Pro',
        Device_Size: '7.5"',
        username: 'Admin',
      },
      {
        Name: 'Walter-Desktop',
        Processor: ' Intel Core i7-8750H',
        InstalledRAM: '16 GB',
        SystemType: '64-bit Operating System',
        Edition: 'Windows 10 Pro',
        Device_Size: '7.5"',
        username: 'Admin',
      },
      {
        Name: 'Walter-Desktop',
        Processor: ' Intel Core i7-8750H',
        InstalledRAM: '16 GB',
        SystemType: '64-bit Operating System',
        Edition: 'Windows 10 Pro',
        Device_Size: '7.5"',
        username: 'Admin',
      },
      {
        Name: 'Walter-Desktop',
        Processor: ' Intel Core i7-8750H',
        InstalledRAM: '16 GB',
        SystemType: '64-bit Operating System',
        Edition: 'Windows 10 Pro',
        Device_Size: '7.5"',
        username: 'Admin',
      },
      {
        Name: 'Walter-Desktop',
        Processor: ' Intel Core i7-8750H',
        InstalledRAM: '16 GB',
        SystemType: '64-bit Operating System',
        Edition: 'Windows 10 Pro',
        Device_Size: '7.5"',
        username: 'Admin',
      },
      {
        Name: 'Walter-Desktop',
        Processor: ' Intel Core i7-8750H',
        InstalledRAM: '16 GB',
        SystemType: '64-bit Operating System',
        Edition: 'Windows 10 Pro',
        Device_Size: '7.5"',
        username: 'Admin',
      },
      {
        Name: 'Walter-Desktop',
        Processor: ' Intel Core i7-8750H',
        InstalledRAM: '16 GB',
        SystemType: '64-bit Operating System',
        Edition: 'Windows 10 Pro',
        Device_Size: '7.5"',
        username: 'Admin',
      },

    ]),
  );

  const [slide, setslide] = useState(true);
  const ModelItem = ({ Name, DeviceSize, Username, index, Processor, InstalledRAM, SystemType, Edition }) => {
    // let colors = ['#CEFA05'];
    let state = ['Online', 'Offline'];
    let send = ['sent', 'notsent'];

    return (
      <View style={{
        flexDirection: 'column', width: '95%',
        justifyContent: 'space-evenly',
        alignItems: 'center', height: '100%',
        // backgroundColor:"white" 
      }}>
        <Image
          source={{
            uri: 'https://img.icons8.com/stickers/100/000000/console.png',
          }}
          style={{ height: '50%', width: '100%' }}
        />
        <View style={{
          flexDirection: 'row', width: '100%',
        }}>
          <View style={{ width: '100%', flexDirection: 'row', backgroundColor: '#283655', height: 150, borderRadius: 10, borderWidth: 1, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: "100%" }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Name</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>{Name}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%" }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Device Size</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>{DeviceSize}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%" }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>username</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>{Username}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%" }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Processor</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>{Processor}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%" }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Installed RAM</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>{InstalledRAM}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%" }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>System Type</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>{SystemType}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%" }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Edition</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>{Edition}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <View style={{ backgroundColor: 'lightgreen', height: 15, width: 15, borderTopRightRadius: 10, borderBottomLeftRadius: 20, position: 'absolute', top: 0, right: 0 }}>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  };
  const slideItem = ({ item, index, navigation }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width,
          height: 500,
          backgroundColor: '#2d333a',
          borderRadius: 10,
        }}>
        <ModelItem
          Name={item.Name}
          index={index}
          DeviceSize={item.Device_Size}
          Username={item.username}
          Processor={item.Processor}
          InstalledRAM={item.InstalledRAM}
          SystemType={item.SystemType}
          Edition={item.Edition}
          navigation={navigation}
        />
      </View>
    );
  };
  return (
    <>
      <Modal
        isVisible={slide}
        animationType={'slide'}
        transparent={true}
      >
        <View>
          <FlatList
            data={slideData}
            renderItem={slideItem}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </Modal>
    </>
  );
};

export default Floor3;
