import React, { useContext } from 'react'
import Home from './src/Components/Screens/Home';
import Item from './src/Components/Screens/Item';
import Login from './src/Components/Screens/Login';
import App from './src/Components/Screens/App';
import Customers from './src/Components/Screens/Customers';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddItem from './src/Components/Screens/addItem';

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
                <Stack.Screen name="App" component={App} />
                <Stack.Screen name="AddItem" component={AddItem} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default navigation