import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BookDetails from "./src/pages/BookDetails";
import Home from "./src/pages/Home";
import Register from "./src/pages/Register";

const App = () => {
  const Stack = createNativeStackNavigator()

  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="home" screenOptions={{headerShown : false, animation : 'slide_from_left'}}>
    //     <Stack.Screen name="home" component={Home}/>
    //     <Stack.Screen name="add-book" component={Register}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
  
    // <Home />
    <BookDetails />
  );
}

export default App