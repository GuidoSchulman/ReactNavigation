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
      await this.almacenarCredenciales(userName.toUpperCase(), password.toUpperCase());
      isValid = true;
    }
    return isValid;
  };

  automaticlogin = async () => {
    //Obtienelascredencialesalmacenadaseintentaloguearse.
    let isValid = false;
    console.log('automaticlogin');
    let InfoUsuario= await this.obtenerCredenciales()
    console.log(InfoUsuario)
    if(InfoUsuario.userName === 'GUIDO' && InfoUsuario.password === 'YUMMY'){
      isValid = true;
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
      
    } catch (e) {

    }
  };

  obtenerCredenciales = async () => {
    let returnValue = {
      userName: null,
      password: null,
    };
    try {
        let storedUserName = await AsyncStorage.getItem(USERNAME_KEY);
        let storedPassword = await AsyncStorage.getItem(PASSWORD_KEY);
        returnValue.userName = storedUserName;
        returnValue.password = storedPassword;
    } catch (e) {
    }
    return returnValue;
  };
}
export default UsuarioService;
