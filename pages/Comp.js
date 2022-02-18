import {View, Text} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

const Comp = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 40,
        position: 'absolute',
        width: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: 'black',
          width: '90%',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 10,
          padding: 10,
        }}>
        <Text style={{color: 'red'}}>3 Devices selected</Text>
        <Image
          source={{
            uri: 'https://img.icons8.com/plumpy/32/000000/macos-close.png',
          }}
          style={{height: 30, width: 30}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          justifyContent: 'center',
          borderRadius: 10,
          padding: 10,
          backgroundColor: '#93C572',
          marginTop: 20,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 5},
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          elevation: 10,
        }}>
        <Text style={{color: 'white', fontSize: 25}}>Choose Template</Text>
      </View>
    </View>
  );
};

export default Comp;
