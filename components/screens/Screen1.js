import { SafeAreaView,TextInput,StyleSheet,Button,Text } from "react-native";
import React from "react";
export default function Screen1(){
    const [Usuario, handleUsuario] = React.useState("");
  const [Contrasena, handleContrasena] = React.useState("");
return(
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>
            AZUL
        </Text>
        
    </SafeAreaView>
)


}
const styles = StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      color: "blue"
      
    },
    text:{
        justifyContent: "center",
        textAlign: "center", 
        alignItems: "center"
    },
  

    input: { height: 40, borderWidth: 2, padding: 1 }
   
    
  });
  