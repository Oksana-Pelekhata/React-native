import React from 'react'
import { StyleSheet, Button, Image, SafeAreaView, ScrollView, TextInput, Text,  View } from 'react-native';
import BackgroundImage from '../Images/BG.jpg'

const RegistrationScreen = () => {
return (
    <SafeAreaView style={styles.container}>
        <Image source={BackgroundImage} style={styles.background} />
        <ScrollView>
            <Text>Реєстрація</Text>
            <TextInput>Логін</TextInput>
            <TextInput>Адреса електронної пошти</TextInput>
            <TextInput>Пароль</TextInput>
            <Button title='Зареєстуватися' />
            <View>
                <Text>Вже є акаунт? Увійти </Text>
            </View>
        </ScrollView>
    </SafeAreaView>
)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    background: {
         width: "100%",
        position: "absolute",
    },
    forn: {
        backgroundColor: "#fff",
        
    }
})
export default RegistrationScreen