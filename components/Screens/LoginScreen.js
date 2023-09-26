import { SafeAreaView,TextInput,StyleSheet,Button, Alert,Image } from "react-native";
import React from "react";
import BotonReutilizable from "../ComponenteReutilizable/BotonReutilizable";
import juanBauti from "../../assets/Juan.jpeg"
import UsuarioService from "../UsuarioService.js";

const LoginScreen=({navigation})=>{
  const usuarioService = new UsuarioService();
  const [Usuario, handleUsuario] = React.useState("");
  const [Contrasena, handleContrasena] = React.useState("");
  


    const handleNavigate = async() => {
    if (isValid=await usuarioService.login(Usuario,Contrasena)) {
      
      navigation.navigate("Screen1")
    }
    else{
      Alert.alert("Invalid Credentials", "Please enter the correct username and password.");
    }
  }
  



return(
    <SafeAreaView>
       <Image
        style={styles.tinyLogo}
        source={juanBauti}
      />
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
  