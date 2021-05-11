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
    password: string | undefined;
}

export function CreatePassword() {
    const [password, setPassword] = useState<string>()
    const [inputPasswordOne, setInputPasswordOne] = useState<string>()
    const [inputPasswordTwo, setInputPasswordTwo] = useState<string>()
    const [inputPasswordThree, setInputPasswordThree] = useState<string>()
    const [inputPasswordFor, setInputPasswordFor] = useState<string>()
    const [inputPasswordFive, setInputPasswordFive] = useState<string>()
    const [inputPasswordSix, setInputPasswordSix] = useState<string>()


    const route = useRoute();
    const { name, email, cpf } = route.params as ICredentialsUser

    const navigation = useNavigation()

    
    function handleNext(CredentialsUser: ICredentialsUser) {
        if (!inputPasswordOne || !inputPasswordTwo || !inputPasswordThree || !inputPasswordFor || !inputPasswordFive || !inputPasswordSix) {
            return Alert.alert("Senha incompleta!")
        }

        navigation.navigate("ConfirmPassword", {CredentialsUser})
    }

    useEffect(() => {
        setPassword(`${inputPasswordOne}${inputPasswordTwo}${inputPasswordThree}${inputPasswordFor}${inputPasswordFive}${inputPasswordSix}`)
    },[inputPasswordOne, inputPasswordTwo, inputPasswordThree, inputPasswordFor, inputPasswordFive])
  

    return (
        <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView 
                style={styles.container}
                behavior={Platform.OS === "ios"? "padding" : "height"} // O comportamento (behavior) será que se o device for IOS
                >  
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.content}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>Crie uma senha pra sua conta</Text>
                                <Text style={styles.subtitle}>
                                    Não coloque uma senha fácil, com números em sequência ou a 
                                    data do seu aniversário
                                   
                                    <Text style={styles.textBold}> ela tem que ter 6 dígitos!</Text>
                                </Text>

                               

                            </View>

                            <View style={styles.fieldsPassword}>
                                    <TextInput 
                                        style={styles.input}
                                        maxLength={1}
                                        onChangeText={letter => setInputPasswordOne(letter)}
                                    />

                                     <TextInput 
                                        style={styles.input} 
                                        maxLength={1}
                                        onChangeText={letter => setInputPasswordTwo(letter)}
                                    />

                                    <TextInput 
                                        style={styles.input} 
                                        maxLength={1}
                                        onChangeText={letter => setInputPasswordThree(letter)}
                                    />

                                    <TextInput 
                                        style={styles.input} 
                                        maxLength={1}
                                        onChangeText={letter => setInputPasswordFor(letter)}
                                    />

                                     <TextInput 
                                        style={styles.input} 
                                        maxLength={1}
                                        onChangeText={letter => setInputPasswordFive(letter)}
                                    />

                                    <TextInput 
                                        style={styles.input} 
                                        maxLength={1}
                                        onChangeText={letter => setInputPasswordSix(letter)}
                                    />
                                </View>

                            <View style={styles.buttonContainer}>
                                    <Button 
                                        title="Continuar"
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

    textBold: {
        fontFamily: fonts.heading,
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