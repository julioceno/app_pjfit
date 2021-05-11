import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Keyboard,
    Alert,
    TextInput,
    KeyboardAvoidingView,
    SafeAreaView,
    Platform,
    TouchableWithoutFeedback,
} from "react-native";

import { useNavigation } from "@react-navigation/core";

import { Button } from "../components/Button";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Login() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")




    const navigation = useNavigation()

    function handleLogin() {
        let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        let regPassword = /[1-9]{6}$/;


        if (regEmail.test(email) === false) {
            return Alert.alert("Insira um email válido!")
          }

          console.log(!(password.length === 6))
          if (!(password.length === 6)) {
            return Alert.alert("Insira uma senha válida!")
          }


          navigation.navigate("Page")

    }

    return (
        <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView 
                style={styles.container}
                behavior={Platform.OS === "ios"? "padding" : "height"} // O comportamento (behavior) será que se o device for IOS
                >  
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>Bem vindo de volta!</Text>
                                <Text style={styles.subtitle}>Precisamos de algumas informações suas para continuarmos</Text>
                            </View>
                        
                            <View style={styles.form}>
                                <View style={styles.fieldInput}>
                                    <Text style={styles.label}>Email</Text>
                                    <TextInput 
                                        style={styles.input} 
                                        onChangeText={ text => setEmail(text)}
                                    />
                                </View>

                                <View style={[styles.fieldInput, {marginTop: 30}]}>
                                    <Text style={styles.label}>Senha</Text>
                                    
                                    <TextInput 
                                        style={styles.input}
                                        maxLength={6}
                                        onChangeText={ text => setPassword(text)}
                                    />
                                </View>

                            

                                <View style={styles.buttonContainer}>
                                    <Button 
                                        title="Entrar"
                                        onPress={handleLogin}
                                        
                                    />
                                </View>
                            </View>
                        
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView> 
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.shape
    },

    content: {
        flex: 1,
    },

    titleContainer: {
        marginTop: 140,
        paddingHorizontal: 20
    },

    title: {
        color: colors.dark,
        fontSize: 20,
        fontFamily: fonts.heading,
    },

    subtitle: {
        color: colors.grey,
        fontFamily: fonts.text,
        fontSize: 13,
        marginTop: 10, 
    },

    form: {
        marginTop: 80,
        alignItems: "center",
        flex: 1,
        paddingHorizontal: 50,
        width: 410
    },

    label: {
        color: colors.dark_light,
        fontFamily: fonts.text,
        marginBottom: 5,
        fontSize: 14.5,
    },

    fieldInput: {
        width: "100%"
    },

    input: {
        borderBottomWidth: 2,
        borderColor: colors.dark_light,
        fontFamily: fonts.text,
        color: colors.dark_light,
        width: "100%",
        fontSize: 13,
        paddingLeft: 5
    },

    buttonContainer: {
        margin: 40,
        width: "100%",
    }

})