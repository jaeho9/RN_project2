import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const SignUpModal = ({visible, onClose}) => {
  return (
    visible && (
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>회원가입을 축하합니다!</Text>
          <TouchableOpacity style={styles.modalButton} onPress={onClose}>
            <Text style={styles.modalButtonText}>확인</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#FDA758',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#573353',
  },
});

export default SignUpModal;
