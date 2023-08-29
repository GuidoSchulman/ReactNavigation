import { SafeAreaView,TextInput,StyleSheet,Button } from "react-native";
import React from "react";



const LoginScreen=({navigation})=>{
    const [Usuario, handleUsuario] = React.useState("");
  const [Contrasena, handleContrasena] = React.useState("");
  
 const handleNavigate = () => {
  if (Usuario !=null && Contrasena!=null) {
    navigation.navigate("Screen1")
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
          <Button title="LOGIN" onPress={handleNavigate} ></Button>

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
  