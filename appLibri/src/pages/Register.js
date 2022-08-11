import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import COLORS from '../const/colors';

import Input from '../components/input';
import Button from '../components/button';

const Register = () => {


  return (
    <SafeAreaView style={styles.safe} >
      <ScrollView style={styles.scroll}>

        <Text style={styles.textTitle}>CADASTRO DE LIVROS</Text>

        <View style={styles.viewForm}>

          <Input label="TITULO" placeholder="ex: O morro dos ventos uivantes"/>
          <Input label="DESCRIÇÃO" placeholder="ex: Um romance muito pica"/>
          <Input label="CAPA"/>
          <Button title="CADASTRAR"/>

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