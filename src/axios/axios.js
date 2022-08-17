import axios from 'axios';
import 'dotenv/config';

const  ApiKey = process.env.API_KEY;

const axiosClient = axios.create({
  baseURL: "http://challenge-react.alkemy.org/",
 
})

export const axiosLogIn = async (user) => {
  return axiosClient.post('', { ...user }).then(response => {
    console.log("adentro axios:", response.data)
    return response.data
  })
    .catch(function (exc) {
      throw error;
    })
}

export const axiosRecetas = async () => {
  //no anda si usamos la apikey en el env
  return axiosClient.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${ApiKey}`)
  .then(response => {
    console.log("entro al then")
    console.log(response.data)
    return response.data
  })
    .catch(function (exc) {
      console.log("entro al catch")
      throw error;
    })
}

