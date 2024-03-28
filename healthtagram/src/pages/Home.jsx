import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AreaSelect from '../components/AreaSelect';
import { dongList } from '../components/dongList';

const parsedLocations = dongList.map(location => {
    const [city, district, dong] = location.split(' ');
    return {
        city,
        district,
        dong
    };
});

const Home = () => {
    const [cities, setCities] = useState({ selectedCity: '', uniqueCities: [] });
    const [districts, setDistricts] = useState({ selectedDistrict: '', uniqueDistricts: [] });
    const [dongs, setDongs] = useState({ selectedDong: '', uniqueDongs: [] });

    useEffect(() => {
        // 중복되지 않는 도시 목록 생성
        const uniqueCities = [...new Set(parsedLocations.map(location => location.city))];
        setCities({ selectedCity: '', uniqueCities });
    }, []);

    useEffect(() => {
        // 선택된 도시에 해당하는 중복되지 않는 구 목록 생성
        if (cities.selectedCity) {
            const uniqueDistricts = [...new Set(parsedLocations.filter(location => location.city === cities.selectedCity).map(location => location.district))];
            setDistricts({ selectedDistrict: '', uniqueDistricts });
        } else {
            setDistricts({ selectedDistrict: '', uniqueDistricts: [] });
        }
    }, [cities.selectedCity]);

    useEffect(() => {
        // 선택된 도시와 구에 해당하는 중복되지 않는 동 목록 생성
        if (cities.selectedCity && districts.selectedDistrict) {
            const uniqueDongs = [...new Set(parsedLocations.filter(location => location.city === cities.selectedCity && location.district === districts.selectedDistrict).map(location => location.dong))];
            setDongs({ selectedDong: '', uniqueDongs });
        } else {
            setDongs({ selectedDong: '', uniqueDongs: [] });
        }
    }, [cities.selectedCity, districts.selectedDistrict]);

    return (
        <AreaSelect
            cities={cities}
            districts={districts}
            dongs={dongs}
            onCityChange={(value) => setCities({ selectedCity: value, uniqueCities: cities.uniqueCities })}
            onDistrictChange={(value) => setDistricts({ selectedDistrict: value, uniqueDistricts: districts.uniqueDistricts })}
            onDongChange={(value) => setDongs({ selectedDong: value, uniqueDongs: dongs.uniqueDongs })}
        />
    );
};

export default Home;
