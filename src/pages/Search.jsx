import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from 'react-native';

const searchIcon = require('../assets/icons/search.png');
const multiPhoto = require('../assets/icons/multiPhoto.png');

const duumy_search = [
  {
    id: 1,
    img: 'https://media.istockphoto.com/id/619088796/ko/%EC%82%AC%EC%A7%84/%ED%94%BC%ED%8A%B8-%EB%8B%88%EC%8A%A4-%EC%86%8C%EB%85%80-%EC%95%84%EC%B9%A8%EC%97%90-%EC%95%84%EB%A0%B9%EC%9D%84-%EB%A6%AC%ED%94%84%ED%8C%85.jpg?s=612x612&w=0&k=20&c=2zCwZ8LyFf7nW4ZHw5VU-_-1Mg1JacvGU_E1qTbREU4=',
    isMulti: true,
  },
  {
    id: 2,
    img: 'data:image/jpeg;base64,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',
    isMulti: false,
  },
  {
    id: 3,
    img: 'https://kr.imboldn.com/wp-content/uploads/2022/07/newbie_guide_fitness_pt1_main.jpg',
    isMulti: true,
  },
  {
    id: 4,
    img: 'data:image/jpeg;base64,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',
    isMulti: false,
  },
  {
    id: 5,
    img: 'https://health.chosun.com/site/data/img_dir/2023/01/05/2023010502072_0.jpg',
    isMulti: true,
  },
  {
    id: 6,
    img: 'https://health.chosun.com/site/data/img_dir/2023/04/04/2023040401907_0.jpg',
    isMulti: false,
  },
];

const Search = ({navigation}) => {
  const [keyword, setKeyword] = useState('');
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
        <View style={styles.searchContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchList')}
            style={styles.searchWrapper}>
            <TouchableOpacity style={styles.searchIconStyle}>
              <Image source={searchIcon} style={{width: 24, height: 24}} />
            </TouchableOpacity>
            <Text allowFontScaling={false} style={styles.inputStyle}>
              검색어를 입력하세요.
            </Text>
          </TouchableOpacity>
        </View>
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
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    height: 68,
    backgroundColor: '#FFF',
  },
  searchWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 4,
  },
  searchIconStyle: {
    marginLeft: 16,
    marginRight: 2,
  },
  inputStyle: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    fontWeight: '400',
    color: '#828282',
    paddingRight: 12,
  },
});

export default Search;
