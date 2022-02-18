import React from 'react';
import Pages from './pages';
import Otp from './pages/Otp';
import Comp from './pages/Comp';
import Axios from './pages/axios';
import Tabs from './navigation/Tabs';
import Product from './pages/Product';
import Model from './componets/Model';
import Product1 from './pages/Product1';
import Product2 from './pages/Product1';
import ModelPop from './pages/ModelPop';
import Animation from './pages/Animation';
import Validation from './pages/validation';
import { useColorScheme } from 'react-native';
import Floor1 from './pages/DrawerPages/Floor1';
import Floor2 from './pages/DrawerPages/Floor2';
import Floor3 from './pages/DrawerPages/Floor3';
import Notification from './componets/Notification';
import DrawerNavigation, { Profile } from './pages/DrawerContent';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import LoginForm from './Screens/LoginForm';
import FormSubmit from './Screens/FormSubmit';
import App1 from './App1';
const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};
const navigation = ({ navigation }) => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        initialRouteName="DrawerNavigation"
        screenOptions={screenOptions}>

        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        <Stack.Screen name="Pages" component={Pages} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Validation" component={Validation} />
        <Stack.Screen name="Animation" component={Animation} />
        <Stack.Screen name="Product1" component={Product1} />
        <Stack.Screen name="Product2" component={Product2} />
        <Stack.Screen name="ModelPop" component={ModelPop} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Floor3" component={Floor3} />
        <Stack.Screen name="Comp" component={Comp} />
        <Stack.Screen name="Floor1" component={Floor1} />
        <Stack.Screen name="Floor2" component={Floor2} />
        <Stack.Screen name="Model" component={Model} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Axios" component={Axios} />
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="SubmitBtn" component={FormSubmit} />
        <Stack.Screen name="App1" component={App1} />
        
        
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default navigation;
// {count>0?<Comp/> && <MenuProvider>
//   <View style={{backgroundColor: 'white', flex: 1}}>
//       <View
//         // #93C572
//         style={{
//           backgroundColor: '#93C572',
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           height: 60,
//           borderBottomStartRadius: 20,
//           borderBottomEndRadius: 20,
//         }}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Image
//             source={{
//               uri: 'https://img.icons8.com/metro/26/ffffff/circled-left-2.png',
//             }}
//             style={{height: 30, width: 30, marginLeft: 10}}
//           />
//         </TouchableOpacity>
//         <Text
//           style={{
//             color: 'white',
//             flexDirection: 'row',
//             fontWeight: '600',
//             fontSize: 20,
//           }}>
//           Floor
//         </Text>
//         <Image
//           source={{
//             uri: 'https://img.icons8.com/external-others-royyan-wijaya/24/ffffff/external-interface-revamp-4-others-royyan-wijaya-2.png',
//           }}
//           style={{height: 30, width: 30, marginRight: 10}}
//         />
//       </View>
//       <View
//         style={{
//           flexDirection: 'row',
//           marginTop: 20,
//           marginLeft: 40,
//           width: '85%',
//           justifyContent: 'space-between',
//           backgroundColor: 'white',
//         }}>
//         <View style={{width: '90%'}}>
//           <TextInput
//             style={styles.textInputStyle}
//             value={search}
//             placeholder="Search here"
//             placeholderTextColor="black"
//             onChangeText={text => searchFilter(text)}></TextInput>
//         </View>
//         <View style={{justifyContent: 'center', alignItems: 'center'}}>
//           <TouchableOpacity onPress={toggle}>
//             <Image
//               source={{
//                 uri: 'https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-sort-arrows-dreamstale-lineal-dreamstale-4.png',
//               }}
//               style={{height: 30, width: 30}}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//       <Divider width={1} style={{marginTop: 20}} />
//       <View
//         style={{
//           justifyContent: 'center',
//           flexDirection: 'row',
//           alignItems: 'center',
//           marginTop: 10,
//           marginBottom: 10,
//         }}>
//         <View
//           style={{
//             justifyContent: 'space-between',
//             flexDirection: 'row',
//             alignItems: 'center',
//             width: '85%',
//           }}>
//           <Text
//             style={{
//               color: '#2d333a',
//               fontWeight: 'bold',
//               paddingLeft: 10,
//               fontSize: 20,
//             }}>
//             Surat
//           </Text>
//           <Menu onSelect={value => setselect(value)}>
//             <MenuTrigger>
//               <Image
//                 source={{
//                   uri: 'https://img.icons8.com/material-rounded/24/000000/menu-2.png',
//                 }}
//                 style={{height: 30, width: 30}}
//               />
//             </MenuTrigger>
//             <MenuOptions style={{backgroundColor: 'white', height: 80}}>
//               <MenuOption
//                 value={1}
//                 style={{height: '50%', justifyContent: 'center'}}>
//                 <Text style={{color: '#2d333a', textAlign: 'center'}}>
//                   Select All
//                 </Text>
//               </MenuOption>
//               {/* <Divider width={1} /> */}

