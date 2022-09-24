import { StyleSheet, Text, Alert, Image, Modal, Button, Pressable } from 'react-native';
import { getPlatosById } from '../services/axios.js';
import { useContextState, ActionTypes } from '../../contextState.js';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Plato({ plato, menu }) {
  const { contextState, setContextState } = useContextState();
  const [modalVisible, setModalVisible] = useState(false);
  let agregarVisible = false;
  let menuAux = contextState?.menu
  let vegan = 0
  let notVegan = 0
  contextState?.menu.forEach(e => { e.vegan ? vegan++ : notVegan++ })
  if (vegan == 2 && plato.vegan) {
    agregarVisible = true
  } else if (notVegan == 2 && !plato.vegan) {
    agregarVisible = true
  } 
  if(contextState?.menu.length == 4){
    agregarVisible = true
  } 

  const axiosPlatos = (itemId) => {
    getPlatosById(itemId)
      .then((res) => {
        menuAux.push(res)
      })
      .catch(() => {
        Alert.alert("Fallo la busqueda de plato")
      });
  }
  const addPlato = () => {
    setContextState({
      type: ActionTypes.AddPlato,
      value: menuAux
    });
  }
  return (
    <SafeAreaView>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }} >
        <SafeAreaView style={styles.modal}>
          <Image
            style={{ width: '100%', height: '40%', borderRadius: 15, }}
            source={{ uri: plato.image ?? 'https://dclgroup.com.ar/wp-content/themes/unbound/images/No-Image-Found-400x264.png' }}
          />
          <Text style={styles.textChico}>Nombre: {plato.title} </Text>
          <Text style={styles.textChico}>Precio: {plato.pricePerServing} </Text>
          <Text style={styles.textChico}>Vegetariano: {plato.vegetarian ? 'si' : 'no'} </Text>
          <Text style={styles.textChico}>Vegano: {plato.vegan ? 'si' : 'no'} </Text>
          <Text style={styles.textChico}>Preparado en: {plato.readyInMinutes} minutos </Text>
          <Text style={styles.textChico}>Gluten free: {plato.glutenFree ? 'si' : 'no'} </Text>
          <Text style={styles.textChico}>Nv saludable: {plato.healthScore} </Text>

          <Pressable
            style={styles.press}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.textPress}>Cerrar</Text>
          </Pressable>
        </SafeAreaView>
      </Modal>

      {menu ?
        <>
          <SafeAreaView style={styles.resultados}>
            <Text style={styles.textChico}>Nombre: {plato?.title} </Text>
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
                  value: plato.id
                });
              }}
            />
          </SafeAreaView>
        </>
        :
        <>
          <SafeAreaView style={styles.resultados}>
            <Text style={styles.textChico}>{plato?.title} </Text>
            <Button
              style={styles.input}
              title="Agregar"
              onPress={() => {
                axiosPlatos(plato.id)
                addPlato()
              }}
              disabled={agregarVisible}
            />
          </SafeAreaView>
        </>
      }
    </SafeAreaView>
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
