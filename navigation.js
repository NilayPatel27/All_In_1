import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Pages/Home';
import Customers from './Pages/Customers';
import Item from './Pages/Item';
import Login from './Pages/Login';


const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

const navigation = ({navigation}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Customers" component={Customers} />
                <Stack.Screen name="Item" component={Item} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default navigation