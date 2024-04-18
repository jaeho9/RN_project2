import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
} from 'react-native';
import SignUpimage from '../assets/image/SignUp.png';
import CheckImg from '../assets/image/CheckImg.png';
import SignUpModal from './components/SignUpModal';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAutoLogin, setIsAutoLogin] = useState(false);
  const [isAgreeTerms, setIsAgreeTerms] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // 모달을 표시할 상태

  const handleSignUp = () => {
    // 회원가입 처리 로직 구현해야 함

    setModalVisible(true);
  };

  const handleLoginRedirect = () => {
    // 로그인 페이지로 이동하는 로직 구현
    navigation.navigate('Login');
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Image source={SignUpimage} style={styles.SignUpImage} />
        <Text style={styles.title}>회원가입</Text>
        <TextInput
          style={styles.input}
          placeholder="이름"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="이메일"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[styles.checkbox, isAutoLogin]}
            onPress={() => setIsAutoLogin(!isAutoLogin)}>
            {isAutoLogin && <Image source={CheckImg} />}
          </TouchableOpacity>
          <Text style={styles.checkboxLabelText}>자동 로그인</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[styles.checkbox, isAgreeTerms]}
            onPress={() => setIsAgreeTerms(!isAgreeTerms)}>
            {isAgreeTerms && <Image source={CheckImg} />}
          </TouchableOpacity>
          <Text style={styles.checkboxLabelText}>약관에 동의합니다</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLoginRedirect}>
          <Text style={styles.linkText}>이미 회원이신가요? 로그인</Text>
        </TouchableOpacity>
        <SignUpModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFF3E9',
  },
  SignUpImage: {marginBottom: 20},
  container: {
    marginTop: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF3E9',
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
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#FDA758',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#573353',
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxText: {
    color: 'white',
  },
  checkboxLabelText: {
    color: '#573353',
  },
});

export default SignUp;
