import React, { useState } from 'react'
import Toast from 'react-native-toast-message';
import { StyleSheet, TouchableOpacity, Image, SafeAreaView, TextInput, Text,  View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native'
import BackgroundImage from '../Images/BG.jpg'

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    if (email === '' || password === '') {
      Toast.show({
        type: 'error',
        text: 'Усі поля повинні бути заповнені'
      })
      return
    }
    console.log('email', email);
    console.log('password', password);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
      <SafeAreaView style={styles.container}>
       
      <Image source={BackgroundImage} style={styles.background} />
   
        <View style={styles.formContainer}>
           <KeyboardAvoidingView  behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <Text style={styles.pageTitle}>Увійти</Text>
        
          <View style={styles.inputContainer}>
            
            
           <TextInput style={styles.input}
                placeholder="Адреса електронної пошти"
                value={email}
                onChangeText={setEmail}
                />
                <TextInput style={styles.input}
                placeholder="Пароль"
                value={password}
                onChangeText={setPassword}
              />
             
         </View>
      
        <TouchableOpacity style={styles.button} onPress={onLogin}>
            <Text style={styles.buttonText}>Увійти</Text>
        </TouchableOpacity>
        <TouchableOpacity>
                <Text style={styles.loginText}>Немає акаунту?
                    <Text> </Text>
                <Text style={styles.loginLink}>Зареєструватися</Text>
            </Text>
          </TouchableOpacity>
          </KeyboardAvoidingView> 
            </View>
         
      
      </SafeAreaView>
       
        </TouchableWithoutFeedback>
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
        paddingTop: 32,
        paddingBottom: 144,
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

export default LoginScreen