import React, { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { LogIn } from './src/components/LogIn.jsx'
import { Home } from './src/components/Home.jsx'
import { Menu } from './src/components/Menu.jsx'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ContextProvider } from './contextState.js';


export default function App() {
  const [auth, setAuth] = useState(false);

  return (
    <SafeAreaProvider>
      <ContextProvider>

        {auth ?
          <LogIn setAuth={setAuth} />
          :
          <View style={styles.container}>
            <Home />
            <Menu />
          </View>
        }
      </ContextProvider>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    display: "flex",
  },
});
