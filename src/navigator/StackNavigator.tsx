import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';


export type RootStackParams = {
  Pagina1Screen:undefined,
  Pagina2Screen:undefined,
  Pagina3Screen:undefined,
  Persona:{ id:string, name:string }, 
}

const Stack = createNativeStackNavigator<RootStackParams>();
export const StackNavigator = () => {
  return (
    <Stack.Navigator
      //initialRouteName='Pagina2Screen'
      screenOptions={{
        headerStyle:{
          backgroundColor:'black',
        },
        headerTitleStyle:{
          color: 'white'
        },
        headerShadowVisible:false,
        headerTransparent:false,
        contentStyle:{
          backgroundColor:'black',
        }
      }}
    >
      <Stack.Screen name="Pagina1Screen" options={{ title:'Página 1' }} component={ Pagina1Screen } />
      <Stack.Screen name="Pagina2Screen" options={{ title:'Página 2' }} component={ Pagina2Screen } />
      <Stack.Screen name="Pagina3Screen" options={{ title:'Página 3' }} component={ Pagina3Screen } />
      <Stack.Screen name="Persona" options={{ title:'Persona' }} component={ PersonaScreen } />
    </Stack.Navigator>
  );
};