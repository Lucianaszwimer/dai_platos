import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';

export function LogIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('0');
  
  const [password, setPassword] = useState('1');

   const validacion = async (e) => {
    console.log('validar')
    if (!useState('0') || !useState('1')) {
      Alert.alert("No se han ingresado los valores")
    }
    else {
      await axiosLogIn(user).then(()=> {
        navigation.navigate('Home')
      })
      .catch(() => {
        Alert.alert("Su clave no esta autorizada")
      });
    }
   }

  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        placeholder={'Email'}
        style={styles.input}
        onChangeText={newEmail => setEmail(newEmail)}
        defaultValue={email}
        onBlur={validacion(value)}
      />
      <Text>{this.state.field_empty}</Text>
      <TextInput
        value={password}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
        onChangeText={newPassword => setPassword(newPassword)}
        defaultValue={password}
        onBlur={validacion(value)}
      />
      <Text>{this.state.field_empty}</Text>
      <Alert></Alert>
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
