import React, {useRef, useState, useEffect} from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar, ImageBackground, TextInput, FlatList, StyleSheet } from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import {FontAwesome5, Feather, MaterialIcons} from '@expo/vector-icons';
export default function HomeScreen (props){
  const [background,setBackground] = useState({
   uri:'https://i.pinimg.com/originals/e2/17/4a/e2174ab4d1f9c72de64bdffa283a1073.jpg',
   name:'Avenger: End Game',
   stat:'2019 : Action/Sci-Fi : 3h 2m',
   desc:'$2.798 billion. Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the direct sequel to Avengers: Infinity War (2018) and the 22nd film in the Marvel Cinematic Universe (MCU) ...'


  })
    return (
       <ScrollView>
         <View style={styles.carouselContentContainer}>
              <View style={{...StyleSheet.absoluteFill, backgroundColor:'#000'}}>
                  <ImageBackground
                  source={{uri: background.uri}}
                  style={styles.ImageBg}>
                  {/* blurRadius={1} */}
                  <View style={styles.searchBoxContainer}>
                    <TextInput 
                      placeholder='Search Movies'
                      placeholderTextColor='#666'
                      style={styles.SearchBox}
                    />
                    <Feather name='search' size={22} color='#666' style={styles.searchBoxIcon} />
                  </View>
                  <Text style={{ color:'white', fontSize:24, fontWeight:'bold', marginLeft:10, marginVertical:10}}>
                    Top Picks This Week
                  </Text>
                  </ImageBackground>
              </View>
         </View>
       </ScrollView>
      );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  carouselContentContainer:{
    flex:1,
    backgroundColor:'#000',
    height:726,
    paddingHorizontal: 14,
    // position:'absolute'
  },
  ImageBg:{
    flex:1,
    height:null,
    width:null,
    opacity:1,
    justifyContent:'flex-start',
  
  },
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
  }
})