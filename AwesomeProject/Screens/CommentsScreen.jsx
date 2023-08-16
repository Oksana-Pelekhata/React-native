import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";

const CommentsScreen = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Коментарі</Text>
          <TouchableOpacity style={styles.goBackBtn} onPress={()=> navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={'rgba(33, 33, 33, 0.8)'}/>
          </TouchableOpacity>
        </View>
        <View style={styles.commentsBody}>
          <View style={styles.photo}>
            <Image />
          </View>
          <ScrollView>
          <View style={styles.comments}>
              <View style={styles.singleComment}>
                <Image style={styles.avatar} />
                <View style={styles.singleCommentTextContainer}>
                  <Text style={styles.singleCommentText}></Text>
                  <Text style={styles.singleCommentTime}></Text>
                </View>
            </View>
          </View>
          </ScrollView>
          <View style={styles.addCommentContainer }>
            <TextInput style={styles.addCommentInput} />
            <TouchableOpacity style={styles.arrowIcon}>
              <Ionicons name="arrow-up-outline" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
        </View>
   </View>
    </TouchableWithoutFeedback>
    
  )
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  
    flex: 1,
  
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 11,
    paddingBottom:11,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
  },
  headerText: {
    textAlign: "center",
    justifyContent: 'center',
    fontFamily: "Medium",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: "#212121",
  },
  goBackBtn: {
    position: "absolute",
    left: 16,
    top: 13,
    color: 'rgba(33, 33, 33, 0.8)'
  },
  commentsBody: {
    
  },
  photo: {
    
  },
  comments: {

  },
  singleComment: {

  },
  avatar: {
    
  },
  singleCommentTextContainer: {
    
  },
  singleCommentText: {
    
  },
  singleCommentTime: {
    
  },
  addCommentContainer: {
    position: "relative",
    marginTop: "auto",
    paddingBottom: 16,
  },
  addCommentInput: {
    width: "100%",
    padding: 16,
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    borderColor: "#E8E8E8",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  arrowIcon: {
    position: "absolute",
    display: "flex",
    right: 8,
    bottom: 24,
    width: 34,
    height: 34,
    transform: [{ translateY: -0.5 * 0 }],
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
})
export default CommentsScreen