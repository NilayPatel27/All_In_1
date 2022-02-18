import { View } from 'react-native'
import React from 'react'
import Plus from './assates/svg/Plus.svg'

const App = () => {
  return (
    <>
      <View style={{ height: '100%', width: '100%' }}>
        <View style={{ backgroundColor: 'red', height: '30%', width: '100%' }}>
          
        </View>
        <View style={{ backgroundColor: 'yellow', height: '70%', width: '100%' }}>
        <Plus width={18} height={18} style={{position:'absolute',right:0}} />
        </View>
      </View>
    </>
  )
}

export default App