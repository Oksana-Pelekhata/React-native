import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import { Image, Keyboard, SafeAreaView, StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import BackgroundImage from '../Images/BG.jpg'
import ProfilePhoto from '../Components/ProfilePhoto'
import ProfileList from '../Components/ProfileList'

const ProfileScreen = () => {
  const array = [{
    id:1,
    photo:'',
    title:'Forest',
    location: 'lviv',
    comments: [],
    likes:[]
  },
    {
    id:2,
    photo:'',
    title:'Forest',
    location: 'lviv',
      comments: [],
    likes:[]
  }]
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <SafeAreaView style={styles.container}>
        <Image source={BackgroundImage} style={styles.background} />
        <View style={styles.profileBody}>
        <TouchableOpacity style={styles.logoutBtn}>
          <Ionicons name="log-out-outline" size={28} color="#BDBDBD" />
          </TouchableOpacity>
          <ProfilePhoto />
          <Text style={styles.userName}>{userName}</Text>
          <ProfileList array={array} />
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
    
  },
})

export default ProfileScreen