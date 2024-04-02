import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';

const SplashIcon = require('../assets/icons/Splash.png');

const Splash = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainTab');
    }, 2000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CFE2F3',
      }}>
      <Text style={{fontSize: 50, fontWeight: '700', color: '#fff'}}>
        오운완
      </Text>
      <Image source={SplashIcon} style={{width: 150, height: 150}} />
    </View>
  );
};

export default Splash;
