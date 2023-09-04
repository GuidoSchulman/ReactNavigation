import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./components/screens/Screens/LoginScreen";
import Screen1 from"./components/screens/Screens/Screen1";
import Screen2 from"./components/screens/Screens/Screen2";
import Screen3 from"./components/screens/Screens/Screen3";
import Menu from "./components/screens/Screens/Menu"
const Stack = createNativeStackNavigator();

 const App =() =>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{ title: "AZUL" }}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{ title: "VERDE" }}
        />
        <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={{ title: "ROJO" }}
        />
        
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
}
export default App
