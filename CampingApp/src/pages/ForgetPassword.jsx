import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import ForgetPasswordImg from '../assets/image/ForgetPassword.png';
import BackIcon from '../assets/image/BackIcons.png';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // 비밀번호 재설정 이메일 발송 로직 구현
    // console.log('비밀번호 재설정 이메일을 발송합니다:', email);
  };
  const handleBack = () => {
    navigation.goBack();
    // 뒤로가기 기능 구현
  };

  const handleLoginRedirect = () => {
    // 로그인 페이지로 이동하는 로직 구현해야 함
    navigation.navigate('Login'); // 예시로 'Login' 스크린으로 이동 (추후수정)
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backIconContainer} onPress={handleBack}>
        <Image source={BackIcon} />
      </TouchableOpacity>
      <Text style={styles.title}>비밀번호 찾기</Text>
      <Image source={ForgetPasswordImg} style={styles.ForgetPasswordImg} />
      <Text style={styles.guidetext}>
        등록된 이메일로 비밀번호 변경 메일을 발송합니다.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="이메일"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
        <Text style={styles.buttonText}>비밀번호 찾기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLoginRedirect}>
        <Text style={styles.linkText}>이미 회원이신가요? 로그인</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF3E9',
  },
  backIconContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1, // 다른 요소 위에 표시되도록 z-index 설정
  },
  ForgetPasswordImg: {
    marginTop: 20,
    marginBottom: 20,
    width: 220,
    height: 235,
  },
  guidetext: {
    color: '#573353',
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    letterSpacing: -0.03,
    textAlign: 'center',
    color: '#573353',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#FDA758',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#573353',
    fontWeight: '700',
    fontSize: 16,
  },
  linkText: {
    color: '#573353',
    marginTop: 10,
  },
});

export default ForgotPassword;
