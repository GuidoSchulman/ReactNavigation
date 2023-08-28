import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./components/screens/LoginScreen";
import Screen1 from"./components/screens/Screen1";
import Menu from "./components/screens/Menu"
const Stack = createNativeStackNavigator();

 const App =() =>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{ title: "Welcome" }}
        />
        
      </Stack.Navigator>
      <Menu></Menu>
    </NavigationContainer>
    
  );
}
export default App
