import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const NeighborhoodList = ({ navigation }) => {
    const [selectedNeighborhood, setSelectedNeighborhood] = useState(null);

    const handleNeighborhoodSelect = (neighborhood) => {
        // 선택한 동네에 해당하는 화면으로 이동
        navigation.navigate('NeighborhoodItemList', { neighborhood });
    };

    return (
        <View>
            <Text>시, 구, 동 선택</Text>
            <TouchableOpacity onPress={() => handleNeighborhoodSelect('강남구')}>
                <Text>강남구</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNeighborhoodSelect('종로구')}>
                <Text>종로구</Text>
            </TouchableOpacity>
            {/* 필요한 만큼 동네 목록을 추가할 수 있습니다 */}
        </View>
    );
};

export default NeighborhoodList;
