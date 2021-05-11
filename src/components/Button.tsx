import React from "react";
import { 
    TouchableOpacity, 
    Text,
    StyleSheet,
    TouchableOpacityProps
} from "react-native";



import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface ButtonProps extends TouchableOpacityProps { 
    title: string;                                                                                       
};      

export function Button({title, ...rest}:ButtonProps) {


    return (
        <TouchableOpacity 
            style={styles.container}
            {...rest}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.dark,
        height: 56,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        fontSize: 15,
        color: colors.white,
        fontFamily: fonts.heading
    }
})