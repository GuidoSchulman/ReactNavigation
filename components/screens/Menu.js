import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";

const Menu = ({navigation}) => {
  const navigateBlue = () => navigation.navigate("Screen1");
  const navigateGreen = () => navigation.navigate("Screen2");
  const navigateRed = () => navigation.navigate("Screen3");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menu}>
        <Pressable style={[styles.button, styles.azul]} onPress={navigateBlue}>
          <Text style={styles.textButton}>AZUL</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.verde]} onPress={navigateGreen}>
          <Text style={styles.textButton}>VERDE</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.rojo]} onPress={navigateRed}>
          <Text style={styles.textButton}>ROJO</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    display: "flex",
  },
  menu: {
    flexDirection: "row",
    width: "100%",
   
    bottom:0,
    flex: 0.1
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 100, 
   borderRadius:"10px",
   borderColor:"black",
   borderWidth:"4px"
  },
  textButton: {
    color: "white",
    fontSize: 18, 
    fontWeight: "bold",
  },
  azul: {
    backgroundColor: "blue",
  },
  verde: {
    backgroundColor: "green",
  },
  rojo: {
    backgroundColor: "red",
  },
});

export default Menu;