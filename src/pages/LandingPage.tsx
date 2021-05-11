import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    Image,
    Dimensions
} from "react-native";

import { useNavigation } from "@react-navigation/core";

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import image from "../assets/login.png"

import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 


export function LandingPage() {
    const navigation = useNavigation()


    function handleLogin() {
        navigation.navigate("Login")
        
    }

    function handleRegister() {
        navigation.navigate("Register")
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Que bom ter você aqui conosco!</Text>
     
                <Image 
                    source={image} 
                    style={styles.image}
                    resizeMode="contain"
                />

                <View style={styles.buttons}>
                    <TouchableOpacity 
                        style={styles.button} 
                        activeOpacity={0.7}
                        onPress={handleLogin}

                    >
                        <MaterialCommunityIcons name="key" style={styles.buttonIcon} />
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.button} 
                        activeOpacity={0.7}
                        onPress={handleRegister}
                    >
                    <FontAwesome5 name="portrait" style={styles.buttonIcon} />
                        <Text style={styles.buttonText}>Registrar-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around"
    },

    wrapper: {
        flex: 1,
        alignItems: "center",
        marginTop: 100,
        paddingHorizontal: 20
    },

    title: {
        color: colors.dark,
        fontSize: 20,
        fontFamily: fonts.heading,
        textAlign: "center"
    },

    image: {
        height: Dimensions.get("window").width * 0.53,
        marginTop: 100,
    },

    buttons: {
        flex: 1,
        flexDirection: "row",
        marginTop: 40
    },

    button: {
        backgroundColor: colors.dark,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        width: 110,
        height:86,
        marginHorizontal: 10
    },

    buttonIcon: {
        color: colors.white,
        fontSize: 24
    },

    buttonText: {
        color: colors.white,
        fontSize: 10,
        marginTop: 7
    },






})