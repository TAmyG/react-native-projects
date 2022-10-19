import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Page1Screen} from '../screens/Page1Screen';
import {Page2Screen} from '../screens/Page2Screen';
import {Page3Screen} from '../screens/Page3Screen';
import {PersonaScreen} from '../screens/PersonaScreen';

export type RootStackParams = {
  Page1Screen: undefined;
  Page2Screen: undefined;
  Page3Screen: undefined;
  PersonaScreen: {id: number; nombre: string};
};

const Stack = createStackNavigator<RootStackParams>(); //Optional Type

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Page1Screen"
      screenOptions={{
        headerStyle: {
          elevation: 0, //Android elimina linea
          shadowColor: 'transparent', //ios oculta linea
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Page1Screen"
        options={{title: 'Pag. 1'}}
        component={Page1Screen}
      />
      <Stack.Screen
        name="Page2Screen"
        options={{title: 'Pag. 2'}}
        component={Page2Screen}
      />
      <Stack.Screen
        name="Page3Screen"
        options={{title: 'Pag. 3'}}
        component={Page3Screen}
      />
      <Stack.Screen name="PersonaScreen" component={PersonaScreen} />
    </Stack.Navigator>
  );
};
