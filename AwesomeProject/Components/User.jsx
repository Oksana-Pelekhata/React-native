import React from 'react'
import avatar from '../Images/user.png'
import { View, Image, StyleSheet, Text } from 'react-native'

const User = () => {
  return (
      <View style={styles.container}>
          <View style={styles.userPhoto}></View>
          <View style={styles.userInfo}>
              <View>
                  <Text style={styles.name}>Ім'я</Text>
              </View>
              <View>
                  <Text style={styles.email}>Електронна пошта</Text>
              </View>
          </View>
    </View>
  )
}

styles = StyleSheet.create({
    container: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 32,
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
})

export default User