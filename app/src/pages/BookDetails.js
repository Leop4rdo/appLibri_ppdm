import React, { useEffect, useState } from 'react'
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import COLORS from '../const/colors'
import bookService from '../services/book'
import Icon from "react-native-vector-icons/MaterialCommunityIcons" 


const BookDetails = () => {
    const bookId = 1

    const [book, setBook] = useState({})

    const getBook = async () => {
        const res = await bookService.getById(bookId)

        setBook(res.data)
    }

    useEffect(() => { getBook() }, [])

    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.header}>
                <View style={{flexDirection : 'row', alignItems : 'center'}}>
                    <Pressable>
                        <Icon style={{marginRight : 8}} color={COLORS.blue} size={24} name="arrow-left"/>
                    </Pressable>
                    <Text style={styles.title}>Novo livro</Text>
                </View>
            </View>

            <ScrollView styles={{flex : 1}} contentContainerStyle={styles.card}>
                <Text style={styles.bookTitle}>{book.title || <>Carregando...</>}</Text>
                <Image source={{uri : book.cover}} style={styles.bookCover}/>
                <Text style={styles.bookDescription}>{book.description}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe: {
      flex: 1,
      backgroundColor: "#EFEFEF",
    },
  
    header : {
      width : '100%',
      height : 64,
      paddingHorizontal : 32,
  
      flexDirection : 'row',
      justifyContent : 'space-between',
      alignItems : 'center',
  
      backgroundColor : '#FFF',
  
      elevation : 8
    },
  
    title : {
      color: COLORS.blue,
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  
    card : {
        margin : 24,
        padding : 16,
        borderRadius : 16,
        backgroundColor : '#FFF',
        alignItems : 'center',
    },

    bookTitle : {
        textAlign: 'center',
        fontSize : 24,
        color : COLORS.blue,
        fontWeight : 'bold',
    },

    bookCover : {
        width : '75%',
        aspectRatio : 1,
        resizeMode : 'cover',
        marginVertical : 24
    },

    bookDescription : {
        width : '100%',
        textAlign : 'justify',
    }
  });

export default BookDetails