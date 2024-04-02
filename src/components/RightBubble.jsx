import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
const rightBubbleTriangle = require('../assets/icons/Rectangle2.png');

const RightBubble = ({data, nextData}) => {
  console.log({data, nextData});
  return (
    <View style={[styles.chatRowWrapper, {marginLeft: 'auto'}]}>
      {nextData?.position !== data?.position && data.isOpen ? (
        <View style={styles.chatInfoWrapper}>
          <Text style={styles.chatTime}>읽음</Text>
          <View style={styles.microBar} />
          <Text style={styles.chatTime}>{data.created_date}</Text>
        </View>
      ) : nextData?.position !== data?.position && !data.isOpen ? (
        <View style={styles.chatInfoWrapper}>
          <Text style={styles.chatTime}>{data.created_date}</Text>
        </View>
      ) : (
        <View />
      )}

      <View style={styles.myBubbleWrapper}>
        <Text style={styles.myChat}>{data.content}</Text>
      </View>
      <Image
        source={rightBubbleTriangle}
        style={{width: 8, height: 8, marginTop: 6}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  mainContainer: {
    flex: 1,
  },
  headerWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  backButton: {
    width: 40,
    height: 40,
  },
  chattingScreen: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
  },
  chatRowWrapper: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 19.97,
    textAlign: 'center',
    color: '#000',
  },
  chatDayWrapper: {
    marginTop: 16,
    marginBottom: 8,
  },
  chatDay: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 17.47,
    textAlign: 'center',
  },

  chatTime: {
    fontSize: 12,
    fontWeight: '500',
    color: '#737373',
    lineHeight: 14.98,
  },
  myBubbleWrapper: {
    backgroundColor: '#6297FF',
    borderRadius: 8,
    padding: 8,
    maxWidth: 232,
  },
  myChat: {
    fontSize: 15,
    fontWeight: '500',
    color: '#FFF',
    lineHeight: 22.5,
  },
  microBar: {
    width: 1,
    height: 4,
    backgroundColor: '#D5D5D5',
  },
  chatInfoWrapper: {
    flexDirection: 'row',
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    marginRight: 4,
  },
});

export default RightBubble;
