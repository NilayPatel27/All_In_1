import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native'
import Header from './header'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { useColorScheme } from 'react-native';


const validation = ({ navigation }) => {
  var Gender = [
    { label: 'Male', value: 0 },
    { label: 'Female', value: 1 }
  ];
  const [state, setstate] = useState(0)
  const [fname, setFirstname] = useState("");
  const [date, setDate] = useState("2016-05-15");
  const scheme = useColorScheme();
    let text=scheme === 'dark'? 'white'  :'black';
    let back=scheme === 'dark'? 'black'  :'white';



  return (
    <>
    <KeyboardAvoidingView
      behavior={"padding"}
      // style={{flex:1}}
    >
    <View>
      <Header navigation={navigation} />
      <ScrollView>
        <View >
          <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text style={{ color: 'red',fontWeight:'600',fontSize:30 }}>Form Validation</Text>
          </View>
          <TextInput
            style={styles.input}
            onValueChange={e => setFirstname(e)}
            autoCorrect={false}
            placeholder="First name"
            placeholderTextColor={text}
            autoFocus={true}
            autoCapitalize="none"
            maxLength={25}
          />
          <TextInput
            style={styles.input}
            onValueChange={e => onChangeText(e)}
            placeholder="Middle name"
            placeholderTextColor={text}
            maxLength={25}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            onValueChange={e => onChangeText(e)}
            placeholder="Last name"
            placeholderTextColor={text}
            maxLength={25}

            autoCapitalize="none"
          />
          <View >
            <RadioForm
              style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center' }}
              radio_props={Gender}
              initial={0}
              onPress={(value) => { setstate(value) }}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={text}

            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            onValueChange={e => onChangeText(e)}
            placeholder="Phone number"
            placeholderTextColor={text}
            maxLength={10}
            keyboardType='numeric'
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Country"
            placeholderTextColor={text}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="State"
            placeholderTextColor={text}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            onValueChange={e => onChangeText(e)}
            placeholder="Address"
            placeholderTextColor={text}
            maxLength={200}
            autoCapitalize="none"
            multiline={true}
          />

        </View>
      </ScrollView>
    </View>
</KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    flexWrap: 'wrap',
    borderWidth: 1,
    padding: 10,
  },
});

export default validation
