import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogIn } from './src/components/LogIn.jsx'
import { Home } from './src/components/Home.jsx'
import { Plato } from './src/components/Plato.jsx'
import { Menu } from './src/components/Menu.jsx'
import { ContextProvider } from './contextState.js';

const Stack = createNativeStackNavigator();

function LogInScreen() {
  return (
    <LogIn />
  );
}

function HomeScreen() {
  return (
    <Home />
  );
}

function PlatoScreen(props) {
  return (
    <Plato {...props}/>
  );
}

function MenuScreen() {
  return (
    <Menu />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <ContextProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="LogIn" component={LogInScreen} /> */}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Plato" component={PlatoScreen} />
          <Stack.Screen name="Menu" component={MenuScreen} />
        </Stack.Navigator>
      </ContextProvider>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
