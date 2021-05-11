import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Keyboard,
    Alert,
    TextInput,
    KeyboardAvoidingView,
    SafeAreaView,
    Platform,
    TouchableWithoutFeedback,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/core";

import { Button } from "../components/Button";

import colors from "../styles/colors";
import fonts from "../styles/fonts";


interface ICredentialsUser {
    name: string;
    email: string;
    cpf: string;
    password: string;
}

export function ConfirmPassword() {
    const [confirmPassword, setConfirmPassword] = useState<string>()
    const [inputConfirmPasswordOne, setinputConfirmPasswordOne] = useState<string>()
    const [inputConfirmPasswordTwo, setInputConfirmPasswordTwo] = useState<string>()
    const [inputConfirmPasswordThree, setInputConfirmPasswordThree] = useState<string>()
    const [inputConfirmPasswordFor, setInputConfirmPasswordFor] = useState<string>()
    const [inputConfirmPasswordFive, setInputConfirmPasswordFive] = useState<string>()
    const [inputConfirmPasswordSix, setInputConfirmPasswordSix] = useState<string>()


    const route = useRoute();
    const { name, email, cpf, password } = route.params as ICredentialsUser

    const navigation = useNavigation()

    function handleNext(CredentialsUser: ICredentialsUser) {
        if (!inputConfirmPasswordOne || !inputConfirmPasswordTwo || !inputConfirmPasswordThree || !inputConfirmPasswordFor || !inputConfirmPasswordFive || !inputConfirmPasswordSix) {
            return Alert.alert("Senha incompleta!")
        }

        if (confirmPassword !== password) {
            return Alert.alert("As senhas não estão iguais!")
        }
        navigation.navigate("ConfirmPassword", {CredentialsUser})
    }

    useEffect(() => {
        setConfirmPassword(`${inputConfirmPasswordOne}${inputConfirmPasswordTwo}${inputConfirmPasswordThree}${inputConfirmPasswordFor}${inputConfirmPasswordFive}${inputConfirmPasswordSix}`)
    },[inputConfirmPasswordOne, inputConfirmPasswordTwo, inputConfirmPasswordThree, inputConfirmPasswordFor, inputConfirmPasswordFive])
  

    

    return (
        <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView 
                    style={styles.container}
                    behavior={Platform.OS === "ios"? "padding" : "height"}
                >  
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.content}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>Confirme sua senha</Text>
                                <Text style={styles.subtitle}>
                                    Confirme a sua senha, esperamos que você tenha colocado uma 
                                    senha segura 
                                   
                                </Text>

                               

                            </View>

                            <View style={styles.fieldsPassword}>
                                    <TextInput 
                                        style={styles.input}
                                        maxLength={1}
                                        onChangeText={setinputConfirmPasswordOne}
                                    />

                                     <TextInput 
                                        style={styles.input} 
                                        maxLength={1}
                                        onChangeText={setInputConfirmPasswordTwo}
                                    />

                                    <TextInput 
                                        style={styles.input} 
                                        maxLength={1}
                                        onChangeText={setInputConfirmPasswordThree}
                                    />

                                    <TextInput 
                                        style={styles.input} 
                                        maxLength={1}
                                        onChangeText={setInputConfirmPasswordFor}
                                    />

                                     <TextInput 
                                        style={styles.input} 
                                        maxLength={1}
                                        onChangeText={setInputConfirmPasswordFive}
                                    />

                                    <TextInput 
                                        style={styles.input} 
                                        maxLength={1}
                                        onChangeText={setInputConfirmPasswordSix}
                                    />
                                </View>

                            <View style={styles.buttonContainer}>
                                    <Button 
                                        title="Criar conta"
                                        onPress={() => handleNext({name, email, cpf, password})}
                                    />
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

    fieldsPassword: {
        marginTop: 80,
        flexDirection: "row",
        justifyContent: "center"
    },

    confirmPassword: {
        borderBottomWidth: 2,
        borderColor: colors.dark_light,
        fontFamily: fonts.text,
        color: colors.dark_light,
        width: "100%",
        fontSize: 13,
        paddingLeft: 5
    },

    fieldInput: {
        width: "100%"
    },

    input: {
        borderWidth: 2,
        borderColor: colors.dark_light,
        fontFamily: fonts.text,
        color: colors.dark_light,
        height: 40,
        width: 40,
        fontSize: 13,
        paddingLeft: 5,
        borderRadius: 10,
        textAlign: "center",
        marginHorizontal: 5
        
    },

    buttonContainer: {
        margin: 40,

    }
})