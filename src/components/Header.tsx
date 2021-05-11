import React from "react";
import {
    View,
    StyleSheet,
    Image,
    Text
} from "react-native";

import profile from "../assets/profile.png"
import colors from "../styles/colors";

export function Header() {

    return (
        <View style={styles.container}>
                <Image 
                    source={profile} 
                    style={styles.imgProfile}
                    resizeMode="contain"
                />

                <View style={styles.dataUser}>
                    <Text style={styles.name}>
                        Júlio Nepomuceno
                    </Text>

                    <Text style={styles.clientCode}>
                        Código do cliente: 124535
                    </Text>
                </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.dark,
        flexDirection: "row"
    },

    imgProfile: {
        height: 60,
        width: 60,
        borderRadius: 30,
    },

    dataUser: {

    }
})