import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity, Alert,  ScrollView, Dimensions, StatusBar, ImageBackground, Button, TextInput, FlatList, } from 'react-native';
import { FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title:'Profile',
    icon:'person'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Contact Us',
    icon:'perm-contact-calendar'

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Logout',
    icon:'exit-to-app'

  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
export default function SettingsScreen({ navigation, route }) {
  const renderItem = ({ item }) =>{
    return(<TouchableOpacity onPress={()=>{
      if(item.title == 'Logout'){
        return navigation.navigate('RootStackScreen');
      }else{
        return  Alert.alert('Button is working fine!', 'You should focuse on UI of App Idiot', [ {text: 'Okay'}]);
      }
    }}>
    <View style={{ flexDirection:'row', padding: 10, marginVertical: 4,width:320,alignItems:'center',paddingHorizontal:60 }}>
    <MaterialIcons name={item.icon} size={60} color="aqua" />
    <Item title={item.title} />
    </View>
    </TouchableOpacity>
    );
  } ;
  return (<View style={styles.container}>
  
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Animatable.View 
       animation="bounceInUp"
      style={styles.cardContainer}>
        <Image source={require('../assets/logo.png')} style={styles.cardImage}/>
        <MaterialIcons style={{marginTop:-20, marginBottom:20}} name="verified-user" size={24} color="#0ba8b0" />
        
        <Text style={{fontSize:30,fontWeight:'bold',marginVertical:3, color:'black'}}>Salim Khan</Text>
        <Text style={{fontSize:15,fontWeight:'bold',marginVertical:3, color:'grey'}}>sk9022522568@gmail.com</Text>
        <Text style={{fontSize:15,fontWeight:'bold',marginVertical:3, color:'grey'}}>Role</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:15,fontWeight:'bold',marginVertical:3, color:'black'}}>Admin{' '}</Text>
        <Feather name="edit-3" size={24} color="black" />
        </View>
        


      </Animatable.View>
    </View>
    <Animatable.View 
       animation="bounceInUp"    
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
       <SafeAreaView style={{marginTop:50}} >

      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>
    </Animatable.View>
  </View>



  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    // backgroundColor: '#f9c2ff',
    // padding: 20,
    marginVertical: 15,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  cardContainer: {
    height: 300,
    width: 300,
    margin: 30,
    marginTop:130,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 40,
    paddingTop:0,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
  },
  
  cardImage: {
    height: 120,
    width: 120,
    marginTop:-60,
    marginBottom:50,
    borderWidth: 3,
    borderColor: '#4FA589',
    borderRadius:60,
  }
});