import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import Menu from "./Menu";

export default function Screen2() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>VERDE</Text>
      </View>
      <View style={styles.menuContainer}>
        <Menu navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"green"
  },
  textContainer: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  menuContainer: {
    justifyContent: "flex-end",
    paddingBottom: "auto", // Add some padding to control spacing from the bottom
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
