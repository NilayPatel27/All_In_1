import React,{useState} from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text } from 'react-native'
import { View, Image,Switch } from 'react-native'
import { NavigationContainer ,DarkTheme } from '@react-navigation/native';
import ThemeManager, { useTheme } from './theme'
import styled from 'styled-components'
import { useColorScheme } from 'react-native';


// const Title = styled.Text`
//   font-size: 24;
//   /* add this */
//   color: ${props => props.theme.text};
//   `


const header = ({navigation}) => {
    const scheme = useColorScheme();
    let text=scheme === 'dark'? 'white'  :'black';
    let back=scheme === 'dark'? 'black'  :'white';
    return (
        <>      
        <View style={{ backgroundColor: 'white', padding: 5 ,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <TouchableOpacity onPress={()=>navigation.push('Pages')}>
                <Image source={{uri:'https://img.icons8.com/windows/50/000000/home.png'}} style={styles.icons} />
            </TouchableOpacity>
            <View style={{justifyContent:'center',alignItems:'center',flex:1,flexDirection:'row'}}>
                    <Text style={{color:'blue',fontWeight:'600',fontSize:30}}>React Native</Text>
            </View>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    icons: {
        width: 30,
        height: 30,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }
}
)

export default header
