import { StyleSheet, View, Text, Alert, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { getPlatosByNombre } from '../axios/axios.js';

export function Home() {

  const navigation = useNavigation();

  const [busquedaState, setBusquedaState] = useState("");
  const [platosBuscadosState, setPlatosBuscadosState] = useState([]);

  const axiosPlatos = (busqueda) => {
    if (busqueda.length > 2) {
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

  /* const renderItem = ({ item }) => {
     console.log(item)
     return <Text>{item.title}</Text>
   };*/

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
      {platosBuscadosState?.results && //nos seguramos que exista platosBuscadosState y el "result" es el resultado del array de res 
      <FlatList
        data={platosBuscadosState.results}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <>
            <Text>{item.title}</Text>
            <Button
              title="Detalle"
              onPress={() => navigation.navigate('Plato', {itemId:item.id})}
            />
          </>
        )}
      />}
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
