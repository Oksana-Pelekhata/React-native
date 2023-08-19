import React, { useState } from 'react'
import Toast from 'react-native-toast-message';
import { StyleSheet, TouchableOpacity, Image, SafeAreaView, TextInput, Text,  View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import BackgroundImage from '../Images/BG.jpg'
import ProfilePhoto from '../Components/ProfilePhoto';
import { useNavigation } from '@react-navigation/native';
import { register } from '../redux/auth/authOperations';

const RegistrationScreen = () => {

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInputActive, setLoginInputActive] = useState(false);
    const [emailInputActive, setEmailInputActive] = useState(false);
    const [passwordInputActive, setPasswordInputActive] = useState(false);

    const navigation = useNavigation();
    const dispatch = useDispatch()

    const onRegister = () => {
        if (email === '' || password === '' || login === '') {
        Toast.show({
        type: 'error',
        text: "Усі поля повинні бути заповнені"
        })
    return
        }
        dispatch(register({ userName:login, password, email }))
        setLogin('');
        setEmail('');
        setPassword('');

        navigation.navigate("Login")
    }
            
    const handleLoginFocus = () => {
        setLoginInputActive(true);
    }

    const handleEmailFocus = () => {
    setEmailInputActive(true);
  };

    const handlePasswordFocus = () => {
    setPasswordInputActive(true);
  };
       
    const handleLoginBlur = () => {
    setLoginInputActive(false);
  };
            
  const handleEmailBlur = () => {
    setEmailInputActive(false);
  };

  const handlePasswordBlur = () => {
    setPasswordInputActive(false);
  };

    return (
<TouchableWithoutFeedback onPress={Keyboard.dismiss} >
    <SafeAreaView style={styles.container}>
        <Image source={BackgroundImage} style={styles.background} />
        <KeyboardAvoidingView style={styles.container}  behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={-180}>
                    <View style={styles.formContainer}>
                        <ProfilePhoto />
                <Text style={styles.pageTitle}>Реєстрація</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                        placeholder='Логін'
                        value={login}
                        onFocus={handleLoginFocus}
                        onBlur={handleLoginBlur}
                        onChangeText={setLogin}
                        style={loginInputActive ? styles.activeInput : styles.input}
                    />
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
                <TouchableOpacity style={styles.button} onPress={onRegister}>
                    <Text style={styles.buttonText}>Зареєстуватися</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.loginText}>Вже є акаунт?
                        <Text> </Text>
                        <Text style={styles.loginLink}
                            onPress={()=>navigation.navigate('Login')}>Увійти</Text>
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
export default RegistrationScreen