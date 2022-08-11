import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import COLORS from "../const/colors";

const Input = ({ label, placeholder }) => {

    return (

        <View style={styles.container} >

            <Text style={styles.label} >{label}</Text>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder={placeholder}/>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        marginBottom: 20,

    },

    label: {
        marginVertical: 5,
        fontSize: 15,
        color: COLORS.gray,
    },

    inputContainer: {
        height: 55,
        backgroundColor: COLORS.light,
        flexDirection: "row",
        paddingHorizontal: 15,
        borderWidth: 0.5,
        alignItems: "center",

    },

    textInput: {
        color: COLORS.blue,
        flex: 1,
    }

});

export default Input;