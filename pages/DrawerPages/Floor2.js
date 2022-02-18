import { View, Text, TouchableOpacity, Button  } from 'react-native';
import React from 'react';
import { useState } from 'react';


const Floor2 = ({navigation}) => {

  const [car, setCar] = useState({
   long:0,
   array:[]
  });

  const updateColor = () => {
    setCar(previousState => {
      return { long: 1, array: [...previousState.array,2] };
    });
    
  }
  console.log(car.long);
  console.log(car.array);

  return (
    <>
    
    <Button
  onPress={updateColor}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
  </>
  );
};

export default Floor2;
