import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, FlatList, Pressable } from "react-native";
import BookCard from "../components/BookCard";
import COLORS from "../const/colors";
import bookService from "../services/book";

import Icon from "react-native-vector-icons/MaterialCommunityIcons" 
import { screenHeight } from "../utils/styles";

const Home = () => {
  const [ books, setBooks ] = useState([])

  const getBooks = async () => {
    const { data } = await bookService.getAll()

    setBooks(data);
  }

  useEffect(() => {
    getBooks()
  }, []) 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Listagem de livros</Text>

        <Pressable>
          <Icon size={24} color={COLORS.blue} name='book-plus' />
        </Pressable>
      </View>

      <FlatList
        style={styles.cardContainer}
        contentContainerStyle={{ width : '100%', alignItems : 'center' }}
        data={books}
        keyExtractor={(item, index) => `book#${item.id}-idx${index}`}
        renderItem={({item}) => 
          <BookCard key={item.id} data={item} />  
        }
      />
    </View>  
  );
} 

const styles = StyleSheet.create({
  container : {
    alignItems : 'center',
    width : '100%',
    backgroundColor : "#EFEFEF",
    maxHeight : '100%',
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

  cardContainer : {
    width : '100%',
    paddingHorizontal : 16,
    paddingBottom : 48
  }
})

export default Home;