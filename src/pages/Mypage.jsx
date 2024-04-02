import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  useWindowDimensions,
} from 'react-native';

const health = require('../assets/icons/health.png');
const multiPhoto = require('../assets/icons/multiPhoto.png');
const duumy_search = [
  {
    id: 1,
    img: 'https://img.freepik.com/free-photo/young-fitness-man-in-studio_7502-5005.jpg',
    isMulti: true,
  },
  {
    id: 2,
    img: 'https://media.istockphoto.com/id/619088796/ko/%EC%82%AC%EC%A7%84/%ED%94%BC%ED%8A%B8-%EB%8B%88%EC%8A%A4-%EC%86%8C%EB%85%80-%EC%95%84%EC%B9%A8%EC%97%90-%EC%95%84%EB%A0%B9%EC%9D%84-%EB%A6%AC%ED%94%84%ED%8C%85.jpg?s=612x612&w=0&k=20&c=2zCwZ8LyFf7nW4ZHw5VU-_-1Mg1JacvGU_E1qTbREU4=',
    isMulti: false,
  },
  {
    id: 3,
    img: 'https://cdn.ceomagazine.co.kr/news/photo/202207/31054_22999_3057.jpg',
    isMulti: true,
  },
  {
    id: 4,
    img: 'https://health.chosun.com/site/data/img_dir/2023/01/05/2023010502072_0.jpg',
    isMulti: false,
  },
  {
    id: 5,
    img: 'https://m.9679.co.kr/web/upload/NNEditor/20180607/EB82A8EC9E90ED9598ECB2B4.jpg',
    isMulti: true,
  },
];

const Mypage = ({navigation}) => {
  const {width} = useWindowDimensions();
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={{borderWidth: 1, borderColor: '#FFF'}}>
        {item.isMulti && (
          <Image
            source={multiPhoto}
            style={{
              position: 'absolute',
              right: 8,
              top: 8,
              width: 24,
              height: 24,
              zIndex: 4,
            }}
          />
        )}
        <Image
          source={{uri: item.img}}
          style={{width: width / 3 - 2, height: width / 3 - 2}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 16,
            marginBottom: 16,
            paddingTop: 10,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>TestId_1234</Text>
          <Image source={health} style={{width: 48, height: 48}} />
          {/* <TouchableOpacity>
            <Image source={settingsIcon} style={{width: 32, height: 32}} />
          </TouchableOpacity> */}
        </View>
        <View
          style={{
            paddingLeft: 10,
            marginHorizontal: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-photo/low-angle-view-of-unrecognizable-muscular-build-man-preparing-for-lifting-a-barbell-in-a-health-club_637285-2497.jpg?size=626&ext=jpg&ga=GA1.1.1908636980.1711497600&semt=ais',
              }}
              style={{width: 60, height: 60, borderRadius: 30, marginBottom: 4}}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: 700,
                marginLeft: 12,
              }}>
              헬창
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 24,
              paddingRight: 10,
            }}>
            <TouchableOpacity style={{alignItems: 'center', gap: 2}}>
              <Text style={{fontSize: 16}}>100</Text>
              <Text style={{fontSize: 17}}>게시물</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Follower')}
              style={{alignItems: 'center', gap: 2}}>
              <Text style={{fontSize: 16}}>120</Text>
              <Text style={{fontSize: 17}}>팔로워</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'center', gap: 2}}>
              <Text style={{fontSize: 16}}>120</Text>
              <Text style={{fontSize: 17}}>팔로윙</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <FlatList
            data={duumy_search}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews
            numColumns={3}
          />
        </View>
      </View>
    </View>
  );
};

export default Mypage;
