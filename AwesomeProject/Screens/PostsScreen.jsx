import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import User from '../Components/User';
import { StyleSheet,SafeAreaView,  View, Text, TouchableOpacity } from 'react-native';

const PostsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Публікації</Text>
        <View>
          <TouchableOpacity style={styles.logOutBtn}>
            <Ionicons name="log-out-outline" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <User />
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
  header: {
    paddingTop: 55,
    paddingBottom: 11,

    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    backgroundColor: "#FFF",
  },

  logOutBtn: {
    position: "absolute",
    bottom: 0,
    right: 20,
  },
  headerText: {
    textAlign: "center",
    fontFamily: "Medium",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: "#212121",
  },
  content: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
  },
});

export default PostsScreen;