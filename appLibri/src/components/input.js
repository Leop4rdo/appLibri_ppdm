import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import COLORS from "../const/colors";

export const inputStatus = {
    NEUTRAL : 0,
    HOVER : 1,
    INVALID : 2
}

class InputStyleBuilder {
    default = {}
    hover = {}
    invalid = {}
    status

    constructor(_default, _hover, _invalid) {
        this.default = _default;
        this.hover = _hover;
        this.invalid = _invalid;
    }

    setDefault = (style) => {
        this.default = style;
        return this;
    }

    setHover = (style) => {
        this.hover = style;
        return this;
    }

    setInvalid = (style) => {
        this.invalid = style;
        return this;
    }

    setStatus = (status) => {
        this.status = status;
        return this;
    }

    build = () => {
        return [
            this.default, 
            (this.status === inputStatus.HOVER) ? 
                this.hover
            : (this.status === inputStatus.INVALID) ?
                this.invalid
            : {}
        ]
    }
}

const Input = ({ label, placeholder, onChangeText, validate }) => {
    const [status, setStatus] = useState(inputStatus.NEUTRAL);

    const validateField= () => {
        if (!validate()) 
            setStatus(inputStatus.INVALID)
        else 
            setStatus(inputStatus.NEUTRAL)
    }

    const labelStyleBuilder = new InputStyleBuilder()
        .setDefault(styles.label)
        .setHover(styles.focusLabel)
        .setInvalid(styles.invalidLabel);
    
    const containerStyleBuilder = new InputStyleBuilder()
        .setDefault(styles.inputContainer)
        .setHover(styles.focusInputContainer)
        .setInvalid(styles.invalidInputContainer)

    return (
        <View style={styles.container} >
            <Text 
                style={labelStyleBuilder.setStatus(status).build()}>
                {label}
            </Text>

            <View style={containerStyleBuilder.setStatus(status).build()}>
                <TextInput 
                    style={styles.input} 
                    placeholder={placeholder} 
                    onChangeText={onChangeText}
                    onFocus={() => (status !== inputStatus.INVALID) ? setStatus(inputStatus.HOVER) : null}
                    onBlur={() => {validateField()}}
                />
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

    focusLabel : {
        color: COLORS.blue
    },

    invalidLabel : {
        color: COLORS.red,
    },

    inputContainer: {
        height: 60,
        backgroundColor: COLORS.light,
        flexDirection: "row",
        paddingHorizontal: 15,
        borderWidth: 0.5,
        alignItems: "center",

    },

    focusInputContainer : {
        borderColor: COLORS.blue,
        borderWidth: 1,
    },

    invalidInputContainer : {
        borderColor: COLORS.red,
        borderWidth: 1,
    },

    textInput: {
        color: COLORS.blue,
        flex: 1,
    }

});

export default Input;