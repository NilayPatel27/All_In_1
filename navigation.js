import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

const navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="DrawerNavigation" screenOptions={screenOptions}>
                <Stack.Screen name="Tabs" component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default navigation