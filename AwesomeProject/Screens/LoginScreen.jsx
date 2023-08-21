import React, { useState } from 'react'
import Toast from 'react-native-toast-message';
import { StyleSheet, TouchableOpacity, Image, SafeAreaView, TextInput, Text,  View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native'
import BackgroundImage from '../Images/BG.jpg'
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/authOperations';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailInputActive, setEmailInputActive] = useState(false);
  const [passwordInputActive, setPasswordInputActive] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const onLogin = () => {
    if (email === '' || password === '') {
      Toast.show({
        type: 'error',
        text: 'Усі поля повинні бути заповнені'
      })
      return
    }
     dispatch(logIn({ email, password }))
    setEmail('');
    setPassword('');
    navigation.navigate('Home');
  }

  const handleEmailFocus = () => {
    setEmailInputActive(true);
  };

    const handlePasswordFocus = () => {
    setPasswordInputActive(true);
  };
            
  const handleEmailBlur = () => {
    setEmailInputActive(false);
  };

  const handlePasswordBlur = () => {
    setPasswordInputActive(false);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
      <SafeAreaView style={styles.container}>
       
      <Image source={BackgroundImage} style={styles.background} />
    <KeyboardAvoidingView style={styles.container}  behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={-100}>
        <View style={styles.formContainer}>
        <Text style={styles.pageTitle}>Увійти</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              placeholder="Адреса електронної пошти"
              value={email}
              onChangeText={setEmail}
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              style={emailInputActive ? styles.activeInput : styles.input}
            />
            <TextInput 
              placeholder="Пароль"
              value={password}
              onChangeText={setPassword}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              style={passwordInputActive ? styles.activeInput : styles.input}
            />
         </View>
        <TouchableOpacity style={styles.button} onPress={onLogin}>
            <Text style={styles.buttonText}>Увійти</Text>
        </TouchableOpacity>
        <TouchableOpacity>
                <Text style={styles.loginText}>Немає акаунту?
                    <Text> </Text>
                <Text style={styles.loginLink}
                  onPress={()=> navigation.navigate('Registration')}>Зареєструватися</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
      activeInput: {
        width: "100%",
        fontSize: 16,
        padding: 16,
        borderWidth: 1,
        borderRadius: 8,

        backgroundColor: "#F6F6F6",
        borderColor: "#FF6C00",
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