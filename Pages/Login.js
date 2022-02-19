import React, { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import Icon from 'react-native-vector-icons/FontAwesome';
import Log from '../assates/svg/login.svg'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onPress = ()=>{
        {email == 'admin'&& password=='admin'? navigation.navigate('Home'):console.log("invalid")}
       
    }


    return (
        <>
            <View style={styles.first}>
                <View style={styles.second}>
                    <View style={{ justifyContent: 'center', flexDirection: 'column', flex:1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: "center", marginBottom: 30,height:"20%",alignItems:"center" }}>
                            <Log name="user" style={{flex:1}} />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", marginHorizontal: 20, marginVertical: 5 }}>
                            <Icon name="user" size={25} color="#000" />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Email"
                                placeholderTextColor="#2d333a"
                                onChangeText={(email) => setEmail(email)}
                                autoComplete={'off'}
                            />
                        </View>
                        <View style={{ width: "100%", justifyContent: "center", alignItems: 'center' }}>
                            <Divider width={2} style={{ width: '90%' }} />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", marginHorizontal: 20, marginVertical:5 }}>
                            <Icon name="lock" size={25} color="#000" />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Password"
                                secureTextEntry={true}
                                placeholderTextColor="#2d333a"
                                onChangeText={(password) => setPassword(password)}
                                autoComplete={'off'}
                            />
                        </View>
                        <View style={{ width: "100%", justifyContent: "center", alignItems: 'center' }}>
                            <Divider width={2} style={{ width: '90%' }} />
                        </View>
                        <TouchableOpacity onPress={onPress} style={{justifyContent:"center",flexDirection:"row"}}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: "blue", height: 50, alignItems: "center", marginHorizontal: 20, marginVertical:10, width:'90%' }}>
                                <Text style={{ color: "#fff", fontSize: 20 }}>Login</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}
export default Login;

const styles = StyleSheet.create({
    textInput: {
        paddingBottom: 10,
        borderColor: 'gray',
        paddingLeft: 10,
        borderWidth: 0,
        borderRadius: 8,
        color: '#2d333a',
        width: '90%',
        // backgroundColor:"pink"
    },
    first: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: "center"
    },
    second: {
        width: '90%',
        height: "80%",
        justifyContent: "center",
        flexDirection: "row",
        shadowColor: 'blue',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        backgroundColor: "white"
    }
});

