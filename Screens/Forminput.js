import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Forminput = (props) => {
    const {placeholder,lable} = props;
  return (
    <View>
      <Text style={{fontWeight:'bold'}}>{lable}</Text>
      <TextInput
      {...props}
      numberOfLines={1}
      placeholder={placeholder}
        style={styles.input}
      />
    </View>
  )
}

export default Forminput

const styles = StyleSheet.create({

    input: {
      borderWidth: 1,
      borderColor: '#1b1b33',
      height: 50,
      borderRadius: 10,
      fontSize: 16,
      paddingLeft: 10,
      marginBottom:20,
      backgroundColor: '#fff',
    }
})