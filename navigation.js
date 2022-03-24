import React from 'react'
import Home from './Components/Screens/Home';
import Item from './Components/Screens/Item';
import Login from './Components/Screens/Login';
import Customers from './Components/Screens/Customers';
import SearchBarScreen from './Components/SearchBarScreen';
import Node from './Components/node';

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
                <Stack.Screen name="SearchBarScreen" component={SearchBarScreen} />
                <Stack.Screen name="Node" component={Node} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default navigation