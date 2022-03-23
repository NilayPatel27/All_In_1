import { styles } from './styles'
import React, { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { Text, TextInput, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import axios from 'axios';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [eye, seteye] = useState('eye-with-line');
    const [pass, setpass] = useState(true);

    const onPress = () => {
        let auth ={
            "userName": email,
            "password": password
        }
        axios.post('http://192.168.0.196:8080/api/login/LoginUser',auth )
        .then(res => {
            console.log(res.data);
        })
        // email == 'admin' && password == 'admin' ? navigation.navigate('Home') : console.log("invalid")
    }
    const onPressEye = () => {
        seteye(e => e == 'eye' ? 'eye-with-line' : 'eye')
        setpass(p => !p)
    }
    const divider = <View style={styles.Divider}>
        <Divider width={2} style={{ width: '90%' }} color={'pink'} />
    </View>
    return (
        <>
            <ImageBackground source={require('../../assates/13.jpg')} resizeMode="cover" style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.second}>
                    <View style={styles.third}>
                        <View style={[styles.inputField, { justifyContent: "flex-start" }]}>
                            <Icon name="user" size={25} color="#fff" />
                            <TextInput
                                style={[styles.textInput, { width: '90%', marginLeft: 5 }]}
                                placeholder="Email"
                                placeholderTextColor="#fff"
                                onChangeText={(email) => setEmail(email)}
                                autoComplete={'off'}
                            />
                        </View>
                        {divider}
                        <View style={[styles.inputField, { justifyContent: 'space-between' }]}>
                            <Icon name="lock" size={25} color="#fff" />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Password"
                                secureTextEntry={pass}
                                placeholderTextColor="#fff"
                                onChangeText={(password) => setPassword(password)}
                                autoComplete={'off'}
                            />
                            <TouchableOpacity onPress={onPressEye}>
                                <Entypo name={eye} size={25} color="#fff" />
                            </TouchableOpacity>
                        </View>
                        {divider}
                        <TouchableOpacity onPress={onPress} style={{ justifyContent: "center", flexDirection: "row" }}>
                            <View style={styles.button}>
                                <Text style={{ color: "#fff", fontSize: 20 }}>Login</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </>
    )
}
export default Login;


