import React, { useRef, useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar, ImageBackground, TextInput, FlatList, StyleSheet, Button } from 'react-native';
// import { Button } from 'react-native-paper';
import { Video } from 'expo-av';
import Orientation from 'react-native-orientation';
import { FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons';
const { width } = Dimensions.get('window');

const [stat,setStat] = useState({
    currentTime: 0,
      duration: 0.1,
      paused: false,
      overlay: false,
      fullscreen: false
})
export default function PlayVideo({ navigation, route }) {

    return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Text>PlayVideo
            </Text>
        <Video
            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
            rate={1.0}
            volume={8.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            
            style={{ width:{width}, height: 300 }}
        />
        <Button title="Return Home"
            color="#841584"
            onPress={() => {
                navigation.navigate('Home');
            }}
        />
    </View>);

}



