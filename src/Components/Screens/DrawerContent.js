import * as React from 'react';
import CustomSideMenU from './CustomSideMenu';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import Login from './Login';
import Home from './Home';
import Customers from './Customers';
import Item from './Item';

const Drawer = createDrawerNavigator();

const DrawerContent = ({ navigation }) => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer independent={true} theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator drawerContent={props => <CustomSideMenU {...props} />} initialRouteName="Login" screenOptions={{ headerShown: false }}>
       
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Customers" component={Customers} />
        <Drawer.Screen name="Item" component={Item} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerContent;
