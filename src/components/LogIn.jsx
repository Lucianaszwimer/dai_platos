import { StyleSheet, View, Alert, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { axiosLogIn } from '../axios/axios';
import { useContextState } from '../../contextState.js';
import { ActionTypes } from '../../contextState';

export function LogIn() {
  const navigation = useNavigation();

  const { contextState, setContextState } = useContextState();

  const validacion = (event) => {
    event.preventDefault()
    if (!contextState.user.email || !contextState.user.password) {
      Alert.alert("No se han ingresado los valores")
    }
    else {
        axiosLogIn(contextState.user)
        .then(() => {
          navigation.navigate('Home')
        })
        .catch(() => {
          Alert.alert("Su clave no esta autorizada")
        });
    }
  }

  return (
    <View style={styles.container}>

      <Text>Usuario</Text>
      <TextInput
        type="text"
        placeholder={'Email'}
        style={styles.input}
        name="email"
        onChangeText={(text) => setContextState({
          type: ActionTypes.SetEmail,
          value: text
        })
        }
      />

      <Text>Contraseña</Text>
      <TextInput
        type="password"
        placeholder={'Password'}
        secureTextEntry={true}
        name="password"
        style={styles.input}
        onChangeText={(text) => setContextState({
          type: ActionTypes.SetPassword,
          value: text
        })
        }
      />

      <Button
        title={'Login'}
        style={styles.input}
        onPress={validacion}
      />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
