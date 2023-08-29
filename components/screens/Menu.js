import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";

const Menu = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menu}>
        <Pressable style={[styles.button, styles.azul]}>
          <Text style={styles.textButton}>AZUL</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.verde]}>
          <Text style={styles.textButton}>VERDE</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.rojo]}>
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