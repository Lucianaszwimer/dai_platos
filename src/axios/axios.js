import { useState, useEffect } from "react";
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: "https://api.spoonacular.com"
})

export const axiosLogIn = () => {
    const [alumnos, setAlumnos] = useState([])
    useEffect(() => {
      async function getAllAlumnos() {
        try {
          const alumnos = await axios.get('http://10.0.2.2:8000/api/related/')
          console.log(alumnos.data)
          setAlumnos(alumnos.data)
        } catch (error) {
          console.log(error)
        }
      }
      getAllAlumnos()
    }, [])
    return(alumnos);
}

return axiosClient.get('/recipes/complexSearch').then(response =>{
  if(response.status < 300){
      return response.data
  }
  else {
      console.log("Status > 300")
  }
})
.catch(function(exc) {
  console.log("Axios error: ", exc)
})
}