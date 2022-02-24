import React from 'react'
import Home from './Pages/Home';
import Item from './Pages/Item';
import Login from './Pages/Login';
import Customers from './Pages/Customers';
import SearchBarScreen from './Pages/SearchBarScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

const navigation = ({ navigation }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Customers" component={Customers} />
                <Stack.Screen name="Item" component={Item} />
                <Stack.Screen name="SearchBarScreen" component={SearchBarScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default navigation