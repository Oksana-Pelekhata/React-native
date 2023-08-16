import React from 'react'
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';

const Tabs = createBottomTabNavigator();


const Home = () => {
  return (
     <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
        height: 83,
        backgroundColor: '#fff'
        },
        tabBarActiveBackgroundColor: '#FF6C00',
        tabBarInactiveTintColor: '#212121',
        tabBarActiveTintColor: '#fff',
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "PostsScreen") {
            iconName = "grid-outline";
          } else if (route.name === "CreatePostsScreen") {
            iconName = "add";
          }
          else if (route.name === "ProfileScreen") {
            iconName = "person-outline";
          }
        return <Ionicons name={iconName} size={24} color={color} />
        },
      })}
    
    >
      <Tabs.Screen name="PostsScreen" component={PostsScreen} options={{
        tabBarItemStyle: {
          height: 50,
          borderRadius: 50,
          marginTop: 9,
          marginRight: 10,
          marginLeft: 20,
        },
        headerShown: false
      }
      } />
      <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen} options={{
         tabBarItemStyle: {
            height: 50,
            borderRadius: 50,
            marginTop: 9,
          marginHorizontal: 5,
        },
        tabBarStyle: { display: "none" },
        headerShown: false
      }} />
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} options={{
         tabBarItemStyle: {
            height: 50,
            borderRadius: 50,
            marginTop: 9,
            marginRight: 20,
            marginLeft: 10,
        },
        headerShown: false
      }} />
    </Tabs.Navigator>
  );
}


export default Home

