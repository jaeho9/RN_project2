import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ChatScreen from '../../healthtagram/src/pages/ChatScreen';

const myProfile = require('../assets/icons/myProfile.png');

const dummy_data = [
  {
    id: 1,
    name: '헬스인',
    profileImg: require('../assets/icons/dummyProfile.png'),
    message: '3대500',
  },
  {
    id: 2,
    name: '트레이너',
    profileImg: require('../assets/icons/dummyProfile2.png'),
    message: 'PT는 DM주세요~',
  },
  {
    id: 3,
    name: '헬창',
    profileImg: require('../assets/icons/dummyProfile3.png'),
    message: '득근',
  },
  {
    id: 3.1,
    name: '헬린이',
    profileImg: require('../assets/icons/dummyProfile4.png'),
    message: '돼지입니다',
  },
  {
    id: 4,
    name: '요가인',
    profileImg: require('../assets/icons/dummyProfile5.png'),
    message: '하하하하',
  },
];

const DM = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ChatScreen')}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
          marginBottom: 16,
        }}>
        <Image source={item.profileImg} style={{width: 40, height: 40}} />
        <View style={{gap: 4}}>
          <Text style={{fontSize: 14, color: '#333'}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: '#828282'}}>{item.message}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderListHeader = () => {
    return (
      <View
        style={{
          marginVertical: 16,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: '400', color: '#828282'}}>친구 </Text>
        <Text style={{fontSize: 14, color: '#4F4F4F'}}>
          {dummy_data.length}명
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFF', marginBottom: 20}}>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 16,
            marginBottom: 16,
            marginHorizontal: 16,
          }}>
          <View style={{gap: 2}}>
            <Text
              style={{
                fontSize: 18,
                color: '#333',
              }}>
              김헬스
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#828282',
              }}>
              헬린이 입니다.
            </Text>
          </View>
          <Image source={myProfile} style={{width: 56, height: 56}} />
        </View>
        <View style={{flex: 1, marginHorizontal: 16}}>
          <FlatList
            data={dummy_data}
            renderItem={renderItem}
            keyExtractor={item => item.userId}
            ListHeaderComponent={renderListHeader}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default DM;
