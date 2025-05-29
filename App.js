import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './components/Home';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Iniciativas from './components/Iniciativas';
import Perfil from './components/Perfil';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function LoginStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Acesso" component={LoginStack} />
        <Drawer.Screen name="Iniciativas" component={Iniciativas} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}