import React from 'react'
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native'
import Header from './pages/header'
import { useColorScheme } from 'react-native';

const pages = ({navigation}) => {
  const scheme = useColorScheme();
    let text=scheme === 'dark'? 'white'  :'black';
    let back=scheme === 'dark'? 'black'  :'white';
  return (
    <>  
    <View>
    <Header navigation={navigation}/>
    <ScrollView >
      <View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={()=>navigation.push('Animation')}
            title="Animation"
            color="#0d1137"
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={()=>navigation.push('Product')}
            title="Product"
            color="#e52165"
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={()=>navigation.push('Validation')}
            title="Validation"
            color="#0d1137"
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={()=>navigation.push('DrawerNavigation')}
            title="DrawerNavigation"
            color="#e52165"
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={()=>navigation.push('ModelPop')}
            title="ModelPop"
            color="#0d1137"
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={()=>navigation.push('Api')}
            title="Api"
            color="#e52165"
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={()=>navigation.push('Otp')}
            title="Otp"
            color="#0d1137"
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={()=>navigation.push('Floor1')}
            title="Floor1"
            color="#0d1137"
            style={styles.button}
          />
        </View>
        

      </View>

    </ScrollView>
    </View>  
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: "white"
  },
  buttonContainer: {
    margin: 20,
  },
  button: {
    width: 100,
  }
})

export default pages