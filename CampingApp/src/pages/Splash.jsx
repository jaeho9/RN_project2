import React, {useEffect, useState} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import SplashScreen from '../assets/image/SplashScreen.png';

const Splash = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnboardingScreen');
    }, 2000);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ImageBackground
        source={SplashScreen}
        style={{width: '100%', height: '100%'}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '100%',
          }}>
          <Text
            style={{
              //   fontFamily: 'Pretendard',
              fontSize: 40,
              fontWeight: '900',
              letterSpacing: -0.03,
              textAlign: 'center',
              color: '#573353',
            }}>
            캠핑투게더
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Splash;
