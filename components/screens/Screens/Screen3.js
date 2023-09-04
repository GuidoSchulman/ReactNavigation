import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import BotonReutilizable from "../ComponenteReutilizable/BotonReutilizable";

import Menu from "./Menu";

export default function Screen3() {
  const navigation = useNavigation();
  const handleLogOut=()=>{
    navigation.navigate("LoginScreen")
    
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>ROJO</Text>
   
        <BotonReutilizable
          onPress={handleLogOut}
          style={styles.logoutDiferente}
          texto="LOGOUT (COMPONENTE)"
        ></BotonReutilizable>
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
    backgroundColor: "red",
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
  logoutDiferente: { backgroundColor: "red" },
});
