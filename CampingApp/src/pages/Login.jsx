import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';
import Background from '../assets/image/Background.png';
import LoginGuideIcon from '../assets/image/LoginGuideIcons.png';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 로그인 처리 로직 구현 username , password

    navigation.navigate('Home'); // 임시 확인용.....
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgetPassword');
  };

  const handleSignUp = () => {
    // 회원가입 페이지로 이동하는 로직 구현해야함
    navigation.navigate('SignUp');
  };

  const handleGuide = () => {
    //가이드 아이콘 클릭시 이동 로직
  };

  return (
    <ImageBackground source={Background} style={styles.background}>
      <TouchableOpacity style={styles.GuideIconContainer} onPress={handleGuide}>
        <Image source={LoginGuideIcon} />
      </TouchableOpacity>
      <Text style={styles.welcometext}>환영해요!</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="아이디"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>비밀번호 찾기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUp}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // 높이나 너비가 상위 컨테이너의 사이즈와 일치하도록 이미지를 조정
  },
  welcometext: {
    fontSize: 40,
    fontWeight: '900',
    letterSpacing: -0.03,
    textAlign: 'center',
    color: '#573353',
    position: 'absolute',
    top: '30%',
    left: '25%',
    right: '25%',
  },
  GuideIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1, // 다른 요소 위에 표시되도록 z-index 설정
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: '15%',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#FDA758',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#573353',
    fontWeight: '700',
    fontSize: 16,
  },
  forgotPassword: {
    textDecorationLine: 'underline',
    marginBottom: 10,
    color: '#573353',
    fontWeight: '700',
  },
  signUp: {
    textDecorationLine: 'underline',
    color: '#573353',
    fontWeight: '700',
  },
});

export default Login;
