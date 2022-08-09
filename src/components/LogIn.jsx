import { StyleSheet, View, Alert, Text } from 'react-native';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native-web';

export function LogIn() {
  const navigation = useNavigation();

  const [user, setUser] = useState({
    "email": "",
    "password": ""
  });

  const handleChange = (event) => {
    const value = event?.target?.value;
    const name = event?.target?.name
    setUser({
      ...user,
      [name]: value,
    });
  };

  const validacion = async (event) => {
    console.log('validar')
    console.log(user)
    if (!useState() || !useState()) {
      Alert.alert("No se han ingresado los valores")
    }
    else {
      await axiosLogIn(user).then(() => {
        navigation.navigate('Home')
      })
        .catch(() => {
          Alert.alert("Su clave no esta autorizada")
        });
    }
  }

  return (
    <View style={styles.container}>
      <Form>
        <Text>Usuario</Text>
        <TextInput
          type="text"
          value={user.email}
          placeholder={'Email'}
          style={styles.input}
          name="Email"
          onChange={handleChange}
          onBlur={validacion}
          required
        />
        <Text>Contraseña</Text>
        <TextInput
          type="password"
          value={user.password}
          placeholder={'Password'}
          secureTextEntry={true}
          name="Password"
          style={styles.input}
          onChange={handleChange}
          onBlur={validacion}
        />

        <Button
          title={'Login'}
          style={styles.input}
          onPress={validacion}
        />
      </Form>
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
