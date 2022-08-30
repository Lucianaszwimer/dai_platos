import { StyleSheet, View, Text, Alert, FlatList } from 'react-native';
import { axiosRecetas } from '../axios/axios';
import { useContextState } from '../../contextState.js';
import { ActionTypes } from '../../contextState';
import {useState, useEffect} from 'react';
import { getPlatosById } from '../axios/axios.js';


export function Plato(props) {

    const { contextState, setContextState } = useContextState();
    const axiosPlatos = () => {
      getPlatosById(props)
        .then((res) => {
          console.log(res)
        })
        .catch(() => {
          Alert.alert("Fallo la busqueda de platos")
        });
    }
    useEffect(() => {
      axiosPlatos(props);
    });

    return (
      <View style={styles.container}>
        
      </View>
    );
  
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });
  