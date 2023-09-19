import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  Image,
  ActivityIndicator,
  View,
} from "react-native";
import React from "react";
import BotonReutilizable from "../ComponenteReutilizable/BotonReutilizable";
import juanBauti from "../../assets/Juan.jpeg"
import UsuarioService from "../UsuarioService.js";

const SplashScreen = ({ navigation }) => {
  let value =  UsuarioService.obtenerCredenciales();
  console.log(value);

  console.log(value);
  setTimeout(function() {
    if (value.userName == null || value.password == null) {
    navigation.navigate("LoginScreen");


  }
  else{

  }
}, 3000);
  
  ;

  return (
    <SafeAreaView>
        <Image
        style={styles.tinyLogo}
        source={juanBauti}
      />
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="blue"/>
      </View>
      
    </SafeAreaView>
  );
};
export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },

  input: { height: 40, borderWidth: 2, padding: 1 },
});
