import Axios from './axios';
import * as React from 'react';
import Model from '../componets/Model';
import Floor1 from './DrawerPages/Floor1';
import Product from './DrawerPages/Product';
import CustomSideMenU from './CustomSideMenu';
import Dashboard from './DrawerPages/Dashboard';
import Templates from './DrawerPages/Templates';
import MyDevices from './DrawerPages/MyDevices';
import Notification from '../componets/Notification';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';


const stack = createStackNavigator();

export const Profile = ({ navigation }) => {
  return (
    <>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="Product" component={Product} />
        <stack.Screen name="Floor1" component={Floor1} />
        <stack.Screen name="Notification" component={Notification} />
        <stack.Screen name="Model" component={Model} />
      </stack.Navigator>
    </>
  );
};

const Message = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Activity')}
        title="Go to Activity"
      />
    </View>
  );
};
const Activity = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Message')}
        title="Go to Message"
      />
    </View>
  );
};
const Gateway = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'red' }}>Gateway</Text>
    </View>
  );
};


const Drawer = createDrawerNavigator();

const DrawerContent = ({ navigation }) => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer independent={true} theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator drawerContent={props => <CustomSideMenU {...props} />} initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Gateway" component={Gateway} />
        <Drawer.Screen name="My Devices" component={MyDevices} />
        <Drawer.Screen name="Templates" component={Templates} />
        <Drawer.Screen name="Axios" component={Axios} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  item: {
    paddingVertical: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    borderRadius: 6,
  },
  title: {
    fontSize: 18,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    // margin: 5,
    borderColor: '#009688',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 20,
    width: '85%'
  },
  renderItemStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderRadius: 10,
    width: '90%',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  riv: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 10,
    width: '80%'
  },
});
export default DrawerContent;
