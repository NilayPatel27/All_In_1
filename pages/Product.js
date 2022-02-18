import React from 'react'
import { View, Text,StyleSheet, Button } from 'react-native'
import Header from './header'

const Product = ({navigation}) => {
    return (
        <View>
        <Header navigation={navigation} />
        <View style={{justifyContent:'center'}}>
        <Button
            onPress={()=>navigation.push('Product1')}
            title="Camera"
            color="red"
            style={styles.button}
          />
          <Button
            onPress={()=>navigation.push('Product2')}
            title="Product 2"
            color="red"
            style={styles.button}
          />
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: "white"
    },
     button: {
    width: 100,
  },
    buttonContainer: {
      margin: 20,
    },
    button: {
      width: 100,
    }
  })

export default Product
