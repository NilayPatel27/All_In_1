import { View, Text } from 'react-native'
import React from 'react'

const Item = ({route,navigation}) => {
  const { Name } = route.params;

  return (
    <View>
      <Text style={{color:'red'}}>{Name.toUpperCase()}</Text>
    </View>
  )
}

export default Item