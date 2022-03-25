import React from 'react'
import Home from './Components/Screens/Home';
import Item from './Components/Screens/Item';
import Login from './Components/Screens/Login';
import Customers from './Components/Screens/Customers';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

const navigation = ({ navigation }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Customers" component={Customers} />
                <Stack.Screen name="Item" component={Item} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default navigation