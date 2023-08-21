import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import User from '../Components/User';
import { StyleSheet,SafeAreaView,  View, Text, TouchableOpacity } from 'react-native';
import PostsList from '../Components/PostsList';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/auth/authOperations';

const dispatch = useDispatch();
  
const PostsScreen = () => {
  const array = [{
    id:1,
    photo:'../Images/user.png',
    title:'Forest',
    locationDescription: 'lviv',
    comments: [],
    likes: [],
    location: {coords: 
{accuracy: 39, 
altitude: 374.66754150390625, 
altitudeAccuracy: 21.52643394470215, 
heading: -1, 
latitude: 49.8197213269016, 
longitude: 24.06016023325153, 
speed: -1},
 timestamp: 1692354636169.4841}
  },
    ]
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Публікації</Text>
        <View>
          <TouchableOpacity style={styles.logoutBtn} onPress={()=>dispatch(logOut())}>
            <Ionicons name="log-out-outline" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.main}>
        <User />
        <PostsList array = {array} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
    backgroundColor: "#FFF",
  },
  headerContainer: {
    paddingTop: 55,
    paddingBottom: 11,

    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    backgroundColor: "#FFF",
  },
  logoutBtn: {
    position: "absolute",
    bottom: 0,
    right: 20,
  },
  title: {
    textAlign: "center",
    fontFamily: "Medium",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: "#212121",
  },
  main: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#FFF",
  },
});

export default PostsScreen;