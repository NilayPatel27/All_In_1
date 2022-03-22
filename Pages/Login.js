import { styles } from './styles'
import React, { useEffect, useState } from 'react';
import Log from '../assates/svg/login.svg'
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { Text, TextInput, TouchableOpacity, View,ImageBackground, Image } from 'react-native';

const Login = ({ navigation }) => {
    const image = { uri: "https://reactjs.org/logo-og.png" };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [eye, seteye] = useState('eye-with-line');
    const [pass, setpass] = useState(true);
    const [CopyPost, setCopyPost] = useState(''); // for show copy post
    const [Post, setPost] = useState([]); // set Api data

    // RNFetchBlob.config({
    //     trusty : true
    //   })
 
    // const getPost = ( async () => {

    //     await axios.post('https://192.168.0.163:44370/api/Login/LoginUser', {
    //       "userName": "Nilay27",
    //       "password": "123456789"
    //     })
    //     .then( res => { console.log("\n\n\n\n\n", res.data.message, "res") })
    //     .catch(err => { console.log("\n\n\n\n\n", err, "\n\n\n\n\n") })
    //   })()

     const getPost = ( async () => {

      try {
      await axios.post('https://localhost:44370/api/Login/LoginUser', {
        "userName": "Nilay27",
        "password": "123456789"
      })
      .then( res => { console.log("\n\n\n\n\n", setPost(res.data.message), "res") })
      .catch(err => { console.log("\n\n\n\n\n", err, "\n\n\n\n\n") })
      } catch (error) {
        console.log(error);
      }
    })()

    const handleLogin = () => {
        axiosInstance
            .post('/api/Login/LoginUser', {
                email,
                password,
            })
            .then(res => {
                console.log(res);
                if (res.data.length > 0) {
                    setPost(res.data);
                    setCopyPost(res.data);
                } else {
                    setPost([]);
                    setError('No Post Found');
                }
            });
    };
   
    console.log(Post);
    const onPress = () => {
        email == 'admin' && password == 'admin' ? navigation.navigate('Home') : console.log("invalid")
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
            {/* <View style={{flex: 1,justifyContent: 'center',flexDirection: 'row',alignItems:'center'}}> */}
            <ImageBackground source={require('../assates/13.jpg')} resizeMode="cover" style={{ height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
    
                <View style={styles.second}>
                    <View style={styles.third}>
                        {/* <View style={styles.logo}> */}
                            {/* <Log name="user" style={{ flex: 1 }} /> */}
                            {/* <Image source={require('../assates/logo.jpg')} style={{ width: '100%', height: '100%',backgroundColor:'red' }} /> */}

                        {/* </View> */}
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
            {/* </View> */}
        </>
    )
}
export default Login;


