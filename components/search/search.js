import React, {useRef, useState, useEffect} from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar, ImageBackground, TextInput, FlatList, StyleSheet } from 'react-native';
import {FontAwesome5, Feather, MaterialIcons} from '@expo/vector-icons';

export default function Search({ navigation, route }){
    return(
        <View style={styles.searchBoxContainer}>
        <TextInput 
          placeholder='Search Movies'
          placeholderTextColor='#666'
          style={styles.SearchBox}
        />
        <Feather name='search' size={22} color='#666' style={styles.searchBoxIcon} />
      </View>
    )
};
const styles = StyleSheet.create({
    searchBoxContainer:{
        backgroundColor:'#fff',
        elevation:10,
        borderRadius:4,
        marginVertical:30,
        width:'95%',
        flexDirection:'row',
        alignSelf:'center'
      },
      SearchBox:{
        padding:12,
        paddingLeft:20,
        fontSize:16,
      },
      searchBoxIcon:{
        position:'absolute',
        right:20,
        top:14,
      },
});