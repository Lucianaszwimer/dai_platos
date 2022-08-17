import { StyleSheet, View, Text, Alert, FlatList } from 'react-native';
import { axiosRecetas } from '../axios/axios';


export function Home() {
  let platos;
const axiosPlatos = async () => {
    platos = await axiosRecetas()
    .then(() => {
      console.log("platos:", platos)
    })
    .catch(() => {
      Alert.alert("Fallo la busqueda de platos")
    });
  }

  axiosPlatos();

  return (

    <View style={styles.container}>
      <FlatList
        data={[
          { key: platos }
        ]}
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
