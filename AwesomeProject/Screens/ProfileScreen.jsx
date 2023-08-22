import React, { useEffect } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import { Image, Keyboard, SafeAreaView, StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import BackgroundImage from '../Images/BG.jpg'
import ProfilePhoto from '../Components/ProfilePhoto'
import ProfileList from '../Components/ProfileList'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { name } from '../redux/auth/authSelectors';
import { userPosts } from '../redux/posts/postsSelectors';
import { getAllPosts } from '../redux/posts/postsOperations';
import { logOut } from '../redux/auth/authOperations';

const ProfileScreen = () => {
   const dispatch = useDispatch();
  const navigation = useNavigation();
  const postsList = useSelector(userPosts);
  const userName = useSelector(name);



  console.log('postsList', postsList)

  const { posts } = postsList;

    useEffect(() => {
    dispatch(getAllPosts()).unwrap();
  }, [dispatch])
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <SafeAreaView style={styles.container}>
        <Image source={BackgroundImage} style={styles.background} />
        <View style={styles.profileBody}>
          <TouchableOpacity style={styles.logoutBtn}
          onPress={()=>dispatch(logOutc())}>
          <Ionicons name="log-out-outline" size={28} color="#BDBDBD" />
          </TouchableOpacity>
          <ProfilePhoto />
          <Text style={styles.userName}>{userName }</Text>
          <ProfileList array={posts} />
        </View> 
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
        width: "100%",
        flex: 1,
    },
    background: {
        width: "100%",
      position: "absolute",
    },
  profileBody: {
      backgroundColor: "#fff",
      borderTopLeftRadius: "25",
      borderTopRightRadius: "25",
      marginTop: "auto",
      paddingHorizontal: 16,
      paddingTop: 92,
      paddingBottom: 78,
      height: "84%",
      paddingBottom: 78,
  },

  logoutBtn: {
    position: "absolute",
    top: 10,
    right: 24,
  },
  userName: {
    fontFamily: "Medium",
    marginBottom: 15,
    fontSize: 30,
    letterSpacing: 0.01,
    lineHeight: 35.16,
    textAlign: 'center',
    color: '#212121',
  },
})

export default ProfileScreen