import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import Home from './Screens/Home'
import CreatePostsScreen from './Screens/CreatePostsScreen';
import User from './Components/User';
import PostsScreen from './Screens/PostsScreen';
import CommentsScreen from './Screens/CommentsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import MapScreen from './Screens/MapScreen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Regular': require('./assets/fonts/Roboto-Regular.ttf')
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="PostsScreen" component={PostsScreen} />
        <MainStack.Screen name="CommentsScreen" component={CommentsScreen} />
        <MainStack.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
        <MainStack.Screen name="ProfileScreen" component={ProfileScreen} />
        <MainStack.Screen name="MapScreen" component={MapScreen} />
      </MainStack.Navigator>
        </NavigationContainer>
            </PersistGate>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
