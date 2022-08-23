import { StyleSheet, View, Text, Alert, FlatList } from 'react-native';
import { axiosRecetas } from '../axios/axios';
import { useContextState } from '../../contextState.js';
import { ActionTypes } from '../../contextState';
import {useState, useEffect} from 'react';

export function Home() {

  const { contextState, setContextState } = useContextState();
  const axiosPlatos = () => {
    axiosRecetas()
      .then((res) => {
        setContextState({
          type: ActionTypes.AddPlato,
          value: res
        })
        console.log(contextState.menu)
      })
      .catch(() => {
        Alert.alert("Fallo la busqueda de platos")
      });
  }



  return (
    <View style={styles.container}>
      <FlatList
        data={
        contextState.menu
        }
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
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
