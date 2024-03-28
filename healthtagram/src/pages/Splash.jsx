import React, { useEffect, useState } from 'react';
import { View, Text, Linking, Platform, Image } from 'react-native';
import { getAppVersion } from '../apis/basic';
import AlertModal from '../components/AlertModal';

const CarrotImage = require('../assets/images/carrotmarket.png');

const Splash = ({ navigation }) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainTab')
        }, 2000)
    })

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={CarrotImage} style={{ width: 100, height: 100 }} />
            <Text>Splash</Text>
            <AlertModal 
                isVisible={isVisible} 
                setIsVisible={setIsVisible} 
                headerTitle={"최신 버전이 아닙니다."} 
                okText={"업데이트하기"} 
                onPressOk={async () => {
                    if( Platform.OS === 'ios') {
                        await Linking.openURL("https://naver.com");
                        return;
                    } else {
                        await Linking.openURL("https://playstore.com");
                        return;
                    }
                    
                }}  
                noText={"나중에하기"}
                onPressNo={() => handleNoUpdate()}
            />
        </View>
    )
}

export default Splash;
