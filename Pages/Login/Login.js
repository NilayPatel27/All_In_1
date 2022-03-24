import axios from 'axios';
import { styles } from './styles'
import Modal from 'react-native-modal';
import React, { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('mansi');
    const [password, setPassword] = useState('mansi1234');
    const [eye, seteye] = useState('eye-with-line');
    const [pass, setpass] = useState(true);
    const [model, setModel] = useState(false);

    const choosePhotoFromCamera = () => {
        console.warn('choosePhotoFromCamera');
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
        });
    };
    const choosePhotoFromGalary = () => {
        console.warn('choosePhotoFromGalary');
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        });
    };
    const onPress = () => {
        let auth = {
            userName: email,
            password: password
        }
        axios.post('http://192.168.0.196:8080/api/login/LoginUser', auth)
            .then(res => navigation.navigate('Home', { token: res.data.message }))
    }
    const onPressEye = () => {
        seteye(e => e == 'eye' ? 'eye-with-line' : 'eye')
        setpass(p => !p)
    }
    const Register = () => {

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
                                style={{
                                    paddingLeft: 10,
                                    width: '80%',
                                    borderWidth: 0,
                                    borderRadius: 8,
                                    color: '#fff',
                                    width: '80%'
                                }}
                                placeholder="Email"
                                placeholderTextColor="#fff"
                                onChangeText={(email) => setEmail(email)}
                                autoComplete={'off'}
                            />
                        </View>
                        {divider}
                        <View style={[styles.inputField, { justifyContent: 'space-between' }]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Icon name="lock" size={25} color="#fff" />
                                <TextInput
                                    style={{
                                        paddingLeft: 10,
                                        borderWidth: 0,
                                        borderRadius: 8,
                                        color: '#fff',
                                        width: '80%'
                                    }}
                                    placeholder="Password"
                                    secureTextEntry={pass}
                                    placeholderTextColor="#fff"
                                    onChangeText={(password) => setPassword(password)}
                                    autoComplete={'off'}
                                />
                            </View>
                            <TouchableOpacity onPress={onPressEye} >
                                <Entypo name={eye} size={25} color="#fff" />
                            </TouchableOpacity>
                        </View>
                        {divider}
                        <TouchableOpacity onPress={onPress} style={{ justifyContent: "center", flexDirection: "row", marginBottom: 10 }}>
                            <View style={styles.button}>
                                <Text style={{ color: "#fff", fontSize: 20 }}>Login</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModel(true)} style={{ justifyContent: "center", flexDirection: "row" }}>
                            <Text style={{ color: '#fff', fontSize: 20 }}>Don't have an account?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal
                    isVisible={model}
                    animationType={'slide'}
                    transparent={true}
                    onRequestClose={() => {
                        setModel(false);
                    }}
                    onBackdropPress={() => {
                        setModel(false);
                    }}
                >
                    <View style={{ flexDirection: 'column', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 20, width: '100%' }}>
                        <TextInput
                            style={[styles.textInput, { width: '90%', marginLeft: 5, marginTop: 10 }]}
                            placeholder="User ID"
                            placeholderTextColor="#DB4437"
                            //   onChangeText={(Name) => setItemName(Name)}
                            autoComplete={'off'}
                        />
                        <TextInput
                            style={[styles.textInput, { width: '90%', marginLeft: 5, marginTop: 10 }]}
                            placeholder="User Name"
                            placeholderTextColor="#DB4437"
                            //   onChangeText={(prize) => setItemPrize(prize)}
                            autoComplete={'off'}
                        />
                        <TextInput
                            style={[styles.textInput, { width: '90%', marginLeft: 5, marginTop: 10 }]}
                            placeholder="User Email"
                            placeholderTextColor="#DB4437"
                            //   onChangeText={(type) => setItemType(type)}
                            autoComplete={'off'}
                        />
                        <TextInput
                            style={[styles.textInput, { width: '90%', marginLeft: 5, marginTop: 10 }]}
                            placeholder="User Password"
                            placeholderTextColor="#DB4437"
                            //   onChangeText={(star) => setItemType(star)}
                            autoComplete={'off'}
                        />
                        <TextInput
                            style={[styles.textInput, { width: '90%', marginLeft: 5, marginTop: 10 }]}
                            placeholder="User Address"
                            placeholderTextColor="#DB4437"
                            //   onChangeText={(color) => setItemType(color)}
                            autoComplete={'off'}
                        />
                        <TextInput
                            style={[styles.textInput, { width: '90%', marginLeft: 5, marginTop: 10 }]}
                            placeholder="User Phone"
                            placeholderTextColor="#DB4437"
                            //   onChangeText={(weight) => setItemType(weight)}
                            autoComplete={'off'}
                        />
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                                backgroundColor: '#DDDDDD',
                                padding: 5
                            }}
                            onPress={() => choosePhotoFromCamera}>
                            <Text style={{
                                padding: 10,
                                color: 'black',
                            }}>
                                Choose Photo From Camera
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                                backgroundColor: '#DDDDDD',
                                padding: 5
                            }}
                            onPress={() => choosePhotoFromGalary}>
                            <Text style={{
                                padding: 10,
                                color: 'black',
                            }}>
                                Choose Photo From Galary
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={Register} style={{ justifyContent: "center", flexDirection: "row" }}>
                            <View style={{ height: 50, width: '60%', marginVertical: 10, flexDirection: 'row', alignItems: "center", backgroundColor: "green", justifyContent: 'center', borderRadius: 25 }}>
                                <Text style={{ color: "#fff", fontSize: 20 }}>ADD</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </ImageBackground>
        </>
    )
}
export default Login;