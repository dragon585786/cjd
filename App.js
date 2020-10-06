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




function getHeaderTitle(route) {
  const routeName = route.state ? route.state.routes[route.state.index].name : "Home";

  switch (routeName) {
    case "Home":
      return "Home";
    case "Chats":
      return "Chats";
    case "Settings":
      return "Settings";
      case "Search":
        return "Search";
  }
}

function shouldHeaderBeShown(route) {
  const routeName = route.state ? route.state.routes[route.state.index].name : "Home";
  switch (routeName) {
    case "Home":
      return false;
  }
}
const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();


const HomeTabNavigator = ({ navigation, route }) => {
  return (
    <Tab.Navigator
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
            iconName = "ios-settings";
          }
          return <Ionicons name={iconName} size={26} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} 
       options={{
          tabBarLabel: 'Home',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Chats" component={FeedScreen}
       options={{
          tabBarLabel: 'Chats',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Ionicons name="logo-rss" color={color} size={26} />
          ),
        }}
         />
      <Tab.Screen name="Settings" component={SettingsScreen}
       options={{
          tabBarLabel: 'Settings',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-settings" color={color} size={26} />
          ),
        }}
       />
        <Tab.Screen name="Search" component={Search}
       options={{
          tabBarLabel: 'Search',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-person" color={color} size={26} />
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
            headerShown: shouldHeaderBeShown(route)
          })}
          name="Home"
          component={HomeTabNavigator}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}