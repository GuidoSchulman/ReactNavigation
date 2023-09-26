import AsyncStorage from "@react-native-async-storage/async-storage";
//
//Definicionesdeconstantes.
const USERNAME_KEY = "LOGIN_username";
const PASSWORD_KEY = "LOGIN_password";
class UsuarioService {
  login = async (userName, password) => {
    let isValid = false;
    console.log(userName + " " + password);
    if (
      userName.toUpperCase() === "GUIDO" && password.toUpperCase() === "YUMMY") {
      this.almacenarCredenciales(userName, password);
      isValid = true;
      return isValid;
    } else {
      return isValid;
    }
  };

  automaticlogin = async () => {
    //Obtienelascredencialesalmacenadaseintentaloguearse.
    let Usuario = await AsyncStorage.getItem(USERNAME_KEY);
    let Contrasena = await AsyncStorage.getItem(PASSWORD_KEY);
    console.log(Usuario, Contrasena)
    let isValid = false;
    if(Usuario == 'Guido' && Contrasena == 'Yummy'){
      isValid = true;
    }else{
      isValid = false;
    }
    return isValid;
  };
  //Eliminalascredencialesalmacenadasalcerrarsesión

  eliminarCredenciales = async () => {
    await AsyncStorage.removeItem(USERNAME_KEY);
    await AsyncStorage.removeItem(PASSWORD_KEY);
  };

  almacenarCredenciales = async (userName, password) => {
    try {
      await AsyncStorage.setItem(USERNAME_KEY, userName);
      await AsyncStorage.setItem(PASSWORD_KEY, password);
      return isValid;
    } catch (e) {}
  };

  obtenerCredenciales = async () => {
    try {
      let storedUserName = await AsyncStorage.getItem(USERNAME_KEY);
      let storedPassword = await AsyncStorage.getItem(PASSWORD_KEY);
      const returnValue = {
        userName: storedUserName,
        password: storedPassword,
      };
      return returnValue;
    } catch (e) {}
  };
}
export default UsuarioService;
