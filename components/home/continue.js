import React, {useRef, useState, useEffect} from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar, ImageBackground, TextInput, FlatList, StyleSheet } from 'react-native';
import { FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons';

export default function ContinueVideo ({ navigation, route}){
  
        return ( <View>
           <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 24, marginTop: '20%' }}>Continue Watching</Text>
        <ImageBackground
          source={{ uri: 'https://www.thehindu.com/entertainment/movies/4xicg2/article26618002.ece/ALTERNATES/LANDSCAPE_1200/how-to-train-your-dragon' }}
          style={{ height: 250, width: '100%', backgroundColor: '#000' }}
          resizeMode='cover' 
         >
          <Text style={{ color: 'white', padding: 14, }}>How To Train Your Dragon: The Hidden World</Text>
          <TouchableOpacity style={{ ...styles.playIconContainer, position: 'absolute', top: '40%', right: '40%' }}
           
          >
            <FontAwesome5 name='play' size={22} color='#02ad94' style={
              { marginLeft: 4 }
            }
            onPress={() => {
                navigation.navigate('PlayVideo');
            }}></FontAwesome5>
          </TouchableOpacity>
        </ImageBackground>
        </View> );
    
}
const styles = StyleSheet.create({
    playIconContainer: {
        backgroundColor: '#212121',
        padding: 18,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        borderWidth: 3,
        borderColor: '#4FA589',
        marginBottom: 14
    
      }
})
 
