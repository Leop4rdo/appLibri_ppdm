import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import COLORS from '../const/colors';

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

  const onSubmit = () => {
    if (!validate('title')) return alert('Titulo invalido!');
    if (!validate('description')) return alert('Descrição invalida!');
    if (!validate('cover')) return alert('Capa invalida!');

    alert('Livro cadastrado com sucesso!!!');

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
      <ScrollView style={styles.scroll}>

        <Text style={styles.textTitle}>CADASTRO DE LIVROS</Text>

        <View style={styles.viewForm}>

          <Input icon="book-outline" label="TITULO" placeholder="ex: O morro dos ventos uivantes" onChangeText={(value) => handleChange(value, "title")} validate={() => validate("title")} value={inputValues.title}/>
          <Input icon="card-text-outline" label="DESCRIÇÃO" placeholder="ex: Um romance muito pica" onChangeText={(value) => handleChange(value, "description")} validate={() => validate("description")} value={inputValues.description}/>
          <Input icon="image-outline" label="CAPA" onChangeText={(value) => handleChange(value, "cover")} validate={() => validate("cover")} value={inputValues.cover}/>
          <Button title="CADASTRAR" onPress={onSubmit}/>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  scroll: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  textTitle: {
    color: COLORS.black,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  viewForm: {
    marginVertical: 20,
  },
});

export default Register