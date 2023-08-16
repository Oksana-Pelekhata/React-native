import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const PostsList = ({ array }) => {

  return (
    array.length > 0 && (
      <ScrollView>
        {array.map((data) => {
          return (
            <View style={styles.postContainer} key={data.id}>
              <Image style={styles.photo} source={{ uri: data.photo }} />
              <Text style={styles.postName}>{data.name}</Text>
              <View style={styles.post}>
                <TouchableOpacity
                  style={styles.postText}
                >
                  <Ionicons
                    name="chatbubbles-outline"
                    size={24}
                    color="#BDBDBD"
                  />
                  <Text>{data.comments.length}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.postInfo}>
                  <Ionicons name="location-outline" size={24} color="#BDBDBD" />
                  <Text style={styles.location}>{data.location}</Text>
                </TouchableOpacity>
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
  postName: {
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
  postText: {
    display: "flex",
    flexDirection: "row",
    gap: 9,
    alignItems: "center",
  },
  location: {
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
  },
});

export default PostsList