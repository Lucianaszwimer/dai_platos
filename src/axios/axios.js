import axios from 'axios';
import 'dotenv/config';

//const  ApiKey = process.env.API_KEY;

const axiosClient = axios.create({
  baseURL: "http://challenge-react.alkemy.org/",
 
})

export const axiosLogIn = (user) => {
  return axiosClient.post('', { ...user }).then(response => {
    console.log("adentro axios:", response.data)
    return response.data
  })
    .catch(function (exc) {
      throw error;
    })
}

export const axiosRecetas = () => {
  //no anda si usamos la apikey en el env
  return axiosClient.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=6dcc1e5214e249c8b177852962c17dd6`)
  .then(response => {
    console.log(response.data)
    return response.data
  })
    .catch(function (exc) {
      console.log("entro al catch")
      throw error;
    })
}

export const getPlatosByNombre = (busqueda) => {
  return axiosClient.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=6dcc1e5214e249c8b177852962c17dd6&query=${busqueda}`)
  .then(response => {
    console.log("entro bien al axios")
    return response.data
  })
  .catch(function(exc){
    console.log("entro al catch")
    throw error;  
  })
}
