import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
// import { getListBasedOnLocation } from '../apis/location';

const LocationBasedList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        // 위치 기반 리스트를 가져오는 함수 호출
        const fetchList = async () => {
            const data = await getListBasedOnLocation();
            setList(data);
        };
        fetchList();
    }, []);

    return (
        <View>
            <Text style={{margin:40}}>위치 기반 리스트</Text>
            {list.map(item => (
                <Text key={item.id}>{item.name}</Text>
            ))}
        </View>
    );
};

export default LocationBasedList;
