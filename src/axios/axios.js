import { useState, useEffect } from "react";
import axios from 'axios';


const axiosClient = axios.create({
  baseURL: "http://challenge-react.alkemy.org/"
})

export const axiosLogIn = async (user) => {
  return axiosClient.post('', {...user}).then(response => {
      return response.data
    
  })
    .catch(function (exc) {
      throw error;
      console.log("Axios error: ", exc)
    })
}