//               <MenuOption
//                 value={0}
//                 style={{height: '50%', justifyContent: 'center'}}>
//                 <Text style={{color: '#2d333a', textAlign: 'center'}}>
//                   Deselect All
//                 </Text>
//               </MenuOption>
//             </MenuOptions>
//           </Menu>
//         </View>
//       </View>
//       <FlatList
//         data={!Visible ? filterData : masterData}
//         // filterData
//         keyExtractor={(renderItem, index) => index}
//         renderItem={renderItem}
//       />
//       <View
//         style={{
//           justifyContent: 'flex-end',
//           flexDirection: 'row',
//           marginRight: 20,
//           marginTop: 30,
//         }}>
//         <Modal
//           isVisible={Visible}
//           animationType={'slide'}
//           transparent={true}
//           onRequestClose={() => {
//             setVisible(false);
//           }}>
//           <View
//             style={{
//               flex: 0.3,
//               flexDirection: 'row',
//               backgroundColor: 'white',
//               justifyContent: 'flex-start',
//               alignItems: 'flex-start',
//               borderRadius: 20,
//               width: '100%',
//             }}>
//             <View
//               style={{
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 marginTop: 35,
//                 marginLeft: 40,
//                 width: '75%',
//               }}>
//               <Text
//                 style={{color: 'red', marginBottom: 20, fontWeight: '600'}}>
//                 FILTER BY
//               </Text>
//               <Divider width={1} />
//               <TouchableOpacity
//                 onPress={sortByActive}
//                 style={{width: '100%'}}>
//                 <Text
//                   style={{
//                     color: 'black',
//                     marginTop: 10,
//                     fontWeight: '400',
//                   }}>
//                   Active
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={sortByInActive}
//                 style={{width: '100%'}}>
//                 <Text
//                   style={{
//                     color: 'black',
//                     marginTop: 40,
//                     fontWeight: '400',
//                   }}>
//                   InActive
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//       </View>
//     </View></MenuProvider>:
//      <MenuProvider>
//      <View style={{backgroundColor: 'white', flex: 1}}>
//       <View
//         // #93C572
//         style={{
//           backgroundColor: '#93C572',
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           height: 60,
//           borderBottomStartRadius: 20,
//           borderBottomEndRadius: 20,
//         }}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Image
//             source={{
//               uri: 'https://img.icons8.com/metro/26/ffffff/circled-left-2.png',
//             }}
//             style={{height: 30, width: 30, marginLeft: 10}}
//           />
//         </TouchableOpacity>
//         <Text
//           style={{
//             color: 'white',
//             flexDirection: 'row',
//             fontWeight: '600',
//             fontSize: 20,
//           }}>
//           Floor
//         </Text>
//         <Image
//           source={{
//             uri: 'https://img.icons8.com/external-others-royyan-wijaya/24/ffffff/external-interface-revamp-4-others-royyan-wijaya-2.png',
//           }}
//           style={{height: 30, width: 30, marginRight: 10}}
//         />
//       </View>
//       <View
//         style={{
//           flexDirection: 'row',
//           marginTop: 20,
//           marginLeft: 40,
//           width: '85%',
//           justifyContent: 'space-between',
//           backgroundColor: 'white',
//         }}>
//         <View style={{width: '90%'}}>
//           <TextInput
//             style={styles.textInputStyle}
//             value={search}
//             placeholder="Search here"
//             placeholderTextColor="black"
//             onChangeText={text => searchFilter(text)}></TextInput>
//         </View>
//         <View style={{justifyContent: 'center', alignItems: 'center'}}>
//           <TouchableOpacity onPress={toggle}>
//             <Image
//               source={{
//                 uri: 'https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-sort-arrows-dreamstale-lineal-dreamstale-4.png',
//               }}
//               style={{height: 30, width: 30}}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//       <Divider width={1} style={{marginTop: 20}} />
//       <View
//         style={{
//           justifyContent: 'center',
//           flexDirection: 'row',
//           alignItems: 'center',
//           marginTop: 10,
//           marginBottom: 10,
//         }}>
//         <View
//           style={{
//             justifyContent: 'space-between',
//             flexDirection: 'row',
//             alignItems: 'center',
//             width: '85%',
//           }}>
//           <Text
//             style={{
//               color: '#2d333a',
//               fontWeight: 'bold',
//               paddingLeft: 10,
//               fontSize: 20,
//             }}>
//             Surat
//           </Text>
//           <Menu onSelect={value => setselect(value)}>
//             <MenuTrigger>
//               <Image
//                 source={{
//                   uri: 'https://img.icons8.com/material-rounded/24/000000/menu-2.png',
//                 }}
//                 style={{height: 30, width: 30}}
//               />
//             </MenuTrigger>
//             <MenuOptions style={{backgroundColor: 'white', height: 80}}>
//               <MenuOption
//                 value={1}
//                 style={{height: '50%', justifyContent: 'center'}}>
//                 <Text style={{color: '#2d333a', textAlign: 'center'}}>
//                   Select All
//                 </Text>
//               </MenuOption>
//               {/* <Divider width={1} /> */}

