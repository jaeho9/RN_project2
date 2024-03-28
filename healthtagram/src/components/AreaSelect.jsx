// AreaSelect.jsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const AreaSelect = ({ cities, districts, dongs, onCityChange, onDistrictChange, onDongChange }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.headerText}>중고 거래 서비스</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.pickerContainer}>
                    <RNPickerSelect
                        style={pickerSelectStyles}
                        value={cities.selectedCity}
                        placeholder={{ label: '도시 선택', value: '' }}
                        onValueChange={(value) => onCityChange(value)}
                        items={cities.uniqueCities.map(city => ({ label: city, value: city }))}
                    />
                    <RNPickerSelect
                        style={pickerSelectStyles}
                        value={districts.selectedDistrict}
                        placeholder={{ label: '구 선택', value: '' }}
                        onValueChange={(value) => onDistrictChange(value)}
                        items={districts.uniqueDistricts.map(district => ({ label: district, value: district }))}
                        disabled={!cities.selectedCity}
                    />
                    <RNPickerSelect
                        style={pickerSelectStyles}
                        value={dongs.selectedDong}
                        placeholder={{ label: '동 선택', value: '' }}
                        onValueChange={(value) => onDongChange(value)}
                        items={dongs.uniqueDongs.map(dong => ({ label: dong, value: dong }))}
                        disabled={!districts.selectedDistrict}
                    />
                </View>
                <TouchableOpacity
                    style={{ padding: 10, backgroundColor: 'lightblue', marginTop: 20 }}
                    onPress={() => {
                        // 선택된 도시, 구, 동을 이용하여 검색 기능 실행
                        console.log(cities.selectedCity, districts.selectedDistrict, dongs.selectedDong);
                    }}
                >
                    <Text>검색</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

export default AreaSelect;
