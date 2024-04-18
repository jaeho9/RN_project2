import React, {useState} from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import Content1 from '../assets/image/Onboarding/Content1.png';
import Content2 from '../assets/image/Onboarding/Content2.png';
import Content3 from '../assets/image/Onboarding/Content3.png';
import Content4 from '../assets/image/Onboarding/Content4.png';
import {Image, TouchableOpacity, Text} from 'react-native';

const OnboardingScreen = ({navigation}) => {
  const handleDone = () => {
    navigation.navigate('Login');
    // 로그인 페이지로 이동
  };

  const handleSkip = () => {
    // 마지막 페이지로 이동
  };
  const handleNext = () => {
    // 다음 페이지로 이동
  };

  const renderNext = ({isLight, nextLabel, ...props}) => {
    return (
      <TouchableOpacity style={{marginVertical: 10}} onPress={handleNext}>
        <Text
          style={{
            color: '#573353',
            fontSize: 16,
            fontWeight: '700',
            textAlign: 'center',
            marginRight: '20%',
          }}>
          {nextLabel}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderDone = () => {
    return (
      <TouchableOpacity
        style={{
          marginVertical: 10,
        }}
        onPress={handleDone}>
        <Text
          style={{
            color: '#573353',
            fontSize: 16,
            fontWeight: '700',
            textAlign: 'center',
            marginRight: '20%',
          }}>
          시작하기
        </Text>
      </TouchableOpacity>
    );
  };

  const renderSkip = ({isLight, skipLabel, ...props}) => (
    <TouchableOpacity style={{marginVertical: 10}} onPress={handleSkip}>
      <Text
        style={{
          color: '#573353',
          fontSize: 16,
          fontWeight: '700',
          textAlign: 'center',
          marginLeft: '20%',
        }}>
        {skipLabel}
      </Text>
    </TouchableOpacity>
  );

  return (
    <Onboarding
      onDone={() => {}}
      onSkip={() => {}}
      bottomBarColor="#fff"
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={Content1}
              style={{width: '90%', height: '90%', marginTop: 60}}
            />
          ),
          title: '',
          subtitle: '',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={Content2}
              style={{width: '90%', height: '90%', marginTop: 60}}
            />
          ),
          title: '',
          subtitle: '',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={Content3}
              style={{width: '90%', height: '90%', marginTop: 60}}
            />
          ),
          title: '',
          subtitle: '',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={Content4}
              style={{width: '90%', height: '90%', marginTop: 60}}
            />
          ),
          title: '',
          subtitle: '',
        },
      ]}
      // next 버튼 동작 안함.... 나중에 수정
      NextButtonComponent={renderNext} // 다음 버튼을 커스텀 렌더링
      DoneButtonComponent={renderDone} // Done 버튼을 커스텀 렌더링
      SkipButtonComponent={renderSkip}
    />
  );
};

export default OnboardingScreen;