//               <MenuOption
//                 value={0}
//                 style={{height: '50%', justifyContent: 'center'}}>
//                 <Text style={{color: '#2d333a', textAlign: 'center'}}>
//                   Deselect All
//                 </Text>
//               </MenuOption>
//             </MenuOptions>
//           </Menu>
//         </View>
//       </View>
//       <FlatList
//         data={!Visible ? filterData : masterData}
//         // filterData
//         keyExtractor={(renderItem, index) => index}
//         renderItem={renderItem}
//       />
//       <View
//         style={{
//           justifyContent: 'flex-end',
//           flexDirection: 'row',
//           marginRight: 20,
//           marginTop: 30,
//         }}>
//         <Modal
//           isVisible={Visible}
//           animationType={'slide'}
//           transparent={true}
//           onRequestClose={() => {
//             setVisible(false);
//           }}>
//           <View
//             style={{
//               flex: 0.3,
//               flexDirection: 'row',
//               backgroundColor: 'white',
//               justifyContent: 'flex-start',
//               alignItems: 'flex-start',
//               borderRadius: 20,
//               width: '100%',
//             }}>
//             <View
//               style={{
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 marginTop: 35,
//                 marginLeft: 40,
//                 width: '75%',
//               }}>
//               <Text
//                 style={{color: 'red', marginBottom: 20, fontWeight: '600'}}>
//                 FILTER BY
//               </Text>
//               <Divider width={1} />
//               <TouchableOpacity
//                 onPress={sortByActive}
//                 style={{width: '100%'}}>
//                 <Text
//                   style={{
//                     color: 'black',
//                     marginTop: 10,
//                     fontWeight: '400',
//                   }}>
//                   Active
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={sortByInActive}
//                 style={{width: '100%'}}>
//                 <Text
//                   style={{
//                     color: 'black',
//                     marginTop: 40,
//                     fontWeight: '400',
//                   }}>
//                   InActive
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//       </View>
//     </View></MenuProvider>}
