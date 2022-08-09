import { useState, useEffect } from "react";
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: "https://api.spoonacular.com"
})

export const axiosLogIn = () => {
  return axiosClient.get('/recipes/complexSearch').then(response => {
    if (response.status < 300) {
      return response.data
    }
    else {
      console.log("Status > 300")
    }
  })
    .catch(function (exc) {
      console.log("Axios error: ", exc)
    })
}


