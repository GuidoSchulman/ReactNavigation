import AsyncStorage from "@react-native-async-storage/async-storage";
//
//Definicionesdeconstantes. 
const USERNAME_KEY = "LOGIN_username";
const PASSWORD_KEY = "LOGIN_password";
class UsuarioService {
  static login = async (userName, password) => {
    //Obtienelascredencialesalmacenadaseintentaloguearse.
    let isValid = false;
    returnisValid;
  };

  static automaticlogin = async () => {
    //Obtienelascredencialesalmacenadaseintentaloguearse.
    let isValid = false;
    returnisValid;
  };
  //Eliminalascredencialesalmacenadasalcerrarsesión

  static eliminarCredenciales = async () => {};

  static almacenarCredenciales = async (userName, password) => {
    //AlmacenalascredencialesenelasyncStorage
    //(paraleerlasaliniciarlapróximavez)
  };
  static obtenerCredenciales = async () => {
    const returnValue = { userName: storedUserName, password: storedPassword };
    return returnValue;
  };
}
export default UsuarioService;
