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
    ScrollView
} from "react-native";
import { TextInputMask } from "react-native-masked-text";

import { useNavigation} from "@react-navigation/core";

import { Button } from "../components/Button";

import { isCpf } from "../libs/validateCpf"
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface ICredentialsUser {
    name: string;
    email: string;
    cpf: string;
}


export function Register() {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [cpf, setCpf] = useState<string>("")

 
    const navigation = useNavigation()

    function handleNextPage(CredentialsUser: ICredentialsUser) {
        let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        let regCpf = /^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/;

        if (!name) return Alert.alert("Insira um nome!")

        if (regEmail.test(email) === false) return Alert.alert("Insira um email válido!")

        if (regCpf.test(cpf) === false || isCpf(cpf) == false) return Alert.alert("Insira um cpf válido!")

        navigation.navigate("CreatePassword", { CredentialsUser })
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
                                <Text style={styles.title}>Para começarmos</Text>
                                <Text style={styles.subtitle}>Precisamos de algumas informações suas para continuarmos</Text>
                            </View>
                        
                            <View style={styles.form}>
                                <View style={styles.fieldInput}>
                                    <Text style={styles.label}>Nome completo</Text>
                                    <TextInput 
                                        style={styles.input} 
                                        onChangeText={text => setName(text)}
                                        />
                                </View>

                                <View style={[styles.fieldInput, {marginTop: 30}]}>
                                    <Text style={styles.label}>Email</Text>
                                    
                                    <TextInput 
                                        style={styles.input}
                                        onChangeText={ text => setEmail(text)}
                                    />
                                </View>

                                <View style={[styles.fieldInput, {marginTop: 30}]}>
                                    <Text style={styles.label}>Cpf</Text>
                                    <TextInputMask 
                                        style={styles.input}
                                        type={"cpf"}
                                        value={cpf}
                                        onChangeText={ text => setCpf(text)}
                                    />
                                </View>

                                <View style={styles.buttonContainer}>
                                    <Button 
                                        title="Começar"
                                        onPress={() => handleNextPage({name,email,cpf})}
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