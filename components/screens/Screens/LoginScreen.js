import { SafeAreaView,TextInput,StyleSheet,Button, Alert } from "react-native";
import React from "react";
import BotonReutilizable from "../ComponenteReutilizable/BotonReutilizable";


const LoginScreen=({navigation})=>{
    const [Usuario, handleUsuario] = React.useState("");
  const [Contrasena, handleContrasena] = React.useState("");
  
  const handleNavigate = () => {
    if (Usuario.toUpperCase() === 'GUIDO' && Contrasena.toUpperCase() === 'YUMMY') {
      console.log(Usuario);
      console.log(Contrasena);
      navigation.navigate("Screen1");
    } else {
      
      Alert.alert("Invalid Credentials", "Please enter the correct username and password.");
    }
  }



return(
    <SafeAreaView>
        <TextInput
            style={styles.input}
            placeholder="Ingrese Usuario"
            onChangeText={handleUsuario}
            value={Usuario}
          />
          <TextInput
            style={styles.input}
            placeholder="ingrese Contrasena"
            onChangeText={handleContrasena}
            value={Contrasena}
          />
          <BotonReutilizable
          onPress={handleNavigate}
          style={styles.logoutDiferente}
          texto="Ingresar"
        ></BotonReutilizable>

    </SafeAreaView>
)


}
export default LoginScreen
const styles = StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignContent:"center"
    },
    
  

    input: { height: 40, borderWidth: 2, padding: 1 }
   
    
  });
  