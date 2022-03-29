import { View, Text, TextInput, Button, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { styles } from './styles'
import axios from 'axios';

import DocumentPicker from 'react-native-document-picker';


const addItem = ({ navigation, route }) => {
    const { ID, token } = route.params;
    const [isEnabled, setIsEnabled] = useState(false);
    const [singleFile, setSingleFile] = useState()

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        setregister({ ...register, IsActive: !isEnabled })
    }
    const [register, setregister] = useState({
        ItemCode: '',
        ItemName: '',
        ItemDescription: '',
        ItemPrice: '',
        CategoryId: '',
        ItemImage: '',
        IsActive: '',
    });
    const addItems = () => {
        let formDatas = new FormData();
        formDatas.append('ItemCode', register.ItemCode);
        formDatas.append('ItemName', register.ItemName);
        formDatas.append('ItemDescription', register.ItemDescription);
        formDatas.append('ItemPrice', register.ItemPrice);
        formDatas.append('CategoryId', ID);
        formDatas.append('ItemImage', {
            uri: setSingleFile.uri,
            type: setSingleFile.type,
            name: setSingleFile.fileName,
        });
        formDatas.append('IsActive', register.IsActive);

        fetch('http://192.168.0.196:8080/api/Item/AddCustomerItem', {
            method: "POST",
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formDatas)
        })
            .then(response => console.log(response.json()))
            .then(()=>getItemByCustomer())
            .catch(err => console.log(err))
    }


    const getItemByCustomer =  () => {
        axios.get("http://192.168.0.196:8080/api/User/GetCustomer?Id=" + ID, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
          setPost([res.data]);
          setCopyPost(res.data);
          setres(1);
        }
        ).catch(error => {
          console.log(error);
        });
    }

    const openDocumentFile = async () => {
        try {
            const file = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.images]
            })
            console.log('file : ' + JSON.stringify(file))
            setregister({ ...register, userPhoto: file.uri })
            setSingleFile(file)
        }
        catch (err) {
            setSingleFile(null)
            if (DocumentPicker.isCancel(err)) {
                alert('Canceled')
            } else {
                alert('unknown error: ' + JSON.stringify(err))
                throw err
            }
        }
    }
    console.log(ID, token)
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.modelview}>
                <TextInput
                    style={[styles.homeTextInput, { width: '90%', marginLeft: 5 }]}
                    placeholder="Item Code"
                    placeholderTextColor="#2d333a"
                    onChangeText={(text) => setregister({ ...register, ItemCode: text })}
                    autoComplete={'off'}
                />
                <TextInput
                    style={[styles.homeTextInput, { width: '90%', marginLeft: 5 }]}
                    placeholder="Item Name"
                    placeholderTextColor="#2d333a"
                    onChangeText={(text) => setregister({ ...register, ItemName: text })}
                    autoComplete={'off'}
                />
                <TextInput
                    style={[styles.homeTextInput, { width: '90%', marginLeft: 5 }]}
                    placeholder="Item Description"
                    placeholderTextColor="#2d333a"
                    onChangeText={(text) => setregister({ ...register, ItemDescription: text })}
                    autoComplete={'off'}
                />
                <TextInput
                    style={[styles.homeTextInput, { width: '90%', marginLeft: 5 }]}
                    placeholder="Item Price"
                    placeholderTextColor="#2d333a"
                    onChangeText={(text) => setregister({ ...register, ItemPrice: text })}
                    autoComplete={'off'}
                />
                <TextInput
                    style={[styles.homeTextInput, { width: '90%', marginLeft: 5 }]}
                    placeholder="UserId"
                    placeholderTextColor="#2d333a"
                    onChangeText={(userPhoneno) => setregister({ ...register, userPhoneno })}
                    autoComplete={'off'}
                />
                <Button
                    title="Item Image"
                    onPress={openDocumentFile}
                />
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}

                />
                <TouchableOpacity onPress={getItemByCustomer} style={{ justifyContent: "center", flexDirection: "row" }}>
                    <View style={styles.Add}>
                        <Text style={{ color: "#fff", fontSize: 20 }}>ADD</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default addItem