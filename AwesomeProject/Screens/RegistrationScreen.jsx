import React from 'react'
import { StyleSheet, TouchableOpacity, Image, SafeAreaView, TextInput, Text,  View } from 'react-native';
import BackgroundImage from '../Images/BG.jpg'
import ProfilePhoto from '../Components/ProfilePhoto';

const RegistrationScreen = () => {
return (
    <SafeAreaView style={styles.container}>
        <Image source={BackgroundImage} style={styles.background} />
        <ProfilePhoto />
        <View style={styles.formContainer}>
            <Text style={styles.pageTitle}>Реєстрація</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                    placeholder='Логін'
                />
                <TextInput style={styles.input}
                    placeholder="Адреса електронної пошти"
                />
                <TextInput style={styles.input}
                    placeholder="Пароль"
                />
            </View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Зареєстуватися</Text>
        </TouchableOpacity>
        <TouchableOpacity>
                <Text style={styles.loginText}>Вже є акаунт?
                    <Text> </Text>
                <Text style={styles.loginLink}>Увійти</Text>
            </Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
)
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: "center",
    },
    background: {
        width: "100%",
        position: "absolute",
    },
    formContainer: {
        backgroundColor: "#fff",
        borderTopLeftRadius: "25",
        borderTopRightRadius: "25",
        marginTop: "auto",
        paddingHorizontal: 16,
        paddingTop: 92,
        paddingBottom: 78,
    },
    pageTitle: {
        fontFamily: "Medium",
        fontSize: 30,
        marginLeft: "auto",
        marginRight: "auto",
        color: "#20232a",
    },
    inputContainer: {
        paddingBottom: 43,
        paddingTop: 32,
        display: "flex",
        gap: 16,
    },
    input: {
        width: "100%",
        fontSize: 16,
        padding: 16,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: "#F6F6F6",
        borderColor: "#E8E8E8",
    },
    button: {
        marginBottom: 16,
        paddingVertical: 16,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
    },
    buttonText: {
        fontSize: 16,
        textAlign: "center",
        color: "#fff"
    },
    loginText: {
        textAlign: "center",
        color: "#1B4371",
    },
    loginLink: {
        textAlign: "center",
        textDecorationLine: "underline",
        color: "#1B4371",
    },
})
export default RegistrationScreen