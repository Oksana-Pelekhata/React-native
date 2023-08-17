import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import { Image, ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';



const ProfileList = ({array}) => {
 return (
    array.length > 0 && (
      <ScrollView>
        {array.map((data) => {
          return (
            <View style={styles.postContainer} key={data.id}>
              <Image style={styles.photo} source={{ uri: data.photo }} />
              <Text style={styles.postTitle}>{data.title}</Text>
              <View style={styles.post}>
                <View style={styles.postfeedbackCont}>
                  <View>
                    <TouchableOpacity style={styles.postComments}>
                      <Ionicons name="chatbubble" size={24} color="#FF6C00"/>
                        <Text>{data.comments.length}</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity style={styles.postComments}>
                      <Ionicons name="heart-outline" size={24} color="#FF6C00"/>
                      <Text>{data.likes.length}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                    
                      <View>
                           <TouchableOpacity style={styles.postLocationInfo}>
                            <Ionicons name="location-outline" size={24} color="#BDBDBD" />
                            <Text style={styles.location}>{data.location}</Text>
                            </TouchableOpacity>
                      </View>
               
              </View>
            </View>
          );
        })}
      </ScrollView>
    )
  )
}
const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 34,
  },
  photo: {
    width: "100%",
    height: 240,

    borderWidth: 1,
    borderRadius: 8,
  },
  postTitle: {
    fontFamily: "Medium",
    fontSize: 16,
    lineHeight: 19,
    marginTop: 8,
  },
  post: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginTop: 11,
  },
  postfeedbackCont: {
     display: "flex",
    flexDirection: "row",
    gap: 24,
  },
  postComments: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    },
    postLocationInfo: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    },
  location: {
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
  },
});

export default ProfileList