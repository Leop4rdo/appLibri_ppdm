import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import COLORS from "../const/colors";

const Input = ({ label }) => {

    return (

        <View style={styles.formContainer} >

            <Text style={styles.inputLabel} >{label}</Text>

            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} />
            </View>

        </View>

    );
}

const styles = StyleSheet.create({

    formContainer: {
        marginBottom: 20,

    },

    inputLabel: {
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
        color: COLORS.darkBlue,
        flex: 1,
    }

});

export default Input;