import axios from 'axios';


const ApiKey = "6dcc1e5214e249c8b177852962c17dd6";

const axiosClientLogin = axios.create({
  baseURL: "http://challenge-react.alkemy.org/",

})

const axiosClientApi = axios.create({
  baseURL: "https://api.spoonacular.com/recipes/",
  
})

export const axiosLogIn = async (user) => {
  try {
    const response = await axiosClientLogin.post('', { ...user });
    return response.data;
  } catch (exc) {
    throw error;
  }
}

export const axiosRecetas = async () => {
  //no anda si usamos la apikey en el env
  try {
    const response = await axiosClientApi.get(`/complexSearch?apiKey=${ApiKey}`, {mode:'cors'});
    return response.data;
  } catch (exc) {
    throw error;
  }
}

export const getPlatosByNombre = async (busqueda) => {
  try {
    const response = await axiosClientApi.get(`/complexSearch?apiKey=${ApiKey}&query=${busqueda}`, {mode:'cors'});
    return response.data;
  } catch (exc) {
    throw error;
  }
}

export const getPlatosById = async (id) => {
  try {
    const response = await axiosClientApi.get(`/${id}/information?includeNutrition=false&apiKey=${ApiKey}`, {mode:'cors'});
    return response.data;
  } catch (exc) {
    throw error;
  }
}
