import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import RootStackScreen from '../screens/RootStack';
import GetWay from '../componets/GetWay';
import Notification from '../componets/Notification';
import Profile from '../componets/Profile';
import { StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Template from '../componets/Template';
import DrawerContent from '../pages/DrawerContent';
import Floor1 from '../pages/Floor1';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadows,
    }}
    onPress={onPress}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#1e72dd',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 15,
          // left: 10,
          // right: 10,
          marginHorizontal: 10,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          ...styles.shadows,
        },
      }}>
      <Tab.Screen
        name="Floor1"
        component={Floor1}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assates/routers.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#1e72dd' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#1e72dd' : '#748c94',
                  fontSize: 12,
                }}>
                GetWay
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profiles"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assates/profile.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#1e72dd' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#1e72dd' : '#748c94',
                  fontSize: 12,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="DrawerContent"
        component={DrawerContent}
        // Options={{
        //   tabBarIcon: ({focused}) => (
        //     <Image
        //       source={require('../assates/dashboard.png')}
        //       resizeMode="contain"
        //       style={{width: 30, height: 30, tintColor: '#fff'}}
        //     />
        //   ),

        //   tabBar: props => <CustomTabBarButton {...props} />,
        // }}

        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 65,
                width: 65,
                top: -30,
                borderRadius: 100,

                shadowColor: 'red',
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.5,
                elevation: 5,

                backgroundColor: '#fff',
              }}>
              <Image
                source={require('../assates/dashboard.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#1e72dd' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assates/homes.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#1e72dd' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#1e72dd' : '#748c94',
                  fontSize: 12,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assates/notifications.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#1e72dd' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#1e72dd' : '#748c94',
                  fontSize: 12,
                }}>
                Notify
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadows: {
    shadowColor: '#1e72dd',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
