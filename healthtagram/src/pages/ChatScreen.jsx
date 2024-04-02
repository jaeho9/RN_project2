import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const leftArrow = require('../assets/icons/leftArrow.png');
const rightArrow = require('../assets/icons/rightArrow.png');
const dummy_data = [
    {
        id: 1,
        name: 'User 1',
        content: 'Hello',
        created_date: '12:03PM',
        position: 'left'
    },
    {
        id: 2,
        name: 'User 2',
        content: 'Hi there!',
        created_date: '12:04PM',
        position: 'right'
    },
    // Add more dummy data here
];

const ChatScreen = () => {
    const renderItem = ({ item }) => (
        <View style={[styles.messageContainer, item.position === 'left' ? styles.leftMessage : styles.rightMessage]}>
            <Text style={styles.messageText}>{item.content}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={leftArrow} style={styles.backButton} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Chat</Text>
            </View>
            <FlatList
                data={dummy_data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.messages}
                inverted
            />
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Type a message..." />
                <TouchableOpacity style={styles.sendButton}>
                    <Image source={rightArrow} style={styles.sendIcon} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#EAEAEA',
    },
    backButton: {
        width: 24,
        height: 24,
        marginRight: 12,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333333',
    },
    messages: {
        flexGrow: 1,
        paddingHorizontal: 12,
        paddingBottom: 12,
    },
    messageContainer: {
        maxWidth: '70%',
        padding: 8,
        borderRadius: 8,
        marginBottom: 8,
    },
    leftMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#F0F0F0',
    },
    rightMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#DCF8C6',
    },
    messageText: {
        fontSize: 16,
        color: '#333333',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#EAEAEA',
        padding: 8,
    },
    input: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#F5F5F5',
        marginRight: 8,
    },
    sendButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#0084FF',
    },
    sendIcon: {
        width: 24,
        height: 24,
        tintColor: '#FFFFFF',
    },
});

export default ChatScreen;
