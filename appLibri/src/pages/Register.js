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
    if (!validate('title')) alert('Titulo invalido!');
    if (!validate('description')) alert('Descrição invalida!');
    if (!validate('cover')) alert('Capa invalida!');

    alert('Livro cadastrado com sucesso!!!');
  }


  return (
    <SafeAreaView style={styles.safe} >
      <ScrollView style={styles.scroll}>

        <Text style={styles.textTitle}>CADASTRO DE LIVROS</Text>

        <View style={styles.viewForm}>

          <Input label="TITULO" placeholder="ex: O morro dos ventos uivantes" onChangeText={(value) => handleChange(value, "title")} validate={() => validate("title")}/>
          <Input label="DESCRIÇÃO" placeholder="ex: Um romance muito pica" onChangeText={(value) => handleChange(value, "description")} validate={() => validate("description")}/>
          <Input label="CAPA" onChangeText={(value) => handleChange(value, "cover")} validate={() => validate("cover")}/>
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
  },

  viewForm: {
    marginVertical: 20,
  },
});

export default Register