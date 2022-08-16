import { StyleSheet, View, Alert, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState} from 'react';
import LoadingSpin from "react-loading-spin";
import { axiosLogIn } from '../axios/axios';
import { useContextState } from '../../App';
import { ActionTypes } from '../../contextState';

export function LogIn() {
  const navigation = useNavigation();
  const {contextState, setContextState} = useContextState();
  

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const validacion = async (event) => {
    event.preventDefault()
    if (!user.email || !user.password) {
      Alert.alert("No se han ingresado los valores")
    }
    else {
      let token = await axiosLogIn(user)
      .then(() => {
        console.log(token);
        <LoadingSpin>
        </LoadingSpin>
        navigation.navigate('Home')
      })
        .catch(() => {
          Alert.alert("Su clave no esta autorizada")
        });
    }
    setContextState({
      type:ActionTypes.SetEmail,
      value:{
        email:user.email
      }
    },{
      type:ActionTypes.SetPassword,
      value:{
        password:user.password
      }
    })
  }

  return (
    <View style={styles.container}>
    
        <Text>Usuario</Text>
        <TextInput
          type="text"
          value={user.email}
          placeholder={'Email'}
          style={styles.input}
          name="email"
          onChangeText={(text) => setUser({
            ...user,
            email: text,
          })} 
        />

        <Text>Contraseña</Text>
        <TextInput
          type="password"
          value={user.password}
          placeholder={'Password'}
          secureTextEntry={true}
          name="password"
          style={styles.input}
          onChangeText={(text) => setUser({
            ...user,
            password: text,
          })} 
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
