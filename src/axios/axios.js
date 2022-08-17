import axios from 'axios';

const axiosClient = axios.create({
  baseURL: "http://challenge-react.alkemy.org/"
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

const axiosChef = axios.create({
  baseURL: " https://api.spoonacular.com/recipes/716429/information?apiKey=",
  ApiKey : process.env.apiKey,
})

export const axiosRecetas = async () => {
  return axiosChef.get('', {ApiKey}).then(response => {
    return response.data
  })
    .catch(function (exc) {
      throw error;
    })
}


