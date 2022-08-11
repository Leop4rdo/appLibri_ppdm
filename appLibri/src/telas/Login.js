import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Login = () => {

  
    return (
      <View>
        <Text style = {styles.title}>Login</Text>
      </View>    
    );
}

const styles = StyleSheet.create({

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


export default Login;

