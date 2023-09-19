import AsyncStorage from "@react-native-async-storage/async-storage";
//
//Definicionesdeconstantes.
const USERNAME_KEY = "LOGIN_username";
const PASSWORD_KEY = "LOGIN_password";
class UsuarioService {
  static login = async (userName, password) => {
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

  static automaticlogin = async () => {
    //Obtienelascredencialesalmacenadaseintentaloguearse.
    let isValid = false;
    return isValid;
  };
  //Eliminalascredencialesalmacenadasalcerrarsesión

  static eliminarCredenciales = async () => {};

  static almacenarCredenciales = async (userName, password) => {
    try {
      await AsyncStorage.setItem(USERNAME_KEY, userName);
      await AsyncStorage.setItem(PASSWORD_KEY, password);
      return isValid;
    } catch (e) {}
  };
  static obtenerCredenciales = async () => {
    try {
      console.log("entro");
      let storedUserName = await AsyncStorage.getItem(USERNAME_KEY);
      let storedPassword = await AsyncStorage.getItem(PASSWORD_KEY);
      const returnValue = {
        userName: storedUserName,
        password: storedPassword,
      };
      console.log("Username" + returnValue.userName);
      return returnValue;
    } catch (e) {}
  };
}
export default UsuarioService;
