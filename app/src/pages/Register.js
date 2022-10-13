import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Pressable } from 'react-native';
import bookService from '../services/book';

import COLORS from '../const/colors';
import Icon from "react-native-vector-icons/MaterialCommunityIcons" 


import Input from '../components/input';
import Button from '../components/button';

const Register = () => {

  const [inputValues, setInputValues] = useState({
    title : "",
    description : "",
    cover : ""
  })

  const handleChange = (value, key) => setInputValues({
      ...inputValues,
      [key]: value
  })

  const validate = (key) => (inputValues[key]) ? true : false

  const onSubmit = async () => {
    if (!validate('title')) return alert('Titulo invalido!');
    if (!validate('description')) return alert('Descrição invalida!');
    if (!validate('cover')) return alert('Capa invalida!');

    const res = await bookService.create(inputValues)

    if (res.hasError) 
      alert('Erro ao cadastrar livro!')
    else
      resetState();
  }

  const resetState = () => {
    setInputValues({
      title : "",
      description : "",
      cover : ""
    })
  }


  return (
    <SafeAreaView style={styles.safe} >
      <View style={styles.header}>
        <View style={{flexDirection : 'row', alignItems : 'center'}}>
          <Pressable>
            <Icon style={{marginRight : 8}} color={COLORS.blue} size={24} name="arrow-left"/>
          </Pressable>
          <Text style={styles.title}>Novo livro</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.viewForm}>
          <View style={{marginBottom : 48}}>
            <Input icon="book-outline" label="TITULO" placeholder="ex: O morro dos ventos uivantes" onChangeText={(value) => handleChange(value, "title")} validate={() => validate("title")} value={inputValues.title}/>
            <Input icon="card-text-outline" label="DESCRIÇÃO" placeholder="ex: Um romance muito pica" onChangeText={(value) => handleChange(value, "description")} validate={() => validate("description")} value={inputValues.description}/>
            <Input icon="image-outline" label="CAPA" onChangeText={(value) => handleChange(value, "cover")} validate={() => validate("cover")} value={inputValues.cover}/>
          </View>
          

          <Button title="CADASTRAR" onPress={onSubmit}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },

  scroll: {
    height : '100%',
    width : '100%',
    padding : 24,

    alignItems : 'center',
    justifyContent : 'center',
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

  viewForm: {
    marginHorizontal: 12,
    marginVertical : 48,
    padding : 12,

    borderRadius : 12,

    backgroundColor : '#FFF',

    elevation : 8,

    justifyContent : 'space-between',
    alignItems : 'center',
  },
});

export default Register