import { StyleSheet, View, Alert, FlatList } from 'react-native';
import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { getPlatosByNombre } from '../axios/axios.js';
import Plato from './Plato.jsx';

export function Home() {
  const [busquedaState, setBusquedaState] = useState("");
  const [platosBuscadosState, setPlatosBuscadosState] = useState([]);

  const axiosPlatos = async (busqueda) => {
    getPlatosByNombre(busqueda)
      .then((res) => {
        setPlatosBuscadosState(res)
      })
      .catch((err) => {
        Alert.alert("Fallo la busqueda de platos")
        console.log(err)
      });
  }

  const renderItem = ({ item }) => (
    <Plato platos={item} inMenu={false} />

  );

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Escriba aquí..."
        onChangeText={(busqueda) => {
          setBusquedaState(busqueda);
          if (busqueda.length > 2) {
            axiosPlatos(busqueda)
          } else {
            setPlatosBuscadosState([]);
          }
        }}
        value={busquedaState}
      />
      
        <FlatList
          data={platosBuscadosState.results}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
