import React from "react"
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { screenWidth } from "../utils/styles"

const BookCard = ({data}) => {
    return (
        <Pressable>
            <View style={styles.card}>
                { data.cover && <Image style={styles.cover} source={{ uri : data.cover}}/>}
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.desc}>{data.description}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card : {
        width : screenWidth * .9,
        alignItems : 'center',
        backgroundColor : '#FFF',
        padding : 12,
        marginVertical : 12,
        borderRadius : 12,
        elevation : 8
    },

    cover : {
        borderRadius : 8,
        width: '50%',
        aspectRatio : 1,
        margin : 12 ,
        resizeMode : "contain"
    },

    title : {
        textAlign : 'center',
        fontSize : 20,
        margin : 8
    },

    desc : {},
})

export default BookCard