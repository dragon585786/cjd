import React, { useRef, useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar, ImageBackground, TextInput, FlatList, StyleSheet, Button } from 'react-native';
// import { Button } from 'react-native-paper';

export default function PlayVideo({ navigation, route }) {

    return (<View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
        <Text>PlayVideo
            </Text>
        <Button title="Return Home"
            color="#841584"
            onPress={() => {
                navigation.navigate('Home');
            }}
        />
    </View>);

}

