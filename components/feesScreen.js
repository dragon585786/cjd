import React, {useRef, useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar, ImageBackground, TextInput, FlatList, } from 'react-native';


export default function FeedScreen ({ navigation, route}){
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <StatusBar backgroundColor="#0ba8b0" /> */}

          <Text>FeedScreen!</Text>
        </View>
      );
}