import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    SafeAreaView,
} from "react-native";

import { useNavigation } from "@react-navigation/core";

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Header } from "../components/Header";


export function Page() {
    return (
        <View>
            <Header />
        </View>
    );
};

const styles = StyleSheet.create({

});