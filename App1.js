import {View,Animated, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import React, { useRef } from 'react';

import FormHeader from './Screens/FormHeader';
import FormSwitchBtn from './Screens/FormSwitchBtn';
import LoginForm from './Screens/LoginForm';
import SignupForm from './Screens/SignupForm';
// import navigation from './navigation';

const {width} = Dimensions.get('window');

const App1 = ({navigation}) => {

    // <navigation />
  
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef();

  const rightHeaderOpacity = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0],
  })

  const leftHeaderTranslateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, 40],
  })

  const rightHeaderTranslateY = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -20],
  })

  const loginColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(27,27,27,1)', 'rgba(27,27,27,0.4)'],
  })

  const signupColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(27,27,27,0.4)', 'rgba(27,27,27,1)'],
  })


  

  return (
    <View style={{flex: 1, paddingTop: 60}}>
      <View style={{height: 100}}>
        <FormHeader
          leftHeading="Welcome "
          rightHeading="Back"
          subHeading="Darshan"
          rightHeaderOpacity={rightHeaderOpacity}
          leftHeaderTranslateX={leftHeaderTranslateX}
          rightHeaderTranslateY={rightHeaderTranslateY}
        />
      </View>
      <View
        style={{flexDirection: 'row', paddingHorizontal: 20, marginBottom: 20}}>
        <FormSwitchBtn
          style={styles.borderLeft}
          backgroundColor={loginColorInterpolate}
          title="Login"
          onPress={() => scrollView.current.scrollTo({x: 0})}
        />
        <FormSwitchBtn
          style={styles.borderRight}
          backgroundColor={signupColorInterpolate}
          title="Signup"
          onPress={() => scrollView.current.scrollTo({x: width})}
        />
      </View>
      <ScrollView
      ref={scrollView}
      scrollEventThrottle={16}  
      horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([{nativeEvent:{contentOffset:{x:animation}}}],{useNativeDriver: false})}>
        <LoginForm navigation={navigation} />
        <ScrollView>
          <SignupForm navigation={navigation}/>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default App1;

const styles = StyleSheet.create({
  container: {
    flex: '1',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderLeft: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  borderRight: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
