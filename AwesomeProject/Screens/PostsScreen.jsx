import React, { useEffect } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import User from '../Components/User';
import { StyleSheet,SafeAreaView,  View, Text, TouchableOpacity } from 'react-native';
import PostsList from '../Components/PostsList';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/auth/authOperations';
import { useNavigation } from '@react-navigation/native';
import { email, isLogined, name } from '../redux/auth/authSelectors';
import { getAllPosts } from '../redux/posts/postsOperations';
import { userPosts } from '../redux/posts/postsSelectors';

const PostsScreen = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isLoggedIn = useSelector(isLogined);
  const postsList = useSelector(userPosts);
  const userName = useSelector(name);
  const userEmail = useSelector(email);


  console.log('postsList', postsList)

  const { posts } = postsList;
  

  useEffect(() => {
    if (!isLoggedIn) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    dispatch(getAllPosts()).unwrap();
  }, [dispatch])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Публікації</Text>
        <View>
          <TouchableOpacity style={styles.logoutBtn}
            onPress={()=>dispatch(logOut())}
          >
            <Ionicons name="log-out-outline" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.main}>

        <View style={styles.userContainer}>
          <View style={styles.userPhoto}></View>
          <View style={styles.userInfo}>
              <View>
              <Text style={styles.name}>{userName}</Text>
              </View>
              <View>
              <Text style={styles.email}>{userEmail }</Text>
              </View>
          </View>
    </View>

        <PostsList array = {posts} />
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
   userPhoto: {
        width: 60,
        height: 60,
        marginRight: 8,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
    },
    userInfo: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    name: {
        fontFamily: "Bold",
        fontSize: 13,
        lineHeight: 15,
    },
    email: {
        fontSize: 11,
        lineHeight: 13,
  },
    userContainer: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 32,
    },
});

export default PostsScreen;