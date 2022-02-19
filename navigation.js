import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Pages/Home';
import Customer from './Pages/Customer';
import Item from './Pages/Item';
import Login from './Pages/Login';


const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

const navigation = ({navigation}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Customer" component={Customer} />
                <Stack.Screen name="Item" component={Item} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default navigation