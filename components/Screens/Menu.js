import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import BotonReutilizable from "../ComponenteReutilizable/BotonReutilizable";

const Menu = ({navigation}) => {
  const navigateBlue = () => navigation.navigate("Screen1");
  const navigateGreen = () => navigation.navigate("Screen2");
  const navigateRed = () => navigation.navigate("Screen3");
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menu}>
        <BotonReutilizable style={[styles.button, styles.azul]} onPress={navigateBlue}texto="AZUL">
        </BotonReutilizable>
        <BotonReutilizable style={[styles.button, styles.verde]} onPress={navigateGreen}texto="VERDE">
         
        </BotonReutilizable>
        <BotonReutilizable style={[styles.button, styles.rojo]} onPress={navigateRed}texto="ROJO">

        </BotonReutilizable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 100,  // Remove quotes around numeric value
    borderRadius: 10, // Remove quotes around numeric value
    borderColor: "black",
    borderWidth: 4,  // Remove quotes around numeric value
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