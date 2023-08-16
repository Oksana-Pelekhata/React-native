import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import User from '../Components/User';
import { StyleSheet,SafeAreaView,  View, Text, TouchableOpacity } from 'react-native';
import PostsList from '../Components/PostsList';

const PostsScreen = () => {
  const array = []
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Публікації</Text>
        <View>
          <TouchableOpacity style={styles.logoutBtn}>
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