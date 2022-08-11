import React from "react";
import { Text, View, StyleSheet } from "react-native";

// import Login from "./src/telas/Login";
import Register from "./src/pages/Register";

const App = () => {

  const nome = 'SENAI - JANDIRA';

  return (
    <Register />
  );
}

const estilo = StyleSheet.create({

  container: {},

  title: {
    width: "100%",
    backgroundColor: "#f00",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "#fff",
    fontWeight: "bold",
    padding: 16,
  },
});

export default App;