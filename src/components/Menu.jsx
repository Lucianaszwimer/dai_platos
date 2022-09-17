import { StyleSheet, View, Text, FlatList } from 'react-native';
import React from 'react';
import { useContextState } from '../../contextState.js';
import Plato from './Plato.jsx';


export function Menu() {
  const { contextState, setContextState } = useContextState();
  
  let acumulativoPrecio = 0;
  let acumulativoSalud = 0;
  let vegan = 0;
  let notVegan = 0;
  contextState.menu.forEach(element => {
    acumulativoPrecio += element.pricePerServing;
    acumulativoSalud += element.healthScore;
    element.vegan ? vegan++ : notVegan++;
  });
  console.log("En el menu", contextState.menu)

  const renderItem = ({ item }) => (
    <Plato platos={item} inMenu={true} />
  );

  return (
    <View style={styles.container}>
      <Text>Menu</Text>
      <Text>Acumulativo precio: {acumulativoPrecio}</Text>
      <Text>Salud promedio: {acumulativoSalud}</Text>
      <Text>Platos veganos: {vegan}</Text>
      <Text>Platos no veganos: {notVegan}</Text>
      <FlatList
        data={contextState?.menu}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
});
