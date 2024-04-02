import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import CommentsModal from '../components/CommentsModal';

// const logo = require('../assets/icons/운동.png'); // 수정 예정
const heart = require('../assets/icons/heart.png');
const comment = require('../assets/icons/comment.png');
const more = require('../assets/icons/more.png');
const health = require('../assets/icons/health.png');

const {width} = Dimensions.get('window');

const dummy_feed = [
  {
    id: 1,
    name: '헬창',
    profileImg: 'https://avatar.iran.liara.run/public',
    feedImg: [
      'https://img.freepik.com/free-photo/low-angle-view-of-unrecognizable-muscular-build-man-preparing-for-lifting-a-barbell-in-a-health-club_637285-2497.jpg?size=626&ext=jpg&ga=GA1.1.1908636980.1711497600&semt=ais',
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
    ],
    contents: '테스트 텍스트 123123123123',
    like: 37,
    likeUsers: [1, 2, 3],
  },
  {
    id: 2,
    name: '크로스핏터',
    profileImg: 'https://avatar.iran.liara.run/public',
    feedImg: [
      'https://kr.imboldn.com/wp-content/uploads/2022/07/newbie_guide_fitness_pt1_main.jpg',
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
    ],
    contents: '테스트 텍스트 123123123123',
    like: 37,
    likeUsers: [1, 2, 3],
  },
  {
    id: 3,
    name: '보디빌더',
    profileImg: 'https://avatar.iran.liara.run/public',
    feedImg: [
      'https://media.istockphoto.com/id/612262390/ko/%EC%82%AC%EC%A7%84/%EB%B0%94%EB%94%94-%EB%B9%8C%EB%94%A9-%EC%9A%B4%EB%8F%99.jpg?s=612x612&w=0&k=20&c=W4zrEy_Ntxc8iiPjPNMiBqrYImtESpPQct4-sMsFSY0=',
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
    ],
    contents: '테스트 텍스트 123123123123',
    like: 37,
    likeUsers: [1, 2, 3],
  },
  {
    id: 4,
    name: '3대400',
    profileImg: 'https://avatar.iran.liara.run/public',
    feedImg: [
      'https://media.istockphoto.com/id/619088796/ko/%EC%82%AC%EC%A7%84/%ED%94%BC%ED%8A%B8-%EB%8B%88%EC%8A%A4-%EC%86%8C%EB%85%80-%EC%95%84%EC%B9%A8%EC%97%90-%EC%95%84%EB%A0%B9%EC%9D%84-%EB%A6%AC%ED%94%84%ED%8C%85.jpg?s=612x612&w=0&k=20&c=2zCwZ8LyFf7nW4ZHw5VU-_-1Mg1JacvGU_E1qTbREU4=',
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
    ],
    contents: '테스트 텍스트 123123123123',
    like: 37,
    likeUsers: [1, 2, 3],
  },
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const renderFeed = ({item, index}) => {
    return (
      <View style={{paddingVertical: 24}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 16,
            marginBottom: 8,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 4,
            }}>
            <Image
              source={{uri: item.profileImg}}
              style={{width: 32, height: 32}}
            />
            <Text style={{fontSize: 16, fontWeight: '400', lineHeight: 19.97}}>
              {item.name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={more} style={{width: 24, height: 24}} />
          </TouchableOpacity>
        </View>
        <Image
          source={{uri: item.feedImg[0]}}
          style={{width, height: width, marginBottom: 8}}
          resizeMode="contain"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
            marginBottom: 32,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 8,
            }}>
            <TouchableOpacity>
              <Image source={heart} style={{width: 32, height: 32}} />
            </TouchableOpacity>
            <Text style={{fontSize: 18}}>1</Text>
            <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
              <Image source={comment} style={{width: 32, height: 32}} />
            </TouchableOpacity>
            <Text style={{fontSize: 18}}>1</Text>
          </View>
        </View>
        <View style={{marginHorizontal: 16, gap: 4}}>
          <Text>{item.name}</Text>
          <Text style={{fontWeight: '400', color: '#4f4f4f'}}>
            {item.contents}
          </Text>
          <Text style={{fontWeight: '400', fontSize: 12}}>5시간 전</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, background: '#FFF'}}>
      <View style={{flex: 1, backgroundColor: '#FFF', marginBottom: 32}}>
        <FlatList
          data={dummy_feed}
          renderItem={renderFeed}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews
          ListHeaderComponent={() => (
            <View>
              <View
                style={{
                  padding: 16,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: '800',
                    color: '#333',
                    paddingTop: 5,
                  }}>
                  오운완
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 8,
                  }}>
                  <TouchableOpacity>
                    <Image source={health} style={{width: 42, height: 42}} />
                  </TouchableOpacity>
                  {/* <TouchableOpacity>
                    <Image source={comment} style={{width: 32, height: 32}} />
                  </TouchableOpacity> */}
                </View>
              </View>
              {/* <View>
                <FlatList
                  data={dummy_stroy}
                  renderItem={renderStory}
                  keyExtractor={item => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  removeClippedSubviews
                />
              </View> */}
            </View>
          )}
        />
        <CommentsModal isVisible={isVisible} setIsVisible={setIsVisible} />
      </View>
    </View>
  );
};

export default Home;
