import { View, Text } from 'react-native'
import React from 'react'
import Plus from './assets/svg/plus.svg'

const App = () => {
  return (
    <>
    <View style={{height:'100%',width:'100%',flexDirection:'column'}}>
     <View style={{height:'30%',backgroundColor:'red',width:'100%'}}>
     <Plus width={18} height={18} />
     </View>
     <View style={{height:'70%',backgroundColor:'yellow',width:'100%'}}></View>
    </View>
    </>
  )
}

export default App