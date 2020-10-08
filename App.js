import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from "@react-navigation/stack";

import HomeScreen from './components/homeScreen';
import SettingsScreen from './components/settingsScreen';
import FeedScreen from './components/feesScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Search from './components/search/search';
import PlayVideo from './components/home/playVideo';
import ViewAll from './components/home/viewAll';
import ContinueVideo from './components/home/continue';
import MyList from './components/home/myList';
import CourseAvailable from './components/home/course';

// import RootStackScreen from './Login/RootStackScreen';
import SplashScreen from './Login/SplashScreen';
import SignInScreen from './Login/SignInScreen';
import SignUpScreen from './Login/SignUpScreen';






function getHeaderTitle(route) {
  const routeName = route.state ? route.state.routes[route.state.index].name : "Home";

  switch (routeName) {
    // case "Home":
    //   return "Homes";
    case "Chats":
      return "Chats";
    case "Settings":
      return "Settings";
      case "Search":
        return "Search";
  }
}

function shouldHeaderBeShown(route) {
  const routeName = route.state ? route.state.routes[route.state.index].name : "HomeTabNavigator";
  switch (routeName) {
    case "HomeTabNavigator":
      return false;
  }
}
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const RootStack = createStackNavigator();

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator>
      <RootStack.Screen
      options={({ route }) => ({
            // title: getHeaderTitle(route),
            headerShown: false
          })}
       name="SplashScreen" component={SplashScreen}/>
      <RootStack.Screen
        options={({ route }) => ({
            // title: getHeaderTitle(route),
            headerShown: false
          })}
       name="SignInScreen" component={SignInScreen}/>
      <RootStack.Screen
        options={({ route }) => ({
            // title: getHeaderTitle(route),
            headerShown: false
          })}
       name="SignUpScreen" component={SignUpScreen}/>
      {/* <RootStack.Screen name="HomeTabNavigator" component={HomeTabNavigator}/> */}
  </RootStack.Navigator>
);

const HomeStackNavigation = ({ navigation, route }) =>{
  return(
    <HomeStack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          // transitionSpec: {
          //   open: config,
          //   close: closeConfig
          // }
        }}
        headerMode="float"
        animation="fade"
        // headerMode='none'
      >
        <HomeStack.Screen
          options={({ route }) => ({
            // title: getHeaderTitle(route),
            headerShown: false
          })}
          name="Home"
          component={HomeScreen}
        />
        <HomeStack.Screen
        //  options={({ route }) => ({
        //     title: getHeaderTitle(route),
        //     headerShown: true
        //   })}
         name="PlayVideo" component={PlayVideo} />
        <HomeStack.Screen
        //  options={({ route }) => ({
        //     title: getHeaderTitle(route),
        //     headerShown: true
        //   })}
         name="ViewAll" component={ViewAll} />
        {/* <HomeStack.Screen name="ContinueVideo" component={ContinueVideo} /> */}
        {/* <HomeStack.Screen name="MyList" component={MyList} /> */}
        {/* <HomeStack.Screen name="CourseAvailable" component={CourseAvailable} /> */}
        {/* <HomeStack.Screen name="Settings" component={SettingsScreen} /> */}

      </HomeStack.Navigator>
  )
}

const HomeTabNavigator = ({ navigation, route }) => {
  return (
    <Tab.Navigator
    // headerMode='none'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name == "Home") {
            iconName = "ios-home";
          } else if (route.name == "Chats") {
            iconName = "logo-rss";
          } else if (route.name == "Settings") {
            iconName = "ios-settings";
          }
          else if (route.name == "Search") {
            iconName = "ios-search";
          }
          return <Ionicons name={iconName} size={26} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigation} 
       options={{
          tabBarLabel: 'Home',
          tabBarColor: '#1f65ff',
          headerShown:true,
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Chats" component={FeedScreen}
       options={{
          tabBarLabel: 'Chats',
          tabBarColor: '#009387',
          // headerShown:true,
          tabBarIcon: ({ color }) => (
            <Ionicons name="logo-rss" color={color} size={26} />
          ),
        }}
         />
           <Tab.Screen name="Search" component={Search}
       options={{
          tabBarLabel: 'Search',
          tabBarColor: '#d02860',
          // headerShown:true,
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-search" color={color} size={26} />
          ),
        }}
       />
      <Tab.Screen name="Settings" component={SettingsScreen}
       options={{
          tabBarLabel: 'Settings',
          tabBarColor: '#694fad',
          // headerShown:true,
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-settings" color={color} size={26} />
          ),
        }}
       />
      
    </Tab.Navigator>
  );
};


// const config = {
//   animation: "spring",
//   config: {
//     stiffness: 1000,
//     damping: 50,
//     mass: 3,
//     overshootClamping: false,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01
//   }
// };

// const closeConfig = {
//   animation: "timing",
//   config: {
//     duration: 500,
//     easing: Easing.linear
//   }
// };
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        //   transitionSpec: {
        //     open: config,
        //     close: closeConfig
        //   }
        }}
        headerMode="float"
        animation="fade"
      >
       <Stack.Screen
         options={({ route }) => ({
            title: getHeaderTitle(route),
            // headerShown: shouldHeaderBeShown(route)
            headerShown: false,
          })}
         name="HomeTabNavigator" component={HomeTabNavigator} />
        <Stack.Screen
          options={({ route }) => ({
            // title: getHeaderTitle(route),
            // headerShown: shouldHeaderBeShown(route)
            headerShown: false,
          })}
          name="RootStackScreen"
          // component={HomeTabNavigator}
          component={RootStackScreen}
        
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}