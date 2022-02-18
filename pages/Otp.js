import React from 'react';
import {  Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

// const STYLES = ['default', 'dark-content', 'light-content'];
// const TRANSITIONS = ['fade', 'slide', 'none'];

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#075E54"
        barStyle={'light-content'}/>
        <View style={{flexDirection:'column',flex:1}}>
          <View style={{backgroundColor:"#075E54",flexDirection:'row',justifyContent:"space-between",alignItems:'center',flex:0.08,borderBottomStartRadius:20,borderBottomEndRadius:20}}>
            <Image source={{uri:"https://img.icons8.com/ios/50/000000/circled-left-2.png"}} style={{height:30,width:30,marginLeft:10}}/>
            <Text style={{color:'white',flexDirection:'row',fontWeight:'600',fontSize:20}}>Device List</Text>
            <Image source={{uri:"https://img.icons8.com/windows/32/000000/plus.png"}} style={{height:30,width:30,marginRight:10}}/>
          </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1'
  },
  // buttonsContainer: {
  //   padding: 10
  // },
  // textStyle: {
  //   textAlign: 'center',
  //   marginBottom: 8
  // }
});

export default App;

{/* <Text style={styles.textStyle}>
  StatusBar Visibility:{'\n'}
  {hidden ? 'Hidden' : 'Visible'}
</Text>
<Text style={styles.textStyle}>
  StatusBar Style:{'\n'}
  {statusBarStyle}
</Text> */}
{/* {Platform.OS === 'ios' ? (
  <Text style={styles.textStyle}>
    StatusBar Transition:{'\n'}
    {statusBarTransition}
  </Text>
) : null}
<View style={styles.buttonsContainer}>
  <Button
    title="Toggle StatusBar"
    onPress={changeStatusBarVisibility} />
  <Button
    title="Change StatusBar Style"
    onPress={changeStatusBarStyle} />
  {Platform.OS === 'ios' ? (
    <Button
      title="Change StatusBar Transition"
      onPress={changeStatusBarTransition} />
  ) : null}
</View> */}