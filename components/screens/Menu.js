import { SafeAreaView,TextInput,StyleSheet,Button,Text,Footer, View } from "react-native";
import React from "react";
const Menu =()=>{
    const [Usuario, handleUsuario] = React.useState("");
  const [Contrasena, handleContrasena] = React.useState("");
return(
    <SafeAreaView style={styles.container}>
        <View style={styles.menu}>

        </View>

        
    </SafeAreaView>
)


}
export default Menu
const styles = StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      color: "blue"
      
    },
    menu:{
        justifyContent: "center",
        textAlign: "center",
        
    },

    input: { height: 40, borderWidth: 2, padding: 1 }
   
    
  });
  