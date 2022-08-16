import { useState, useEffect } from "react";
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: "http://challenge-react.alkemy.org/"
})

export const axiosLogIn = async (user) => {
  return axiosClient.post('', { ...user }).then(response => {
    console.log(response.data)
    return response.data
  })
    .catch(function (exc) {
      throw error;
      console.log("Axios error: ", exc)
    })
}

/*const axiosChef = axios.create({
  baseURL: " https://api.spoonacular.com/recipes/complexSearch"
})

export const axiosRecetas = async (user) => {
  return axiosChef.get('', { ...x }).then(response => {
    return response.data
  })
    .catch(function (exc) {
      throw error;
      console.log("Axios error: ", exc)
    })
}*/


