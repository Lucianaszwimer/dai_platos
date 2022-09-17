import { StyleSheet, View, Text, Alert, Image, Modal, Button, Pressable } from 'react-native';
import { getPlatosById } from '../axios/axios.js';
import { useContextState, ActionTypes } from '../../contextState.js';
import { useState } from 'react';

export default function Plato({ platos, inMenu }) {
  const { contextState, setContextState } = useContextState();
  const [modalVisible, setModalVisible] = useState(false);
  let agregarVisible = false;
  let menuAux = contextState?.menu
  let vegan = 0
  let notVegan = 0
  console.log("Platos")
  menuAux.forEach(e => { e.vegan ? vegan++ : notVegan++ })
  if (vegan == 2 && platos.vegan) {
    agregarVisible = true
  } else if(notVegan == 2 && !platos.vegan){
    agregarVisible = true
  }

  const axiosPlatos = (itemId) => {
    getPlatosById(itemId)
      .then((res) => {
        menuAux.push(res)
      })
      .catch(() => {
        Alert.alert("Fallo la busqueda de platos")
      });
  }
  const addPlato = () => {
    setContextState({
      type: ActionTypes.AddPlato,
      value: menuAux
    });
  }
  return (
    <>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }} >
        <View style={styles.modal}>
          <Image
            style={{ width: '100%', height: '40%', borderRadius: 15, }}
            source={{ uri: platos.image ?? 'https://dclgroup.com.ar/wp-content/themes/unbound/images/No-Image-Found-400x264.png' }}
          />
          <Text style={styles.textChico}>Nombre: {platos.title} </Text>
          <Text style={styles.textChico}>Precio: {platos.pricePerServing} </Text>
          <Text style={styles.textChico}>Vegetariano: {platos.vegetarian ? 'si' : 'no'} </Text>
          <Text style={styles.textChico}>Vegano: {platos.vegan ? 'si' : 'no'} </Text>
          <Text style={styles.textChico}>Preparado en: {platos.readyInMinutes} minutos </Text>
          <Text style={styles.textChico}>Gluten free: {platos.glutenFree ? 'si' : 'no'} </Text>
          <Text style={styles.textChico}>Nv saludable: {platos.healthScore} </Text>

          <Pressable
            style={styles.press}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.textPress}>Cerrar</Text>
          </Pressable>
        </View>
      </Modal>

      {inMenu ?
        <>
          <View style={styles.resultados}>
            <Text style={styles.textChico}>Nombre: {platos?.title} </Text>
            <Button
              style={styles.input}
              title="Detalle"
              onPress={() => {
                setModalVisible(true);
              }}
            />
            <Button
              style={styles.input}
              title="Eliminar"
              onPress={() => {
                setContextState({
                  type: ActionTypes.DelPlato,
                  value: platos.id
                });
              }}
            />
          </View>
        </>
        :
        <>
          <View style={styles.resultados}>
            <Text style={styles.textChico}>{platos?.title} </Text>
            <Button
              style={styles.input}
              title="Agregar"
              onPress={ () => {
                axiosPlatos(platos.id)
                addPlato()
              }}
              disabled={agregarVisible}
            />
          </View>
        </>
      }
    </>
  );

}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  textChico: {
    marginBottom: 10,
    textAlign: "center"
  },
  input: {
    width: 10,
    height: 44,

  },
  resultados: {
    paddingTop: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
    margin: 20,
    marginTop: 90,
    width: '80%',
    height: '70%',
    backgroundColor: "white",
    borderRadius: 15,
    padding: 35,
    alignItems: "center",
    justifyContent: 'center',
  },
  press: {
    backgroundColor: "blue",
    width: 65,
    height: 27,
    borderRadius: 5,
  },
  textPress: {
    marginBottom: 10,
    textAlign: "center",
    color: "white",
  },
});
