import { StyleSheet, View, Text, Alert, Image, Modal, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { getPlatosById } from '../axios/axios.js';


export function Plato({route, navigation}) {
  const { itemId } = route.params;
  const [detallePlatoState, setDetallePlatoState] = useState();
  function axiosPlatos(itemId) {
    getPlatosById(itemId)
      .then((res) => {
        setDetallePlatoState(res)
        console.log(detallePlatoState)
      })
      .catch(() => {
        Alert.alert("Fallo la busqueda de platos")
      });
  }
  useEffect(() => {
    axiosPlatos(itemId);
  },[]);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={detallePlatoState}
        onRequestClose={() => {
          setDetallePlatoState(!detallePlatoState);
        }}>
        <Image
          style={{ width: '100%', height: '40%' }}
          source={{ uri: detallePlatoState?.image }}
        />
        <Text style={styles.textChico}>DETALLES DEL PLATO: </Text>
        <Text style={styles.textChico}>Nombre: {detallePlatoState?.title} </Text>
        <Text style={styles.textChico}>Precio: {detallePlatoState?.pricePerServing} </Text>
        <Text style={styles.textChico}>Apto vegano: {detallePlatoState?.vegan ? 'si' : 'no'} </Text>

        <Button
          title="Agregar"
          onPress={() => navigation.navigate('Menu', detallePlatoState.id)}
        />
      </Modal>

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
  textChico: {
    marginBottom: 15,
    textAlign: "center"
  },
});
