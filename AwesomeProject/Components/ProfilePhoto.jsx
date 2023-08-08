import React from 'react'
import { StyleSheet, View } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"

const ProfilePhoto = () => {
    return (
    <View style={styles.profilePhotoCont}>
        <View style={styles.profilePhoto}>
             <Ionicons
                name="add-circle-outline"
                size={25}
                color="#FF6C00"
                style={styles.addProfilePhoto}
                  />
        </View>
            </View>
    )
}

const styles = StyleSheet.create({
        profilePhotoCont: {
        position: "absolute",
        top: "30%",
        left: "35%",
        width: 132,
        height: 120,
        zIndex: 999,
    },
    profilePhoto: {
        width: 120,
        height: 120,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
    },
    addProfilePhoto: {
        position: "absolute",
        bottom: 10,
        right: -20,
 },
})
export default ProfilePhoto