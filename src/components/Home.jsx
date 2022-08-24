import { StyleSheet, View, Text, Alert, FlatList } from 'react-native';
import { axiosRecetas } from '../axios/axios';
import { useContextState } from '../../contextState.js';
import { ActionTypes } from '../../contextState';
import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';
import { getPlatosByNombre } from '../axios/axios.js';

import { Plato } from './Plato.jsx'

export function Home() {

  const [busquedaState, setBusquedaState] = useState("");
  const [platosBuscadosState, setPlatosBuscadosState] = useState([]);

  const axiosPlatos = (busqueda) => {
    let caracteresBusqueda = busqueda.length
    if (caracteresBusqueda > 2) {
      getPlatosByNombre(busqueda)
        .then((res) => {
          setPlatosBuscadosState(res)
          console.log(platosBuscadosState)
        })
        .catch((err) => {
          Alert.alert("Fallo la busqueda de platos")
          console.log(err)
        });
    }
  }
  const renderItem = ({ item }) => (
    <Plato data={item} isMenu={false} setMenu={props.setMenu} menu={props.menu} />
  );

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Escriba aquí..."
        onChangeText={(busqueda) => {
          setBusquedaState(busqueda);
          axiosPlatos(busqueda)
        }}
        value={busquedaState}
      />
      <FlatList style={styles.item}
        data={platosBuscadosState}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
