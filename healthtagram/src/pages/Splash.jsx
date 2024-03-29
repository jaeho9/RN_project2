import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Splash_logo from '../assets/icons/splash.png';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainTab');
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <Image source={Splash_logo} style={styles.logo} />
            <Text style={styles.text}>
                오운완
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
    text: {
        fontSize: 30,
    }
});

export default Splash;
