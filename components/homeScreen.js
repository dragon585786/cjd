import React, { useRef, useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar, ImageBackground, TextInput, FlatList, StyleSheet } from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import { FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons';
import Search from './search/search';
import PlayVideo from './home/playVideo';
import ViewAll from './home/viewAll';
import ContinueVideo from './home/continue';
import MyList from './home/myList';
import CourseAvailable from './home/course';

export default function HomeScreen({ navigation, route }) {
  const [background, setBackground] = useState({
    uri: 'https://i.pinimg.com/originals/e2/17/4a/e2174ab4d1f9c72de64bdffa283a1073.jpg',
    name: 'Avenger: End Game',
    stat: '2019 : Action/Sci-Fi : 3h 2m',
    desc: '$2.798 billion. Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the direct sequel to Avengers: Infinity War (2018) and the 22nd film in the Marvel Cinematic Universe (MCU) ...'

  });
  const [gallery, setGallery] = useState([
    {
      image: 'https://i.pinimg.com/originals/e2/17/4a/e2174ab4d1f9c72de64bdffa283a1073.jpg',
      title: 'Avenger: End Game',
      released: '2019 : Action/Sci-Fi : 3h 2m',
      key: 1,
      desc: '$2.798 billion. Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the direct sequel to Avengers: Infinity War (2018) and the 22nd film in the Marvel Cinematic Universe (MCU) ...'
    },
    {
      image: 'https://vistapointe.net/images/this-is-the-end-5.jpg',
      title: 'This Is The End',
      released: '2013 :  Comedy :  1h 47m',
      key: 2,
      desc: 'Six Los Angeles celebrities are stuck in James Francos house after a series of devastating events just destroyed the city. Inside, the group not only have to face the apocalypse, but themselves'
    },
    {
      image: 'https://wallpapercave.com/wp/wp5678361.jpg',
      title: 'Orphan',
      released: '2009 :  Horror, Mystery, Thriller : 2h 3m',
      key: 3,
      desc: 'A husband and wife who recently lost their baby adopt a 9 year-old girl who is not nearly as innocent as she claims to be.'
    },
    {
      image: 'https://i.pinimg.com/736x/34/da/cd/34dacd1c3965128a04c7bbf4c0d819ff.jpg',
      title: 'Naruto',
      released: '2002 - 2007 : Comedy/Action/Sci-Fi ',
      key: 4,
      desc: 'Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the villages leader and strongest ninja.'
    },

  ]);
  
  const carouselRef = useRef(null);
  const { width, height } = Dimensions.get('window');
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            carouselRef.current.scrollToIndex(index);
            setBackground({
              uri: item.image,
              name: item.title,
              stat: item.released,
              desc: item.desc
            })
          }}>
          <Image source={{ uri: item.image }} style={styles.carouselImage} />
          <Text style={styles.carouselText}>{item.title}</Text>
          <MaterialIcons name='library-add' size={30} color="white" style={styles.carouselIcon} />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
      <StatusBar backgroundColor="#0ba8b0" />
      <View style={styles.carouselContentContainer}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: '#000' }}>
          <ImageBackground
            source={{ uri: background.uri }}
            style={styles.ImageBg}
            blurRadius={10}
          >
            <Search />
            {/* <View style={styles.searchBoxContainer}>
                    <TextInput 
                      placeholder='Search Movies'
                      placeholderTextColor='#666'
                      style={styles.SearchBox}
                    />
                    <Feather name='search' size={22} color='#666' style={styles.searchBoxIcon} />
                  </View> */}
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginLeft: 10, marginVertical: 10 }}>
              Top Picks This Week
                  </Text>
            <View style={styles.carouselContainerView}>
              <Carousel style={styles.carousel}
                data={gallery}
                renderItem={renderItem}
                itemWidth={200}
                containerWidth={width - 20}
                ref={carouselRef}
                inActiveOpacity={0.4}
              />
            </View>
            <View style={styles.movieInfoContainer}>
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.movieName}>{background.name}</Text>
                <Text style={styles.movieStat}>{background.stat}</Text>

              </View>
              <TouchableOpacity style={styles.playIconContainer}
                onPress={() => {
                  navigation.navigate('PlayVideo');
                }}
              >
                <FontAwesome5 name='play' size={22} color='#02ad94' style={
                  { marginLeft: 4 }
                }></FontAwesome5>
              </TouchableOpacity>

            </View>
            <View style={{ paddingHorizontal: 14, marginTop: 14 }}>
              <Text style={{ color: 'white', opacity: 0.8, lineHeight: 20 }}>{background.desc}</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={{ marginHorizontal: 14 }}>
        <ContinueVideo navigation={navigation} />
        {/* <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 24, marginTop: '20%' }}>Continue Watching</Text>
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
        </ImageBackground> */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, marginTop: 24 }}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>My List</Text>
          <Text style={{ color: 'white', fontSize: 14, fontWeight: 'normal' }}
            onPress={() => {
              navigation.navigate('ViewAll');
            }}>View All</Text>

        </View>
        <MyList navigation={navigation} />
        {/* <FlatList style={{ marginBottom: 30 }}
          data={list}
          horizontal={true}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ marginRight: 20 }}
                onPress={() => {
                  navigation.navigate('PlayVideo');
                }}
              >
                <Image source={{ uri: item.image }} style={{ height: 300, width: 200 }}

                />
                <View style={{ position: 'absolute', height: 5, width: '100%', backgroundColor: '#02ad94', opacity: 0.8 }}>

                </View>
                <FontAwesome5 name="play" size={38} color="#fff" style={{ position: 'absolute', top: '45%', left: '45%', opacity: 0.9 }} />
              </TouchableOpacity>
            )
          }}
        /> */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, marginTop: 24 }}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Courses Available</Text>
          {/* <Text style={{color:'white', fontSize:14, fontWeight:'normal'}}>View All</Text> */}
        </View>
        <CourseAvailable navigation={navigation} />
        {/* <FlatList style={{ marginBottom: 30 }}
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
        /> */}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  carouselContentContainer: {
    flex: 1,
    backgroundColor: '#000',
    height: 726,
    paddingHorizontal: 14,
    // position:'absolute'
  },
  ImageBg: {
    flex: 1,
    height: null,
    width: null,
    opacity: 1,
    justifyContent: 'flex-start',

  },
  searchBoxContainer: {
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 4,
    marginVertical: 30,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  SearchBox: {
    padding: 12,
    paddingLeft: 20,
    fontSize: 16,
  },
  searchBoxIcon: {
    position: 'absolute',
    right: 20,
    top: 14,
  },
  carouselContainerView: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },
  carousel: {
    flex: 1,
    overflow: 'visible',

  },
  carouselImage: {
    width: 200,
    height: 320,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: 'black'
  },
  carouselText: {
    padding: 14,
    color: 'white',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold'
  },
  carouselIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  movieInfoContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 14

  },
  movieName: {
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 6,

  },
  movieStat: {
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    opacity: 0.8
  },
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