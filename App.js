import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { LogIn } from './src/components/LogIn.jsx'
import { Home } from './src/components/Home.jsx'
import { Menu } from './src/components/Menu.jsx'
import { ContextProvider, useContextState } from './contextState.js';

export default function App() {
  const { contextState, setContextState } = useContextState();

  return (
    <ContextProvider>

      {!contextState.user.token ?
        <>
          <LogIn />
        </>
        :
        <View style={styles.container}>
          <Home />
          <Menu />
        </View>
      }
    </ContextProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:"row", 
    display:"flex",
  },
});
