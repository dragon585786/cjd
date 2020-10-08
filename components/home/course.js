import React, {useRef, useState, useEffect} from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar, ImageBackground, TextInput, FlatList, StyleSheet } from 'react-native';
import { FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons';

export default function CourseAvailable ({ navigation, route}){
    const [list, setList] = useState([
        {
          image: 'https://wallpaperaccess.com/full/170712.jpg',
          key: 1
        },
        {
          image: 'https://wallpapers.moviemania.io/phone/movie/324552/c93e2f/john-wick-chapter-2-phone-wallpaper.jpg?w=1536&h=2732',
          key: 2
        },
        {
          image: 'https://images.hdqwalls.com/download/iron-man-infinity-gauntlet-avengers-endgame-nj-800x1280.jpg',
          key: 3
        },
        {
          image: 'https://fsb.zobj.net/crop.php?r=vT3wekppkkiqZZV7NJluOpW4OTc5cIRZg-wXPasw3_ySASpMR2Fo15ub3SJ8yKuBfO_K9LW8LD08P0gCpDxwCrHUYkX9B0e9hZoqx4rujsFjvO7UAPyqy0oae0ypeP7Rx020BcNWzdlb3UZV',
          key: 4
        },
        {
          image: 'https://neuetechs.com/wp-content/uploads/2019/06/5-7-720x1280.jpg',
          key: 5
        },
        {
          image: 'https://i.pinimg.com/originals/ce/f6/1b/cef61b67c8b5facd862f9b18aa4f29f5.jpg',
          key: 6
        },
      ]);
        return ( <View>
             <FlatList style={{ marginBottom: 30 }}
          data={list}
          horizontal={false}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ marginHorizontal: 10, marginBottom: 30, }}
                onPress={() => {
                  navigation.navigate('PlayVideo');
                }}
              >
                <Image source={{ uri: item.image }} style={{ height: 200, width: 312, borderRadius: 10 }}

                />
                <View style={{ position: 'absolute', borderRadius: 10, borderColor: '#02ad94', paddingHorizontal: 151, paddingVertical: 95, borderWidth: 5, opacity: 0.8 }}>

                </View>
                <FontAwesome5 name="play" size={38} color="#fff" style={{ position: 'absolute', top: '45%', left: '45%', opacity: 0.9 }} />
              </TouchableOpacity>
            )
          }}
        />
        </View> );
    
}
 
